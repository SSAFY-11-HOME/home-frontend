<script setup>
  import { RouterView } from "vue-router"
</script>

<template>

  <div id="container">

    <!-- 검색창 -->
    <input id="search-box" type="text">

    <!-- 네비게이션 바 [ 전체, 아파트, 다세대 주택, 오피스텔 ] -->
    <div id="navigation-bar">
      <router-link :to="{ name: 'navi-all' }" class="nav-bt">전체</router-link>
      <router-link :to="{ name: 'navi-apt' }" class="nav-bt">아파트</router-link>
      <router-link :to="{ name: 'navi-villa' }" class="nav-bt">주택</router-link>
      <router-link :to="{ name: 'navi-officetel' }" class="nav-bt">오피스텔</router-link>
    </div>

    <RouterView />

  </div>

</template>

<style scoped>
#container {
  border: 1px solid black;
  width: 420px;
  height: 96.5vh;

  position: fixed;
  top: 16px;
  left: 16px;
}

/* 검색창 */
#container #search-box {
  width: 372px; height: 40px;
  margin: 24px;
}

#container #navigation-bar {
  width: 420px; height: 48px;
  
  display: flex;

  justify-content: space-around; /* 요소들을 수평으로 고르게 분배 */
  align-items: center; /* 요소들을 수직 가운데 정렬 */

}

#container #navigation-bar .nav-bt {
  border: 1px solid black; /* UI 확인 */
  
  width: 80px; height: 40px;
  
  border-radius: 8px;

  text-align: center;
  line-height: 40px;
  
}
</style>