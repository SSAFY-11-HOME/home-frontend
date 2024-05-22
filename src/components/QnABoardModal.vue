<script setup>

import { ref } from 'vue';
import { selectAll } from '@/api/qna';
import { useUserStore } from '@/stores/counter';

const modalCheck = ref(false);
const writeCheck = ref(false);
const qnaList = ref([])

const userStore = useUserStore();

function openModal() {
	modalCheck.value = !modalCheck.value;
}

function openWriteModal() {
	writeCheck.value = !writeCheck.value;
}

function convertDate(date) {
	return date.split(" ")[0];
}

selectAll(
	({data}) => {
		qnaList.value = data;
	},
	(error) => {
		console.log(error);
	}
)

</script>

<template>
	<div id="box">
		<button class="button" @click="openModal"> Q & A </button>
	</div>

	<div class="modal-wrap" v-show="modalCheck" @click="openModal">

		<div class="modal-container" @click="openModal">

			<!-- Q&A 목록 -->
			<div v-if="!writeCheck">

				<div id="header">
					<img src="@/assets/logo.png" alt="logo" id="logo">
					<div id="title">Q & A</div>
					<div id="write" v-if="userStore.isLogin" @click="openWriteModal">글쓰기</div>
				</div>

				<div id="body">

					<div class="content-head">
						<div class="content-id">번호</div>
						<div class="content-title">제목</div>
						<div class="content-author">작성자</div>
						<div class="content-date">날짜</div>
					</div>

					<div class="content" v-for="(qna) in qnaList" :key="qna.articleId">
						<div class="content-id">{{qna.articleId}}</div>
						<div class="content-title">{{ qna.title }}</div>
						<div class="content-author">{{ qna.id }}</div>
						<div class="content-date">{{ convertDate(qna.date) }}</div>
					</div>

				</div>

			</div>

			<!-- 글쓰기 -->
			<div v-if="writeCheck">

				<div id="header">
					<img src="@/assets/logo.png" alt="logo" id="logo">
					<div id="title">글 쓰기</div>
					<div id="backspace" @click="router.go(-1)">
						<img src="@/assets/close.png" alt="">
					</div>
				</div>

				<div id="body">

				</div>

			</div>

			
		</div>	

	</div>

</template>

<style scoped>

#backspace {
  width: 24px; height: 24px;
  margin-left: 16px; margin-right: 16px;
}

#backspace img {
  widows: 100%; height: 100%;
}

#box {
	position: fixed;
	z-index: 1;
	bottom: 16px;
	right: 32px;
}

#box .button {
	width: 96px; height: 32px;
	border-radius: 8px; border: none;

	background-color: #F7E600;
	color: #3A1D1D;

	font-size: large; font-weight: bold;
	box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
}

/* dimmed */
.modal-wrap {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 2;

}

/* modal or popup */
.modal-container {
  position: fixed;
  bottom: 64px;
  right: 32px;
  width: 600px;
  background: #fff;
  border-radius: 10px;
  padding: 20px;
  box-sizing: border-box;

  text-align: center;

}

.modal-container #header {
	width: 520px;
	display: flex;
	margin: 12px
}

.modal-container #write {
	width: 96px; height: 32px;

	position: absolute;
	top: 48px; right: 24px;

	font-weight: bold; font-size: 16px;
	line-height: 32px;

	color: #3A1D1D;
	background-color: #F7E600;

	border-radius: 8px;
	box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);

	cursor: pointer;

}

.modal-container #body {

	width: 560px;
	height: 560px;

	box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);

	overflow-y: scroll;
	overflow-x: hidden;
}

.modal-container #body::-webkit-scrollbar {
  width: 3px;
  /* display: none; */
}

.modal-container #body::-webkit-scrollbar-thumb {
  background-color: #c9c9c9;
  border-radius: 10px;
}

.modal-container #body::-webkit-scrollbar-track {
  background-color: #e0e0e0;
  border-radius: 10px;
  box-shadow: inset 0px 0px 5px white;
}

.modal-container #header #title {
	font-size: 32px;
	font-weight: bold;

	color: #3A1D1D;
	
}

#body .content-head {
	width: 560px;
	display: flex;
}

#body .content-head .content-id {
	font-weight: bold;
}

#body .content-head .content-title {
	font-weight: bold;
}

#body .content-head .content-author {
	font-weight: bold;
}

#body .content-head .content-date {
	font-weight: bold;
}

.content-id {
	width: 40px;
	margin: 12px;
}

.content-title {
	width: 200px;
	margin: 12px;
}

.content-author {
	width: 160px;
	margin: 12px;
}

.content-date {
	width: 160px;
	margin: 12px;
}

#body .content {
	width: 560px;
	display: flex;
}

#logo {
	width: 40px; height: 40px;
	margin: 8px;
}

</style>