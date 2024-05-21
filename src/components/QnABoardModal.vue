<script setup>

import { ref } from 'vue';

const modalCheck = ref(false);
const writeCheck = ref(false);

function openModal() {
	modalCheck.value = !modalCheck.value;
}

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
				</div>

				<div id="body">

					<div class="content-head">
						<div class="content-id">번호</div>
						<div class="content-title">제목</div>
						<div class="content-date">날짜</div>
					</div>

					<div class="content">
						<div class="content-id">id</div>
						<div class="content-title">title</div>
						<div class="content-date">date</div>
					</div>

				</div>

			</div>

			<!-- 글쓰기 -->
			<div v-if="writeCheck">

				<div id="header">
					<img src="@/assets/logo.png" alt="logo" id="logo">
					<div id="title">글 쓰기</div>
				</div>

				<div id="body">

				</div>

			</div>

			
		</div>	

	</div>

</template>

<style scoped>

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

.modal-container #body {

	width: 560px;
	height: 560px;

	box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
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

#body .content-head .content-date {
	font-weight: bold;
}

.content-id {
	width: 140px;
	margin: 12px;
}

.content-title {
	width: 320px;
	margin: 12px;
}

.content-date {
	width: 140px;
	margin: 12px;
}

#body .content {
	/* border: solid black 1px; */

	width: 560px;
	display: flex;
}

#logo {
	width: 40px; height: 40px;
	margin: 8px;
}

</style>