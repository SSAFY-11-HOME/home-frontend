<script setup>

import { ref, watch } from 'vue';
import { selectAll, createArticle, selectArticleById, deleteArticleById, modifyArticleById, createComment, deleteComment } from '@/api/qna';
import { useUserStore } from '@/stores/counter';



const modalCheck = ref(false);
const viewStatus = ref('QNA');	
const qnaList = ref([])

const userStore = useUserStore();

const articleId = ref('');
const userId = ref('');
const date = ref('');
const title = ref('');
const content = ref('');
const count = ref('');

const comments = ref('');
const comment = ref('');

function truncateString(str) {
	return (str.length > 10) ? str.substring(0, 9) + '..' : str;
}

function openModal() {
	modalCheck.value = !modalCheck.value;
}

function changeViewStatus(status) {
	if(status === "WRITE") {
		title.value = '';
		content.value = '';
	}
	viewStatus.value = status;
}

function create() {
	createArticle({title: title.value, contents: content.value}, ({data}) => {}, (error) => {})
	changeViewStatus("QNA")
}

// id, articleId, title, contents
function articleModify() {
	modifyArticleById({id: userId.value, articleId: articleId.value, title: title.value, contents: content.value},
	({data}) => {}, (error) => {})
	changeViewStatus('QNA')
}

function articleDelete() {
	deleteArticleById({id: userId.value, articleId: articleId.value},
	({data}) => {}, (error) => {})
	changeViewStatus('QNA')
}

function convertDate(date) {
	return date.split(" ")[0];
}

watch(viewStatus, (newValue, oldValue) => {
	if(newValue === "QNA") {
		selectAll(
			({data}) => {
				qnaList.value = data;
			},
			(error) => {
				console.log(error);
			}
		)
	}

	if(newValue !== "QNA" && newValue !== "WRITE") {
		selectArticleById(newValue,
		({data}) => {
			console.log(data.comments);
			articleId.value = data.current.articleId;
			userId.value = data.current.id
			date.value = data.current.date;
			title.value = data.current.title;
			content.value = data.current.contents;
			count.value = data.current.count;
			comments.value = data.comments;
		},
		(error) => {
			console.log(error);
		})
	}
	
})

function registerComment() {
	createComment({articleId: articleId.value, id: userStore.getUserId, contents: comment.value},
	({data}) => {console.log(data);}, (error) => {});

	selectArticleById(viewStatus.value,
		({data}) => {
			comments.value = data.comments;
			console.log(comments.value);
		},
		(error) => {
			console.log(error);
		})
}

function reomveComment(commentId) {
	deleteComment({commentId: commentId, articleId: articleId.value, id: userStore.getUserId},
		({data}) => {console.log(data);},
		(error) => {console.log(error);})
	
		selectArticleById(viewStatus.value,
		({data}) => {
			comments.value = data.comments;
			console.log(comments.value);
		},
		(error) => {
			console.log(error);
		})
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
						<div class="content-title">{{ truncateString(qna.title) }}</div>
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
					<div id="article-modify" v-if="userStore.getUserId === userId" @click="articleModify">수정</div>
					<div id="article-delete" v-if="userStore.getUserId === userId" @click="articleDelete">삭제</div>
					<div id="write" v-if="userStore.isLogin" @click="changeViewStatus('QNA')">돌아가기</div>
				</div>

				<div id="body">
					<div class="display-flex">
						<div class="article-title"> 제목 </div>
						<input type="text" id="title-input" class="outline-none" v-model="title" v-bind:readonly="userStore.getUserId !== userId">
					</div>

					<div class="display-flex">
						<div class="article-content">
							내용
						</div>
						<textarea id="content-input" class="outline-none" v-model="content" v-bind:readonly="userStore.getUserId !== userId"></textarea>
					</div>

					<div class="display-flex">
						<div class="article-comment font-weight-bold">답글</div>
					</div>

					<!-- 답글 -->
					<div class="comment-wrap">

						<div class="display-flex margin-bottom-8">
							<div class="bold-18 comment-id ">{{ userStore.getUserId }}</div>
							<input type="text" class="comment-input" v-model="comment">
							<div class="comment-register" @click="registerComment">등록</div>
						</div>

						<div v-for="(comment) in comments" :key="comment.commentId">	
							<div class="display-flex comments">
								<div class="comment-id">{{ comment.id }}</div>
								<div class="comment-contents">{{ comment.contents }}</div>
								<div class="comment-date">{{ convertDate(comment.date) }}</div>
								<div class="comment-delete" v-if="userStore.getUserId === comment.id" @click="reomveComment(comment.commentId)">X</div>
							</div>
						</div>

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
.bold-18 { font-weight: bold; font-size: 18px; }
.font-weight-bold { font-weight: bold; }
.margin-bottom-8 {margin-bottom: 8px;}

.comment-delete {
	width: 24px; height: 24px;
	margin-left: 8px;
	text-align: center;
	background-color: red;

	border-radius: 8px;
}

.comment-wrap {
	margin-left: 16px
}

.comments {
	width: 520px;
	margin-bottom: 8px;
	border-bottom: 1px solid rgb(232, 232, 232);
}

.comment-input {
	width: 320px;
	border: none;

	outline: none;

	border-radius: 8px;
	background-color: rgb(245, 245, 245);

}

.comment-register {

	width: 80px;

	margin-left: 12px;

	text-align: center;

	font-weight: bold;

	background-color: #F7E600; color: #3A1D1D;
	border-radius: 8px;
	line-height: 28px;

	box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
}

.comment-id {
	width: 100px;
}

.comment-contents {
	width: 280px;
}

.comment-date {
	width: 100px;
}

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

.article-comment {
	margin-left: 18px; margin-bottom: 8px;

	text-align: left;

	font-size: 18px;
	font-weight: bold;
}

#content-input {
	width: 420px; height: 240px;
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