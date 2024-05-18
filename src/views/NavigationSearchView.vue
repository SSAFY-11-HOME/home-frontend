<script setup>

import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import NavigationDivision from '@/components/NavigationDivision.vue';

const route = useRoute();
const router = useRouter();

const searchList = ref({
    "searchApt": [
        {
            "id": "11170000000017",
            "name": "용산큐브"
        },
        {
            "id": "11170000000019",
            "name": "이안용산3차"
        },
        {
            "id": "11170000000020",
            "name": "리첸시아용산B"
        },
        {
            "id": "11170000000023",
            "name": "이안용산1차(103동)"
        },
        {
            "id": "11170000000024",
            "name": "용산e편한세상"
        },
        {
            "id": "11170000000025",
            "name": "용산파크자이"
        },
        {
            "id": "11170000000027",
            "name": "용산파크타워(24-0)"
        },
        {
            "id": "11170000000028",
            "name": "용산시티파크(1단지)"
        },
        {
            "id": "11170000000071",
            "name": "용산더프라임"
        },
        {
            "id": "11170000000075",
            "name": "이안용산1차(102동)"
        },
        {
            "id": "11170000000076",
            "name": "이안용산프리미어"
        },
        {
            "id": "11170000000077",
            "name": "이안용산1차(101동)"
        },
        {
            "id": "11170000000078",
            "name": "대우월드마크용산"
        },
        {
            "id": "11170000000080",
            "name": "용산파크e-편한세상"
        },
        {
            "id": "11170000000091",
            "name": "용산동아파트"
        },
        {
            "id": "11170000000107",
            "name": "용산파크타워(24-1)"
        },
        {
            "id": "11170000000117",
            "name": "용산KCC웰츠타워"
        },
        {
            "id": "11170000000128",
            "name": "리첸시아용산"
        },
    ],
    "searchArea": [
        {
            "id": "1117010100",
            "name": "서울특별시 용산구 후암동"
        },
        {
            "id": "1117010200",
            "name": "서울특별시 용산구 용산동2가"
        },
        {
            "id": "1117010300",
            "name": "서울특별시 용산구 용산동4가"
        },
        {
            "id": "1117010400",
            "name": "서울특별시 용산구 갈월동"
        },
        {
            "id": "1117010500",
            "name": "서울특별시 용산구 남영동"
        },
        {
            "id": "1117010600",
            "name": "서울특별시 용산구 용산동1가"
        },
        {
            "id": "1117010700",
            "name": "서울특별시 용산구 동자동"
        },
        {
            "id": "1117010800",
            "name": "서울특별시 용산구 서계동"
        },
        {
            "id": "1117010900",
            "name": "서울특별시 용산구 청파동1가"
        },
        {
            "id": "1117011000",
            "name": "서울특별시 용산구 청파동2가"
        },
        {
            "id": "1117011100",
            "name": "서울특별시 용산구 청파동3가"
        },
        {
            "id": "1117011200",
            "name": "서울특별시 용산구 원효로1가"
        },
        {
            "id": "1117011300",
            "name": "서울특별시 용산구 원효로2가"
        },
        {
            "id": "1117011400",
            "name": "서울특별시 용산구 신창동"
        },
        {
            "id": "1117011500",
            "name": "서울특별시 용산구 산천동"
        },
        {
            "id": "1117011600",
            "name": "서울특별시 용산구 청암동"
        },
        {
            "id": "1117011700",
            "name": "서울특별시 용산구 원효로3가"
        },
        {
            "id": "1117011800",
            "name": "서울특별시 용산구 원효로4가"
        },
        {
            "id": "1117011900",
            "name": "서울특별시 용산구 효창동"
        },
        {
            "id": "1117012000",
            "name": "서울특별시 용산구 도원동"
        },
        {
            "id": "1117012100",
            "name": "서울특별시 용산구 용문동"
        },
        {
            "id": "1117012200",
            "name": "서울특별시 용산구 문배동"
        },
        {
            "id": "1117012300",
            "name": "서울특별시 용산구 신계동"
        },
    ]
})

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
      <div class="content" v-for="(area) in searchList.searchArea" :key="area.id" @click="router.push({ name: 'navi-search-dong', params: {dongCode: area.id} })">
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