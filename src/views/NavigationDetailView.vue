<script setup>
import { useRoute, useRouter } from 'vue-router';
import { selectAllById } from '@/api/house';
import { ref } from 'vue';

import { useKakaoStore } from '@/stores/counter';

import NavigationDivision from '@/components/NavigationDivision.vue';
import HouseDealListVue from '@/components/HouseDealList.vue';

const route = useRoute();
const router = useRouter();
const kakaoStore = useKakaoStore();

const houseInfo = ref({});

console.log("detail view");

selectAllById(route.params.id,
    ({data}) => {
      houseInfo.value = data;
      kakaoStore.addressSearch(houseInfo.value.base + " " + houseInfo.value.jibun + " " + houseInfo.value.road);
    },
    (error) => {
        console.log(error);
    }
)

</script>

<template>
  <div>

    <NavigationDivision/>

    <div id="search">
      <div id="backspace" @click="router.go(-1)">
        <img src="@/assets/back.png" alt="">
      </div>
      <div id="apt-name">
        🏠 {{ houseInfo.apartmentName }}
      </div>
    </div>

    <NavigationDivision/>

    <div id="apt-address">{{ houseInfo.base + " " + houseInfo.jibun + " " + houseInfo.road }}</div>
    
    <NavigationDivision/>
    
    <div id="list-title">📈 실거래가 정보</div>

    <HouseDealListVue :dealList="houseInfo.dealList" />

  </div>
</template>

<style scoped>

#search {
  display: flex;
  width: 420px; height: 40px;

  line-height: 40px;
}

#search #backspace {
  width: 24px; height: 24px;
  margin-left: 16px; margin-right: 16px;
}

#search #backspace img {
  widows: 100%; height: 100%;
}

#search #apt-name {
  width: 340px;
  text-align: center;
  font-weight: bold;
  font-size: 18px;
}

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