import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

import { selectAllByRange } from '@/api/house';
import { Base64 } from 'js-base64';

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

export const useUserStore = defineStore('user', () => {

  const jwt = ref(window.localStorage.getItem('JWT'));
  const userId = ref('');

  const isLogin = computed(() => {
    return (jwt.value !== 'null');
  });

  function login(token) {
    console.log("useUserStore. login. token : " + token);
    jwt.value = token;
    window.localStorage.setItem('JWT', token);
    userId.value = parseUserId(token);

  }

  function logout() {
    jwt.value = 'null';
    window.localStorage.setItem('JWT', 'null');
    userId.value = 'null';
  }

  const getUserId = computed(() => userId.value);

  function parseUserId(jwt) {
    let payload = jwt.split(".")[1];
    console.log(payload);
    let decodedPayload = Base64.decode(payload);
    let jsonPayload = JSON.parse(decodedPayload);

    return jsonPayload.userId;
  }



  return { jwt, isLogin, login, logout, getUserId };

})


export const useKakaoStore = defineStore('kakao', () => {

  const houseStore = useHouseStore();

  const lat = ref(37.501486255964835);
  const lng = ref(127.03780378177515);
  let map = null;
  const markers = [];

  function loadScript(router) {
    const script = document.createElement('script')
  
    // 동적 로딩을 위해서 autoload=false 추가
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=${VITE_KAKAO_API_KEY}&libraries=services`;
  
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
      for(let i = 0; i < markers.length; i++) {
        markers[i].setMap(null);
      }
      
      // 지도의 영역을 반환
      var latlng = map.getBounds();
      
      selectAllByRange(
        {lat1: latlng.qa, lat2: latlng.pa, lng1: latlng.ha, lng2: latlng.oa},
        ({data}) => {
          houseStore.setHouses(data);

          // 건물 정보 update 이후, 마커 생성
          houseStore.getHouses.forEach((house) => {
            // 마커가 표시될 위치입니다 
            var markerPosition  = new window.kakao.maps.LatLng(house.lat, house.lng);

            // // var imageSrc = 'https://picsum.photos/64/64', // 마커이미지의 주소입니다    
            // var imageSrc = '../../../src/assets/logo.png'
            // var imageSize = new window.kakao.maps.Size(64, 69) // 마커이미지의 크기입니다
            // var imageOption = {offset: new window.kakao.maps.Point(27, 69)}; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.
              
            // // 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
            // var markerImage = new window.kakao.maps.MarkerImage(imageSrc, imageSize, imageOption)
      
            // 마커를 생성합니다.
            var marker = new window.kakao.maps.Marker({
              // image: markerImage,
              map: map,
              position: markerPosition,
              clickable: true
            });
      
            markers.push(marker);
      
            // 마커에 클릭이벤트를 등록합니다
            window.kakao.maps.event.addListener(marker, 'click', function() {

              panTo(house.lat, house.lng);
              router.push({ name: 'navi-detail', params: {id: house.id} })
              
            });
          })
        },
        (error) => {
          console.log(error);
        }
      )
      
    });
  }
  
  function panTo(lat, lng) {
      // 이동할 위도 경도 위치를 생성합니다 
      var moveLatLon = new window.kakao.maps.LatLng(lat, lng);

      // 지도 중심을 부드럽게 이동시킵니다
      map.panTo(moveLatLon);            
  }

  function addressSearch(address) {
    // 주소-좌표 변환 객체를 생성합니다
    var geocoder = new window.kakao.maps.services.Geocoder();

    // 주소로 좌표를 검색합니다
    geocoder.addressSearch(address, function(result, status) {

      // 정상적으로 검색이 완료됐으면 
      if (status === window.kakao.maps.services.Status.OK) {

          var coords = new window.kakao.maps.LatLng(result[0].y, result[0].x);

          // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
          map.panTo(coords);
      } 
    });
  }

  function init(router) {

    map.setMinLevel(2);
    map.setMaxLevel(4);

    // 지도의 영역을 반환
    var latlng = map.getBounds(); 
      
    selectAllByRange(
      {lat1: latlng.qa, lat2: latlng.pa, lng1: latlng.ha, lng2: latlng.oa},
      ({data}) => {
        houseStore.setHouses(data);

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

          // 마커에 클릭이벤트를 등록합니다
          window.kakao.maps.event.addListener(marker, 'click', function() {

            panTo(house.lat, house.lng);
            router.push({ name: 'navi-detail', params: {id: house.id} })
            
          });

          markers.value.push(marker);

        })

      },
      (error) => {
        console.log(error);
      }
    )

  }

  return { lat, lng, map, loadScript, loadMap, dragendMap, panTo, addressSearch, init, markers }

})