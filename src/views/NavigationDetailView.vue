<script setup>
import { useRoute } from 'vue-router';
import { selectAllById } from '@/api/house';
import { ref } from 'vue';

import NavigationDivision from '@/components/NavigationDivision.vue';
import HouseDealListVue from '@/components/HouseDealList.vue';
const route = useRoute();

const houseInfo = ref({
  aptCode: '11680000000023',
  apartmentName: '경남아너스빌',
  base: '서울특별시 강남구',
  jibun: '역삼동 722',
  road: '언주로85길 13-0',
  dealList: [ 
    {dealDate: '15.10.30', dealAmount: '61,000', area: '106.88', floor: '4', parea: '32.33'},
    {dealDate: '18.01.22', dealAmount: '68,000', area: '96.54', floor: '3', parea: '29.2'},
    {dealDate: '18.02.19', dealAmount: '69,800', area: '106.88', floor: '1', parea: '32.33'},
    {dealDate: '19.09.30', dealAmount: '75,500', area: '96.54', floor: '3', parea: '29.2'},
    {dealDate: '20.02.03', dealAmount: '81,000', area: '108.2', floor: '3', parea: '32.73'}
  ]
})

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