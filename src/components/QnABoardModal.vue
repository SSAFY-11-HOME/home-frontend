<script setup>

import { ref } from 'vue';
import { selectAll, createArticle } from '@/api/qna';
import { useUserStore } from '@/stores/counter';

const title = ref('');
const content = ref('');

const modalCheck = ref(true);
const isModifyPossible = ref(false);
const viewStatus = ref('QNA');	
const qnaList = ref([])

const userStore = useUserStore();

function openModal() {
	modalCheck.value = !modalCheck.value;
}

function changeViewStatus(status) {
	viewStatus.value = status;
}

function create() {

	createArticle({title: title.value, content: content.value},
	({data}) => {
		console.log(data);
	},
	(error) => {
		console.log(error);
	})
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
			<div v-if="viewStatus === 'QNA'">

				<div id="header">
					<img src="@/assets/logo.png" alt="logo" id="logo">
					<div id="title">Q & A</div>
					<div id="write" v-if="userStore.isLogin" @click="changeViewStatus('WRITE')">글쓰기</div>
				</div>

				<div id="body" class="text-aligne-center">

					<div class="content-head">
						<div class="content-id">번호</div>
						<div class="content-title">제목</div>
						<div class="content-author">작성자</div>
						<div class="content-date">날짜</div>
					</div>

					<div class="content" v-for="(qna) in qnaList" :key="qna.articleId" @click="changeViewStatus(qna.articleId)">
						<div class="content-id">{{qna.articleId}}</div>
						<div class="content-title">{{ qna.title }}</div>
						<div class="content-author">{{ qna.id }}</div>
						<div class="content-date">{{ convertDate(qna.date) }}</div>
					</div>

				</div>

			</div>

			<!-- 글쓰기 -->
			<div v-else-if="viewStatus === 'WRITE'">

				<div id="header">
					<img src="@/assets/logo.png" alt="logo" id="logo">
					<div id="title">글 쓰기</div>
					<div id="cancel" v-if="userStore.isLogin" @click="changeViewStatus('QNA')">취소</div>
				</div>

				<div id="body">
					<div class="display-flex">
						<div class="article-title">
							제목
						</div>
						<input type="text" id="title-input" class="outline-none" v-model="title">
					</div>
					
					<div class="display-flex">
						<div class="article-content">
							내용
						</div>
						<textarea type="text" id="content-input" class="outline-none" v-model="content"></textarea>
					</div>

						<div id="create" @click="create">등록하기</div>

				</div>

			</div>

			<!-- 게시글 상세 -->
			<div v-else>

				<div id="header">
					<img src="@/assets/logo.png" alt="logo" id="logo">
					<div id="title">게시글</div>
					<div id="article-modify" v-if="userStore.isLogin" @click="changeViewStatus('QNA')">수정</div>
					<div id="article-delete" v-if="userStore.isLogin" @click="changeViewStatus('QNA')">삭제</div>
					<div id="write" v-if="userStore.isLogin" @click="changeViewStatus('QNA')">돌아가기</div>
				</div>

				<div id="body">
					<div class="display-flex">
						<div class="article-title"> 제목 </div>
						<input type="text" id="title-input" class="outline-none">
					</div>

					<div class="display-flex">
						<div class="article-content">
							내용
						</div>
						<textarea id="content-input" class="outline-none"></textarea>
					</div>
				</div>

			</div>
			
		</div>	

	</div>

</template>

<style scoped>
.text-aligne-center { text-align: center }
.display-flex { display: flex }
.outline-none { outline: none;}

#create {	

	width: 96px; height: 32px;
	border-radius: 8px; border: none;

	margin-left: 420px;

	background-color: #F7E600;
	color: #3A1D1D;

	font-weight: bold;

	text-align: center;
	line-height: 32px;

	background-color: #F7E600;
}

.article-title {

	margin: 18px;

	text-align: left;

	font-size: 18px;
	font-weight: bold;
}

#title-input {
	width: 420px;
	margin: 18px;

	border: none;
	border-radius: 8px;

	background-color: rgb(245, 245, 245);

}

.article-content {
	margin: 18px;

	text-align: left;

	font-size: 18px;
	font-weight: bold;
}

#content-input {
	width: 420px; height: 400px;
	margin: 18px;

	border: none;
	border-radius: 8px;

	background-color: rgb(245, 245, 245);
}

#close {
  position: fixed;
  right: 64px;
  width: 24px; height: 24px;

  cursor: pointer;
}

#close img {
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

}

.modal-container #header {
	width: 520px;
	display: flex;
	margin: 12px
}

.modal-container #write {
	width: 64px; height: 32px;

	position: absolute;
	top: 48px; right: 24px;

	font-weight: bold; font-size: 16px;
	text-align: center;
	line-height: 32px;

	color: #3A1D1D;
	background-color: #F7E600;

	border-radius: 8px;
	box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);

	cursor: pointer;

}

#article-modify {
	width: 64px; height: 32px;

	position: absolute;
	top: 48px; right: 96px;

	font-weight: bold; font-size: 16px;
	text-align: center;
	line-height: 32px;

	color: white;
	background-color: #1e9700;

	border-radius: 8px;
	box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);

	cursor: pointer;
}

#article-delete {
	width: 64px; height: 32px;

	position: absolute;
	top: 48px; right: 168px;

	font-weight: bold; font-size: 16px;
	text-align: center;
	line-height: 32px;

	color: white;
	background-color: #d10000;

	border-radius: 8px;
	box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);

	cursor: pointer;
}

#cancel {
	width: 64px; height: 32px;

	position: absolute;
	top: 48px; right: 24px;

	font-weight: bold; font-size: 16px;
	text-align: center;
	line-height: 32px;

	color: white;
	background-color: #d10000;

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