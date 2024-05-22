import myaxios from "@/utils/axios-common.js"

function selectAllByRange(param, success, fail) {
	myaxios.get(`/house/area?lat1=${param.lat1}&lat2=${param.lat2}&lng1=${param.lng1}&lng2=${param.lng2}`)
	.then(success)
	.catch(fail);
}

function selectAllById(param, success, fail) {
	myaxios.get(`/house/apt?id=${param}`)
	.then(success)
	.catch(fail);
}

function selectAllBySearchWord(param, success, fail) {
	myaxios.get(`/search/${param}`)
	.then(success)
	.catch(fail);
}

function selectAllByDongCode(param, success, fail) {
	myaxios.get(`/search/dong/${param}`)
	.then(success)
	.catch(fail);
}


export {
	selectAllByRange, selectAllById, selectAllByDongCode, selectAllBySearchWord
}