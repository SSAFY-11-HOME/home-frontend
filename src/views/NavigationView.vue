<script setup>
import { RouterView } from "vue-router"
import NavigationSearch from "@/components/NavigationSearch.vue";
</script>

<template>

  <div id="container">

    <!-- 검색창 -->
    <NavigationSearch/>
    
    <RouterView :key="$route.fullPath"/>

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