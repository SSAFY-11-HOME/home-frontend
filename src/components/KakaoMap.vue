<script setup>
import { onMounted, ref } from 'vue';
import { useKakaoStore } from '@/stores/counter';

const {VITE_KAKAO_API_KEY} = import.meta.env;

var map = ref(null);

const kakaoStore = useKakaoStore();

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
    
		// 지도 중심좌표를 얻어옵니다 
		var latlng = map.value.getCenter(); 
		
		var message = '변경된 지도 중심좌표는 ' + latlng.getLat() + ' 이고, 경도는 ' + latlng.getLng() + ' 입니다';
		
		console.log(message);
		
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