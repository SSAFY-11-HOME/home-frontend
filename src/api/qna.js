import myaxios from "@/utils/axios-common.js"

function selectAll(success, fail) {
	myaxios.get(`/qboard/list`)
	.then(success)
	.catch(fail);
}

function createArticle(param, success, fail) {
	myaxios.defaults.headers["Authorization"] = window.localStorage.getItem("JWT");
	myaxios.post(`/qboard`, param)
	.then(success)
	.catch(fail);
}

export {
    selectAll, createArticle
}