import myaxios from "@/utils/axios-common.js"

function selectAllByRange(param, success, fail){
	console.log("SELECT ALL BY RANGE");
	myaxios.get(`/house/area?lat=${param.lat}&lng=${param.lng}`)
	.then(success)
	.catch(fail);
}

function selectAllById(param, success, fail){
	myaxios.get(`/house/apt?id=${param}`)
	.then(success)
	.catch(fail);
}


export {
	selectAllByRange, selectAllById
}