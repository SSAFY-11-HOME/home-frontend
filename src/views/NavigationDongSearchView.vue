<script setup>

import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { selectAllByDongCode } from '@/api/house';
import NavigationDivision from '@/components/NavigationDivision.vue';

const route = useRoute();
const router = useRouter();

const searchApt = ref({})

selectAllByDongCode(route.query.id,
  ({data}) => {
    searchApt.value = data.dongAptList
    
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
      <div id="search-keyword">
        {{ route.query.name }}
      </div>
    </div>

    <NavigationDivision/>

    <div class="title">아파트</div>
    <div id="searchApt">
      <div class="content" v-for="(apt) in searchApt" :key="apt.id" @click="router.push({ name: 'navi-detail', params: {id: apt.id} })">
        {{ apt.name }}
      </div>
    </div>
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

#search #search-keyword {
  width: 340px;
  text-align: center;
  font-weight: bold;
  font-size: 18px;
}

#searchApt {
  height: 600px;
  margin-left: 18px;
  overflow-y: scroll;
}

#searchApt::-webkit-scrollbar {
  width: 3px;
  /* display: none; */
}

#searchApt::-webkit-scrollbar-thumb {
  background-color: #c9c9c9;
  border-radius: 10px;
}

#searchApt::-webkit-scrollbar-track {
  background-color: #e0e0e0;
  border-radius: 10px;
  box-shadow: inset 0px 0px 5px white;
}

.title {
  margin-left: 18px; margin-bottom: 12px;
  font-size: 18px;
  color: #3A1D1D;
  font-weight: bold;
}

.content {
  margin-bottom: 12px;
  color: #b1b1b1;
}

.content:hover {
  color: black;
}

</style>