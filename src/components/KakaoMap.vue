<script>

const {VITE_KAKAO_API_KEY} = import.meta.env;

export default {
	name: "KakaoMap",

	data() {
		return {
			map: null
		}
	},

	setup() {},
	created() {},

	mounted() {
		console.log("KAKAO MAP MOUNTED!!!");
		if(window.kakao && window.kakao.maps) {
			this.loadMap();
		} else {
			this.loadScript();
		}
	},

	unmounted() {},

	methods: {
		loadScript() {
			console.log(VITE_KAKAO_API_KEY);
			const script = document.createElement('script')
			// 동적 로딩을 위해서 autoload=false 추가

			// TODO
			script.src = `//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=${VITE_KAKAO_API_KEY}`;
			// script.src = `//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=07096c6e2269e205ca5080c87e7edafc`;

			script.addEventListener('load', () => window.kakao.maps.load(this.loadMap));
			document.head.appendChild(script);
		},

		loadMap() {
			const container = document.getElementById("map");
			const options = {
				center: new window.kakao.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
				level: 3 //지도의 레벨(확대, 축소 정도)
			}

			this.map = new window.kakao.maps.Map(container, options);
		},

		loadMarker() {
			const markerPosition = new window.kakao.maps.LatLng(
				33.450707,
				126.570667
			);

			const marker = new window.kakao.maps.Marker({
				position: markerPosition
			});

			marker.setMap(this.map);
		}
	}
}

</script>

<!-- <script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=" + process.env.KAKAO_API_KEY></script> -->

<template>
	<div id="map">
		
	</div>
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