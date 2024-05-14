<script setup>
	import { useHouseStore } from '@/stores/counter.js';
	import HouseSimple from '@/components/HouseSimple.vue';

	const houseStore = useHouseStore();
</script>

<template>
	<div>
		<h3>전체</h3>

		<template v-for="(house) in houseStore.houses" :key="house.id">
			<HouseSimple :house="house"/>
		</template>

	</div>
</template>

<style scoped>

</style>