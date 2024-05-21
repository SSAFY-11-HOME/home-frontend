import myaxios from "@/utils/axios-common.js"

function login(param, success, fail) {
	myaxios.post(`/user`, param)
	.then(success)
	.catch(fail);
}

function updateProfile(param, success, fail) {
	myaxios.put(`/user`, param)
	.then(success)
	.catch(fail);
}

function remove(param, success, fail) {
	myaxios.delete(`/user`, param)
	.then(success)
	.catch(fail);
}

function getAllUser(success, fail) {
	myaxios.get(`/user`)
	.then(success)
	.catch(fail);
}

export {
	login, updateProfile, remove, getAllUser
}