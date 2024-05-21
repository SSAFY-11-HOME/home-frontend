<script setup>

function go(url) {
  window.open(url, "_blank");
}

</script>

<template>
	<div id="news-list">
      <div class="middle-title">📢 부동산 뉴스</div>
      <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          
          <div class="carousel-item active">
            <div class="card-news" @click="go('https://www.google.com')">
              <div class="news-title">“<b>분양</b>가 더 오르기 전 선점해야” ‘원주 푸르지오 더 센트럴’ 21일부터 정...</div>
              <div class="news-description">최근 각종 PF대출 시장의 경색과 <b>분양</b>가 상승 전망도 당장 <b>분양</b>하는 새 아파트 관심도를 높이는 요소입니다. 최근 주택건설 사업비 조달 핵심이던 <b>부동산</b> 프로젝트파이낸싱(PF)이 각종 부실 이유로 막힌데다 기존 PF대출...</div>
              <div class="news-date">2024. May. 21. Tue,</div>
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