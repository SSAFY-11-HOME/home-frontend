<script setup>
import { useRoute } from 'vue-router';
import { selectAllById } from '@/api/house';
import { ref } from 'vue';

import NavigationDivision from '@/components/NavigationDivision.vue';
import HouseDealListVue from '@/components/HouseDealList.vue';
const route = useRoute();

const houseInfo = ref({});

console.log("detail view");

selectAllById(route.params.id,
    ({data}) => {
      houseInfo.value = data;
    },
    (error) => {
        console.log(error);
    }
)

</script>

<template>
  <div>
    <div id="apt-name">🏠 {{ houseInfo.apartmentName }}</div>

    <NavigationDivision/>

    <div id="apt-address">{{ houseInfo.base + " " + houseInfo.jibun + " " + houseInfo.road }}</div>
    
    <hr>
    
    <div id="list-title">📈 실거래가 정보</div>

    <HouseDealListVue :dealList="houseInfo.dealList" />

  </div>
</template>

<style scoped>

#apt-name {
  text-align: center;
  font-size: 20px;
  font-weight: bold;
}

#apt-address {
  text-align: center;
  font-size: 16px;
  font-weight: bold;
}

#list-title {
  margin-left: 24px;
  margin-top: 12px;
  margin-bottom: 12px;
  
  font-size: 20px;
  font-weight: bold;
}

#deal-list {
  width: 372px; height: 320px;

  margin-left: 24px; margin-top: 12px;

  background-color: red;
}

</style>