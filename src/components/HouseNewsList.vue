<script setup>

import { ref } from 'vue';

function go(url) {
  window.open(url, "_blank");
}

function convertDate(pubDate) {
  const splitDate = pubDate.split(' ')
  return splitDate[3] + ". " + splitDate[2] + ". " + splitDate[1] + ". " + splitDate[0];
}

convertDate("Tue, 21 May 2024 15:33:00 +0900")

const newsList = ref([
  {
    "title": "이창희 대표 &quot;기본·균형 갖춘 투자 명가로 도약할 것&quot;",
    "originallink": "https://www.hankyung.com/article/2024052119741",
    "link": "https://n.news.naver.com/mnews/article/015/0004987158?sid=101",
    "description": "이 대표는 “<b>부동산</b> 경기 침체로 대체투자에 대한 관심이 감소했지만, 여전히 유망한 분야”라며 “사업 확장을 위해 에쿼티 투자, 부실채권(NPL) 펀드 등 다양한 투자 전략을 모색 중”이라고 말했다.",
    "pubDate": "Tue, 21 May 2024 15:33:00 +0900"
  },
  {
    "title": "금융당국, 상호금융 건전성 관리 고삐…거액여신한도 제도화",
    "originallink": "https://www.mediapen.com/news/view/921192",
    "link": "https://www.mediapen.com/news/view/921192",
    "description": "<b>부동산</b> 경기가 회복되지 않는 가운데 프로젝트파이낸싱(PF)과 유사한 성격의 관리형 토지신탁이나 공동대출... 또 외형이 지역 내 상업금융기관 이상인 조합이 늘어나고 <b>부동산</b> PF, 공동대출 등 새로운 영업 형태가... ",
    "pubDate": "Tue, 21 May 2024 15:32:00 +0900"
  },
  {
    "title": "다올자산운용은, 글로벌 펀드 열풍 주도…시장 변동성에 민첩한 대응",
    "originallink": "https://www.hankyung.com/article/2024052119761",
    "link": "https://n.news.naver.com/mnews/article/015/0004987156?sid=101",
    "description": "주식과 채권 같은 전통자산부터 국내외 <b>부동산</b>, 선박, 인프라 등 대체투자에도 적극적으로 나서고 있다. 이를 바탕으로 지속적인 성장을 이어오고 있다. 다올자산운용은 그동안 다양한 국내외 인기 상품을 선보였다.... ",
    "pubDate": "Tue, 21 May 2024 15:32:00 +0900"
  }
])

</script>

<template>
	<div id="news-list">
      <div class="middle-title">📢 부동산 뉴스</div>
      <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          
          <div class="carousel-item" v-for="(news, index) in newsList" :key="news.title" :class="{ active: index === 0 }">
            <div class="card-news" @click="go(news.link)">
              <div class="news-title">{{ news.title }}</div>
              <div class="news-description">{{ news.description }}</div>
              <div class="news-date">{{ convertDate(news.pubDate) }}</div>
            </div>
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
</template>

<style scoped>

#news-list {
  width: 372px; height: 100%;
  margin-top: 24px;
  margin-left: 24px;
}

#news-list .middle-title {
  font-size: 20px;
  font-weight: bold;
}

#news-list .card-news {

  height: 100%;

  margin: 12px;
  /* border-radius: 8px; */
  cursor: pointer;

  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);

}

.news-date {
  text-align: right;  
  font-size: small; font-weight: bold;

  margin: 8px;
}

.news-title {
  width: 100%;

  padding: 8px;

  font-size: 14px;
  font-weight: bold;

  background-color: rgb(218, 218, 218);
  /* border-radius: 8px 8px 0 0; */
}

.news-description {
  margin: 8px;

  font-size: 12px;

  color: rgb(119, 119, 119);
}



</style>