<script setup>
import { onMounted, ref } from 'vue';
import { useKakaoStore, useHouseStore } from '@/stores/counter';

import { selectAllByRange } from '@/api/house';

const {VITE_KAKAO_API_KEY} = import.meta.env;

var map = ref(null);

const kakaoStore = useKakaoStore();
const houseStore = useHouseStore();

const markers = ref([]);

onMounted(() => {
	if(window.kakao && window.kakao.maps) {
		loadMap();
	} else {
		loadScript();
	}
})


function loadScript() {
	const script = document.createElement('script')

	// 동적 로딩을 위해서 autoload=false 추가
	script.src = `//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=${VITE_KAKAO_API_KEY}`;

	script.addEventListener('load', () => window.kakao.maps.load(loadMap()));
	document.head.appendChild(script);

}

function loadMap() {
	window.kakao.maps.load(() => {
		const container = document.getElementById("map");

		const options = {
			center: new window.kakao.maps.LatLng(kakaoStore.lat, kakaoStore.lng), //지도의 중심좌표.
			level: 3 //지도의 레벨(확대, 축소 정도)
		}
		map.value = new window.kakao.maps.Map(container, options);
		dragendMap()
	})
}

function dragendMap() {

	window.kakao.maps.event.addListener(map.value, 'dragend', function() {  

		// 마커 지우기!!
		markers.value.forEach((marker) => {
			marker.setMap(null);
		})
    
		// 지도 중심좌표를 얻어옵니다 
		var latlng = map.value.getCenter(); 
		
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
				position: markerPosition
			});

			markers.value.push(marker);
			marker.setMap(map.value);
		})
		
	});
}

</script>

<template>
	<div id="map"></div>
</template>

<style scoped>

#map {
	z-index: 0;

	position: absolute;

	top: 0; left: 0;

	width: 100vw;
	height: 100vh;
}

</style>