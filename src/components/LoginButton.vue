<script setup>

import {ref} from 'vue';

const modalCheck = ref(false);

function openModal() {
	modalCheck.value = !modalCheck.value;
	console.log(modalCheck.value);
}

</script>

<template>
	<div id="box">
		<button id="login-button" @click="openModal">로그인</button>
	</div>

	<div class="modal-wrap" v-show="modalCheck" @click="openModal">
		<div class="modal-container" @click="openModal">

			<!-- <div id="close-button">
				<img src="" alt="">
			</div> -->
			
			<div id="header">
				<img src="" alt="logo" id="logo">
				<div id="title">로그인</div>
			</div>

			<div>
				<input type="text" class="input-box" placeholder="아이디">
			</div>

			<div>
				<input type="password" class="input-box" placeholder="비밀번호">
			</div>
			
			<button id="login-button">로그인</button>


			<div id="join-tab">
				<div class="normal-text">아직 회원이 아니신가요?</div>
				<div @click="openModal" id="join-button">회원가입</div>
			</div>
			
			
		</div>
	</div>

</template>

<style scoped>

#box {
	position: fixed;
	z-index: 1;
	top: 16px;
	right: 32px;
}

#box #login-button {
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
  background: rgba(0, 0, 0, 0.4);
  z-index: 2;

}

/* modal or popup */
.modal-container {
  position: relative;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 550px;
  background: #fff;
  border-radius: 10px;
  padding: 20px;
  box-sizing: border-box;

  text-align: center;

}

.modal-container #header {
	width: 510px;

	display: flex;
	justify-content: center;
	align-items: center;

	margin: 12px
}

.modal-container #header #title {
	font-size: 32px;
	font-weight: bold;

	color: #F7E600;
	text-shadow: -1px 0 #3A1D1D, 0 1px #3A1D1D, 1px 0 #3A1D1D, 0 -1px #3A1D1D;
}

.input-box {
	border: none; outline: none;
	border-radius: 8px;
	
	background-color: #ebebeb;

	width: 280px;

	margin-bottom: 12px;

	padding-left: 12px; padding-top: 4px; padding-bottom: 4px;

	box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
}

#login-button {

	width: 280px;

	border: none;
	border-radius: 8px;

	background-color: #F7E600;

	color: #3A1D1D;
	font-size: 18px;
	font-weight: bold;

	box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
}

#join-tab {
	display: flex;
	justify-content: center;
	align-items: center;
	

	width: 510px;
	height: 48px;

	line-height: 48px;
}

#join-tab *{
	margin: 8px;
	color: #747474;
}

#join-button {
	color: #3A1D1D;
	font-weight: bold;
	cursor: pointer;
}

</style>