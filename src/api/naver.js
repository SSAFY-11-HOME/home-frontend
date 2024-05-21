import naxios from '@/utils/axios-naver.js'

function searchNews(param, success, fail) {
	naxios.get(`/v1/search/news.json?query=${param}`)
	.then(success)
	.catch(fail)
}

export {
	searchNews
}