<script setup>

import { ref } from 'vue';
import { useUserStore } from '@/stores/counter';
import { join, login } from '@/api/user';

const userStore = useUserStore();

const modalCheck = ref(false);
const pageCheck = ref(true);

const id = ref('');
const pw = ref('');
const checkPw = ref('');
const name = ref('');
const email = ref('');
const isBroker = ref(false);

function openModal() {
	modalCheck.value = !modalCheck.value;
}

function changePage() {
	pageCheck.value = !pageCheck.value;
}

function userLogin() {

	login({id: id.value, pw: pw.value},
		({data}) => {
			userStore.login(data["access-token"])
		},
		(error) => {
			console.log(error);
		})

	openModal();
}

function userJoin() {

	if(pw.value !== checkPw.value) {
		alert("비밀번호를 확인해 주세요.")
		return;
	}

	join({ id: id.value, pw: pw.value, name: name.value, email: email.value , isBroker: isBroker.value},
		({data}) => {
			console.log(data);
		},
		(error) => {
			console.log(error);
		}
	)
}

</script>

<template>
	<div id="box">
		<button class="button" @click="openModal" v-if="!userStore.isLogin">로그인</button>
		<button class="button" @click="userStore.logout" v-if="userStore.isLogin">로그아웃</button>
	</div>

	<div class="modal-wrap" v-show="modalCheck" @click="openModal">
		<div class="modal-container" @click="openModal">

			<!-- 로그인 페이지 -->
			<div v-if="pageCheck">
				<div id="header">
					<img src="@/assets/logo.png" alt="logo" id="logo">
					<div id="title">로그인</div>
				</div>

				<div>
					<input type="text" class="input-box" placeholder="아이디" v-model="id">
				</div>

				<div>
					<input type="password" class="input-box" placeholder="비밀번호" v-model="pw">
				</div>
				
				<button id="login-button" @click="userLogin">로그인</button>


				<div id="join-tab">
					<div class="normal-text">아직 회원이 아니신가요?</div>
					<div @click="changePage" id="join-button">회원가입</div>
				</div>
			</div>
			
			<!-- 회원가입 페이지 -->
			<div v-if="!pageCheck">
				<div id="header">
					<img src="@/assets/logo.png" alt="logo" id="logo">
					<div id="title">회원가입</div>
				</div>

				<div>
					<input type="text" class="input-box" placeholder="아이디" v-model="id">
				</div>

				<div>
					<input type="password" class="input-box" placeholder="비밀번호" v-model="pw">
				</div>

				<div>
					<input type="password" class="input-box" placeholder="비밀번호 확인" v-model="checkPw">
				</div>

				<div>
					<input type="text" class="input-box" placeholder="이름" v-model="name">
				</div>

				<div>
					<input type="text" class="input-box" placeholder="이메일" v-model="email">
				</div>

				<div class="check-box">
					<input type="checkbox" name="isBroker" v-model="isBroker">
					당신은 중계업자입니까?
				</div>
				
				<button id="login-button" @click="userJoin">회원가입</button>


				<div id="join-tab">
					<div class="normal-text">이미 계정이 있으신가요?</div>
					<div @click="changePage" id="join-button">로그인</div>
				</div>
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
	width: 470px;

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

.check-box {
	margin-bottom: 8px;
}

.check-box * {
	margin: 4px;
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

#logo {
	width: 40px; height: 40px;
	margin: 8px;
}

</style>