<script setup>

import { ref } from 'vue';
import { useUserStore } from '@/stores/counter';
import { join } from '@/api/user';

const userStore = useUserStore();

const modalCheck = ref(false);
const pageCheck = ref(false);

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

			<!-- 로그인 페이지 -->
			<div id="header">
				<img src="@/assets/logo.png" alt="logo" id="logo">
				<div id="title">Q & A</div>
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
  background: rgba(0, 0, 0, 0.4);
  z-index: 2;

}

/* modal or popup */
.modal-container {
  position: fixed;
  top: 120px;
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