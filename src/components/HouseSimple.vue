<script setup>

import { defineProps } from 'vue';
import { useKakaoStore } from '@/stores/counter';

defineProps({
	house: {},
})

const kakaoStore = useKakaoStore();

</script>

<template>
	<router-link :to="{ name: 'navi-detail', params: {id: house.id} }" class="nav-bt" @click="kakaoStore.panTo(house.lat, house.lng)">
		<div id="house-simple-info-box">

			<div>
				<div class="flex">
					<div id="name">{{ house.name }}</div>
					<div id="floor-area">#{{ house.floor }}층 #{{ house.parea }}평</div>
				</div>
				<div id="amount">{{ house.dealAmount }}만원</div>
			</div>

			<div id="date">{{ house.dealDate }}</div>

		</div>
	</router-link>

</template>

<style scoped>
/* width: 420 */ 
#house-simple-info-box {

	width: 372px; height: 80px;
	
	margin-left: 24px; margin-bottom: 12px;

	display: flex;
	position: relative; /* 부모 요소에 대한 기준으로 설정합니다. */

	border-radius: 8px;
	box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
	background-color: #F7E600;

}

#house-simple-info-box #name {
	font-size: 18px;
	font-weight: bold;

	margin: 8px;
}

#house-simple-info-box #floor-area {
	font-weight: bold;

	margin-top: 8px;

	color: #3A1D1D;
}

#house-simple-info-box #amount {
	font-size: 24px;
	font-weight: bold;

	position: absolute; /* 절대 위치 지정합니다. */
	bottom: 8px; /* 부모 요소 상단에서의 거리를 지정합니다. */
	left: 8px; /* 부모 요소 우측에서의 거리를 지정합니다. */
}

#house-simple-info-box #date {
	position: absolute; /* 절대 위치 지정합니다. */
	top: 8px; /* 부모 요소 상단에서의 거리를 지정합니다. */
	right: 8px; /* 부모 요소 우측에서의 거리를 지정합니다. */
	
	padding: 4px;

	border-radius: 8px;

	color: #FFFFFF;
	font-size: small;
	background-color:#3A1D1D;
}

.flex {
	display: flex;
}

a {
	margin: 0; padding: 0;
	text-decoration: none;
	color: #3A1D1D;
}


</style>