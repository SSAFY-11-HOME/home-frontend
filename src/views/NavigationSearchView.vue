<script setup>

import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import NavigationDivision from '@/components/NavigationDivision.vue';
import { selectAllBySearchWord } from '@/api/house';
const route = useRoute();
const router = useRouter();

const searchList = ref({})

selectAllBySearchWord(route.params.searchWord,
  ({data}) => {
    searchList.value = data;
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
        "{{ route.params.searchWord }}" 검색 결과
      </div>
    </div>

    <NavigationDivision/>

    <!-- 지역 -->
    <div class="title">지역</div>
    <div id="searchArea">
      <div class="content" v-for="(area) in searchList.searchArea" :key="area.id" @click="router.push(`/navi/search/dong?id=${area.id}&name=${area.name}`)">
        {{ area.name }}
      </div>
    </div>

    <NavigationDivision/>

    <!-- 아파트/오피스텔 -->
    <div class="title">아파트</div>
    <div id="searchApt">
      <div class="content" v-for="(apt) in searchList.searchApt" :key="apt.id" @click="router.push({ name: 'navi-detail', params: {id: apt.id} })">
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

#searchArea {
  height: 300px;
  margin-left: 18px;
  overflow-y: scroll;
}

#searchArea::-webkit-scrollbar {
  width: 3px;
  /* display: none; */
}

#searchArea::-webkit-scrollbar-thumb {
  background-color: #c9c9c9;
  border-radius: 10px;
}

#searchArea::-webkit-scrollbar-track {
  background-color: #e0e0e0;
  border-radius: 10px;
  box-shadow: inset 0px 0px 5px white;
}

#searchApt {
  height: 300px;
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