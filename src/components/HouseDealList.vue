<script setup>
import { defineProps } from 'vue';

defineProps({
	dealList: {},
})

function processNumber(numberString) {
  // 쉼표 제거
  const cleanedNumberString = numberString.replace(/,/g, '');
  
  // 숫자로 변환
  const number = parseFloat(cleanedNumberString);
  
  // 10000으로 나누기
  const result = number / 10000;
  
  // 소수점 첫째 자리까지 반올림
  const roundedResult = parseFloat(result.toFixed(1));
  
  return roundedResult;
}

</script>

<template>
  <div>
    <div id="deal-list">

      
      <div id="header">
        <div class="tdate">계약일</div>
        <div class="thead">가격</div>
        <div class="thead">평형</div>
        <div class="thead">층</div>
      </div>
      
      <div id="body">
        <div class="deal-info" v-for="(deal) in dealList" :key="deal.aptCode">
            <div class="tdate">{{ deal.dealDate }}</div>
            <div class="thead">{{ processNumber(deal.dealAmount) }}억</div>
            <div class="thead">{{ deal.parea }}</div>
            <div class="thead">{{ deal.floor }}</div>
        </div>
      </div>

    </div>
  </div>
</template>

<style scoped>

#deal-list {
  width: 372px; height: 320px;

  margin-left: 24px; margin-top: 12px;
  border-radius: 8px;

  /* background-color: red; */
}

#deal-list #header {
    display: flex;
    width: 372px; height: 40px;
    border-radius: 8px 8px 0px 0px;

    background-color: rgb(223, 223, 223);

    text-align: center;
    line-height: 40px;
}

#deal-list #header .tdate {
    width: 112.5px; height: 32px;
    font-weight: bold;
}

#deal-list #header .thead {
    width: 86.5px; height: 32px;
    font-weight: bold;
}

#deal-list #body {

  width: 372px; height: 32px;

  text-align: center;
  line-height: 32px;
}

#deal-list #body .tdate {
    width: 112.5px; height: 32px;
    font-weight: bold;

    text-align: center;
}

#deal-list #body .thead {
    width: 86.5px; height: 32px;

    text-align: center;
}



.deal-info {
    display: flex;
    margin-top: 4px; margin-bottom: 4px;
}

</style>