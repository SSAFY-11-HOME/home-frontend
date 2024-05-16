import myaxios from "@/utils/axios-common.js"

function selectAllByRange(param, success, fail){
	console.log("SELECT ALL BY RANGE");
	myaxios.get(`/house/area?lat=${param.lat}&lng=${param.lng}`)
	.then(success)
	.catch(fail);
}

function selectOneById(param, success, fail){
	myaxios.get('/house/area', {param})
	.then(success)
	.catch(fail);
}


export {
	selectAllByRange, selectOneById
}