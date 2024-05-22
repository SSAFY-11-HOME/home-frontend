<script setup>
import NavigationView from '@/views/NavigationView.vue';
import KakaoMap from '@/components/KakaoMap.vue';
import LoginModal from '@/components/LoginModal.vue';
import QnABoardModal from './components/QnABoardModal.vue';

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
	<LoginModal/>
	<QnABoardModal/>
    <NavigationView/>
    <KakaoMap/>
  </div>
</template>

<style scoped>

</style>