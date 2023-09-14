// ecmascript(es, js) module 의미 잘 알기

// js: es-module 방법에서 모듈을 내보내는 방법
// 내보내고 싶은 모듈 앞에 export를 쓰면 됨
// 모듈: 코드집합 = 변수, 함수, 객체, 클래스 ,인터페이스...

// export(수출): 내보내기
export function greet(name) {
  return `Hello, ${name}!`;
}

export const appName = "myapp";

export const user = {
  name: "Alice",
  age: 30,
};

// 기본 내보내기
export default {
  version: "1.0",
  creator: "Sanghyeok Han",
};
