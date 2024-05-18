import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

import { selectAllByRange } from '@/api/house';

const {VITE_KAKAO_API_KEY} = import.meta.env;

export const useHouseStore = defineStore('house', () => {

  const houses = ref([])

  const getHouses = computed(() => {
    return houses.value;
  });

  const getApartmets = computed(() => {
    return houses.value.filter(house => house.type === "apartment"); 
  });

  const getVillas = computed(() => {
    return houses.value.filter(house => house.type === "villa");
  });

  const getOfficetels = computed(() => {
    return houses.value.filter(house => house.type === "officetel");
  });

  function setHouses(newHouses) {
    houses.value = newHouses;
  }

  return { houses, getHouses, getApartmets, getVillas, getOfficetels, setHouses }

})


export const useKakaoStore = defineStore('kakao', () => {

  const houseStore = useHouseStore();

  const lat = ref(37.501486255964835);
  const lng = ref(127.03780378177515);
  let map = null;
  const markers = ref([]);

  function loadScript(router) {
    const script = document.createElement('script')
  
    // 동적 로딩을 위해서 autoload=false 추가
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=${VITE_KAKAO_API_KEY}`;
  
    script.addEventListener('load', () => window.kakao.maps.load(loadMap(router)));
    document.head.appendChild(script);
  
  }

  function loadMap(router) {
    window.kakao.maps.load(() => {
      const container = document.getElementById("map");
  
      const options = {
        center: new window.kakao.maps.LatLng(lat.value, lng.value), //지도의 중심좌표.
        level: 3 //지도의 레벨(확대, 축소 정도)
      }
      map = new window.kakao.maps.Map(container, options);

      init(router);

      dragendMap(router)
    })
  }

  function dragendMap(router) {

    window.kakao.maps.event.addListener(map, 'dragend', function() {  
  
      // 마커 지우기!!
      markers.value.forEach((marker) => {
        marker.setMap(null);
      })
      
      // 지도 중심좌표를 얻어옵니다 
      var latlng = map.getCenter(); 
      
      selectAllByRange(
        {lat: latlng.getLat(), lng: latlng.getLng()},
        ({data}) => {
          houseStore.setHouses(data);
        },
        (error) => {
          console.log(error);
        }
      )
  
      // 건물 정보 update 이후, 마커 생성
      houseStore.getHouses.forEach((house) => {
        // 마커가 표시될 위치입니다 
        var markerPosition  = new window.kakao.maps.LatLng(house.lat, house.lng);
  
        // 마커를 생성합니다.
        var marker = new window.kakao.maps.Marker({
          map: map,
          position: markerPosition,
          clickable: true
        });
  
        markers.value.push(marker);
  
        // 마커에 클릭이벤트를 등록합니다
        window.kakao.maps.event.addListener(marker, 'click', function() {

          panTo(house.lat, house.lng);
          router.push({ name: 'navi-detail', params: {id: house.id} })
          
        });
      })
      
    });
  }
  
  function panTo(lat, lng) {
      // 이동할 위도 경도 위치를 생성합니다 
      var moveLatLon = new kakao.maps.LatLng(lat, lng);

      // 지도 중심을 부드럽게 이동시킵니다
      map.panTo(moveLatLon);            
  }

  function init(router) {
    // 지도 중심좌표를 얻어옵니다 
    var latlng = map.getCenter(); 
      
    selectAllByRange(
      {lat: latlng.getLat(), lng: latlng.getLng()},
      ({data}) => {
        houseStore.setHouses(data);
      },
      (error) => {
        console.log(error);
      }
    )

    // 건물 정보 update 이후, 마커 생성
    houseStore.getHouses.forEach((house) => {
      // 마커가 표시될 위치입니다 
      var markerPosition  = new window.kakao.maps.LatLng(house.lat, house.lng);

      // 마커를 생성합니다.
      var marker = new window.kakao.maps.Marker({
        map: map,
        position: markerPosition,
        clickable: true
      });

      markers.value.push(marker);

      // 마커에 클릭이벤트를 등록합니다
      window.kakao.maps.event.addListener(marker, 'click', function() {

        panTo(house.lat, house.lng);
        router.push({ name: 'navi-detail', params: {id: house.id} })
        
      });
    })
  }

  return { lat, lng, map, loadScript, loadMap, dragendMap, panTo, markers }

})