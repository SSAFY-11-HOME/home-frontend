<script setup>
import NavigationView from '@/views/NavigationView.vue';
import KakaoMap from '@/components/KakaoMap.vue';
import { onMounted } from 'vue';

import { useKakaoStore } from './stores/counter';

const kakaoStore = useKakaoStore();

onMounted(() => {
	if(window.kakao && window.kakao.maps) {
		kakaoStore.loadMap();
	} else {
		kakaoStore.loadScript();
	}
})

</script>

<template>
  <div>
    <NavigationView/>
    <KakaoMap/>
  </div>
</template>

<style scoped>

</style>