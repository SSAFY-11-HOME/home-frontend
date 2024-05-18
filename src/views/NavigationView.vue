<script setup>
import { RouterView } from "vue-router"
import NavigationDivision from "@/components/NavigationDivision.vue";
import NavigationSearch from "@/components/NavigationSearch.vue";
</script>

<template>

  <div id="container">

    <!-- 검색창 -->
    <NavigationSearch/>

    <NavigationDivision/>

    <!-- 네비게이션 바 [ 전체, 아파트, 다세대 주택, 오피스텔 ] -->
    <div id="navigation-bar">
      <router-link :to="{ name: 'navi-all' }" class="nav-bt">전체</router-link>
      <router-link :to="{ name: 'navi-apt' }" class="nav-bt">아파트</router-link>
      <router-link :to="{ name: 'navi-villa' }" class="nav-bt">주택</router-link>
      <router-link :to="{ name: 'navi-officetel' }" class="nav-bt">오피스텔</router-link>
    </div>

    <NavigationDivision/>

    <!-- 건물 정보 [ 이름, 층, 평, 가격, 거래일 ] 리스트 -->
    <div id="house-list">
      <RouterView :key="$route.fullPath"/> <!-- :key="$route.fullPath" -->
    </div>

    <NavigationDivision/>

    <!-- 공지사항 -->
    <div id="announcement">
      <div class="middle-title">📢 공지사항</div>
      <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="https://picsum.photos/380/200" class="d-block w-100" alt="...">
          </div>
          <div class="carousel-item">
            <img src="https://picsum.photos/380/200" class="d-block w-100" alt="...">
          </div>
          <div class="carousel-item">
            <img src="https://picsum.photos/380/200" class="d-block w-100" alt="...">
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
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

#container #house-list {
  height: 360px;
  overflow-y: scroll;
}

#container #house-list::-webkit-scrollbar {
  width: 3px;
  /* display: none; */
}

#container #house-list::-webkit-scrollbar-thumb {
  background-color: #c9c9c9;
  border-radius: 10px;
}

#container #house-list::-webkit-scrollbar-track {
  background-color: #e0e0e0;
  border-radius: 10px;
  box-shadow: inset 0px 0px 5px white;
}

#container #announcement {
  width: 372px; height: 250px;
  margin-top: 24px;
  margin-left: 24px;
}

#container #announcement .middle-title {

  margin-bottom: 12px;

  font-size: 20px;
  font-weight: bold;
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