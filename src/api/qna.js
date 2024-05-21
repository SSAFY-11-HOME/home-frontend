import myaxios from "@/utils/axios-common.js"

function selectAll(success, fail) {
	myaxios.get(`/qboard/list`)
	.then(success)
	.catch(fail);
}

export {
    selectAll
}