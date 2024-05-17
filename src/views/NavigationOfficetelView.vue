<script setup>
	import { useHouseStore } from '@/stores/counter.js';
	import HouseSimple from '@/components/HouseSimple.vue';

	const houseStore = useHouseStore();
</script>

<template>
	<div>
		<div id="list-title">📌 주변 실거래가 정보</div>
		<template v-for="(house) in houseStore.getOfficetels" :key="house.id">
			<HouseSimple :house="house"/>
		</template>
	</div>
</template>

<style scoped>

#list-title {
  margin-left: 24px;
  margin-top: 12px;
  margin-bottom: 12px;
  
  font-size: 20px;
  font-weight: bold;
}

</style>