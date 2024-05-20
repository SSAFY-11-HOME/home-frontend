<script setup>
import NavigationView from '@/views/NavigationView.vue';
import KakaoMap from '@/components/KakaoMap.vue';
import LoginButton from '@/components/LoginButton.vue';
import { onMounted } from 'vue';

import { useKakaoStore } from './stores/counter';
import { useRouter } from 'vue-router';

const kakaoStore = useKakaoStore();
const router = useRouter();

onMounted(() => {
	if(window.kakao && window.kakao.maps) {
		kakaoStore.loadMap(router);
	} else {
		kakaoStore.loadScript(router);
	}
})

</script>

<template>
  <div>
	<LoginButton/>
    <NavigationView/>
    <KakaoMap/>
  </div>
</template>

<style scoped>

</style>