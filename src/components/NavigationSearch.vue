<script setup>

import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const searchWord = ref('');

function getSearchList() {
    router.push({name: 'navi-search', params: {searchWord: searchWord.value} })
}

</script>

<template>
  <div id="search">
    <img src="@/assets/logo.png" alt="logo" id="logo">
    <div id="search-box">
        <input id="search-input" type="text" placeholder="아파트∙지역명으로 검색" v-model="searchWord" @keyup.enter="getSearchList">
        <img id="search-magnifier" src="@/assets/magnifier.png" alt="..." @click="getSearchList">
    </div>
  </div>
</template>

<style scoped>

#search {
    display: flex;
}

#search #logo {

    width: 40px; height: 40px;

    margin-top: 12px; margin-left: 12px;
}

#search #search-box {

    align-items: center;

    display: flex;

    width: 340px;
    height: 40px;

    margin-top: 12px; margin-left: 12px;
    
    border-radius: 8px;
    background-color: rgb(223, 223, 223);

    border: 2px solid transparent; /* 초기에는 투명한 테두리 */
    transition: border-color 0.3s ease; /* 테두리 전환 효과 추가 */
}

#search #search-box:hover img {
  opacity: 1.3;
  transform: scale(1.25);
}

#search #search-box:focus-within {
    border-color: #3A1D1D; /* input이 포커스되면 #search-box에 테두리 색상 변경 */
}

#search #search-box #search-input {
    
    width: 280px; height: 32px;
    margin-left: 8px;

    outline: none;
    border: none;

    background-color: rgb(223, 223, 223);

    font-size: small;
}

#search #search-box #search-magnifier {
    margin-left: 8px;
    width: 28px;
    height: 28px;
}

</style>