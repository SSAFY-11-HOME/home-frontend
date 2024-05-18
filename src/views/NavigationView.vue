<script setup>
import { RouterView } from "vue-router"
import NavigationSearch from "@/components/NavigationSearch.vue";
</script>

<template>

  <div id="container">

    <!-- 검색창 -->
    <NavigationSearch/>

    <!-- 건물 정보 [ 이름, 층, 평, 가격, 거래일 ] 리스트 -->
    <div id="house-list">
      <RouterView :key="$route.fullPath"/> <!-- :key="$route.fullPath" -->
    </div>

    <div id="footer">
      Copyright ⓒ SSAFY
    </div>

  </div>

</template>

<style scoped>
#container {
  border-radius: 8px;
  width: 420px; height: 96.5vh;

  position: fixed;
  z-index: 1;

  top: 16px;
  left: 16px;

  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  background-color: #FFFFFF;
}

/* 검색창 */
#container #search-box {
  width: 372px;
  height: 40px;
  margin-top: 24px;
  margin-left: 24px;

  border: 0;
  border-radius: 8px;
  outline: none;
  background-color: rgb(233, 233, 233);

}

#container #navigation-bar {
  width: 420px;
  height: 48px;

  display: flex;

  justify-content: space-around;
  /* 요소들을 수평으로 고르게 분배 */
  align-items: center;
  /* 요소들을 수직 가운데 정렬 */

}

#container #navigation-bar .nav-bt {
  /* border: 1px solid black; */
  /* UI 확인 */

  width: auto;
  height: 32px;

  text-align: center;
  line-height: 30px;

  font-size: 20px;
  font-weight: bold;

  color: #3A1D1D;
  text-decoration: none;
}

#container #footer {
  width: 420px; height: 40px;

  text-align: center;
  line-height: 40px;
  
  background-color: #F7E600;

  position: absolute;
  left: 0;
  bottom: 0;

  border-radius: 0 0 8px 8px;

  color: #3A1D1D;

}
</style>