<script setup>

</script>

<template>
  <div id="search">
    <div id="logo">로고</div>
    <div id="search-box">
        <input id="search-input" type="text" placeholder="아파트∙지역명으로 검색">
        <img id="search-magnifier" src="@/assets/magnifier.png" alt="...">
    </div>
  </div>
</template>

<style scoped>

#search {
    display: flex;
}

#search #logo {
    /* DELETE */
    text-align: center;
    line-height: 40px;

    width: 40px; height: 40px;

    margin-top: 12px; margin-left: 12px;

    background-color: #F7E600;
    color: #3A1D1D;
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