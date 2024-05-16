<script setup>
	import { useHouseStore } from '@/stores/counter.js';
	import HouseSimple from '@/components/HouseSimple.vue';

	const houseStore = useHouseStore();

</script>

<template>
	<div>
		<template v-for="(house) in houseStore.getHouses" :key="house.id">
			<HouseSimple :house="house"/>
		</template>
	</div>
</template>

<style scoped>

</style>