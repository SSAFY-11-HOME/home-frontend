import myaxios from "@/utils/axios-common.js"

function login(param, success, fail) {
	myaxios.post(`/user/login`, param)
	.then(success)
	.catch(fail);
}

function logout(param, success, fail) {

	console.log(param);

	myaxios.defaults.headers["Authorization"] = window.localStorage.getItem("JWT");
	myaxios.post(`/user/logout`, param)
	.then(success)
	.catch(fail);
}

function join(param, success, fail) {
	myaxios.post(`/user`, param)
	.then(success)
	.catch(fail);
}

function updateProfile(param, success, fail) {
	myaxios.defaults.headers["Authorization"] = window.localStorage.getItem("JWT");
	myaxios.put(`/user`, param)
	.then(success)
	.catch(fail);
}

function remove(param, success, fail) {
	myaxios.defaults.headers["Authorization"] = window.localStorage.getItem("JWT");
	myaxios.delete(`/user`, param)
	.then(success)
	.catch(fail);
}

function getAllUser(success, fail) {
	myaxios.defaults.headers["Authorization"] = window.localStorage.getItem("JWT");
	myaxios.get(`/user`)
	.then(success)
	.catch(fail);
}

export {
	login, logout, updateProfile, remove, getAllUser, join	
}