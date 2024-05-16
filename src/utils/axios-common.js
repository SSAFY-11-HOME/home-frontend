// axios 관련 공통 사항
// utils/axios-common.js : axios 객체를 customizing
//  ex) baseURL 지정, 컨텐트 타입, timeout 지정...

// axios 객체 수정 (customizing...)

// axios 객체 관련 설정
// 사용자 정의 axois 객체 생성
// base-url, content-type, ...
import myaxios from 'axios';

const { VITE_BASE_URL } = import.meta.env;

export default myaxios.create({
	baseURL: VITE_BASE_URL,
	headers: {
		"Content-Type": "application/json"
	}
})