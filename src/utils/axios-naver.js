import naxios from 'axios';

const { VITE_X_NAVER_CLIENT_ID, VITE_X_NAVER_CLIENT_SECRET } = import.meta.env;

export default naxios.create({
	baseURL: 'https://openapi.naver.com',
	headers: {
		"Content-Type": "application/json",
		"X-Naver-Client-Id": VITE_X_NAVER_CLIENT_ID,
		"X-Naver-Client-Secret": VITE_X_NAVER_CLIENT_SECRET
	}
})