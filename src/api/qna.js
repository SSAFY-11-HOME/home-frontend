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

function selectArticleById(param, success, fail) {
	myaxios.get(`/qboard/${param}`)
	.then(success)
	.catch(fail);
}

function deleteArticleById(param, success, fail) {
	myaxios.defaults.headers["Authorization"] = window.localStorage.getItem("JWT");
	myaxios.delete(`/qboard`, {data : param})
	.then(success)
	.catch(fail);
}

function modifyArticleById(param, success, fail) {
	myaxios.defaults.headers["Authorization"] = window.localStorage.getItem("JWT");
	myaxios.put(`/qboard`, param)
	.then(success)
	.catch(fail);
}

function createComment(param, success, fail) {

	console.log(param);

	myaxios.defaults.headers["Authorization"] = window.localStorage.getItem("JWT");
	myaxios.post(`/qboard/comment`, param)
	.then(success)
	.catch(fail);
}

export {
    selectAll, createArticle, selectArticleById, deleteArticleById, modifyArticleById, createComment
}