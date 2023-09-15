// ecmascript(es, js) module 의미 잘 알기

// js: es-module 방법에서 모듈을 내보내는 방법
// 내보내고 싶은 모듈 앞에 export를 쓰면 됨
// 모듈: 코드집합 = 변수, 함수, 객체, 클래스 ,인터페이스...

// export(수출): 내보내기
// 매개변수? : 타입 - 옵셔널
// export function greet(name: string, age? : number) {
//   console.log(age); // 값이 없으면 undefined로 뜸
//   return `Hello, ${name}!`;
// }

// export(수출): 내보내기
// 매개변수? : 타입 - 옵셔널
// 매개변수 : 타입 = default 값
// 매개변수 : 값1 | 값2 | 값3 - 유니온(union)타입
export function greet(
  name: string,
  gender?: "undslecified" | "female" | "male",
  age?: number,
  nation: string = "korea"
) {
  console.log(age); // 값이 없으면 undefined로 뜸
  return `Hello, ${name}!`;
}

export const appName = "MyApp";

// 인터페이스: 객체 구조를 선언
interface Person {
  name: string;
  gender?: "undslecified" | "female" | "male";
  age: number;
}

interface User extends Person {
  nickname?: string;
}

export const user: User = {
  // Person 인터페이스 속성(property)
  name: "Alice",
  age: 30,
  gender: "female",
  // User 인터페이스 속성(property)
  nickname: "Alice",
};

function identity<T>(arg: T) {
  return arg;
}

// 제네릭(generic): 타입을 매개변수로 사용
const result = identity<string>(user.name);
const result2 = identity<number>(user.age);
const result3 = identity<Person>(user);

// 속성 추가가 안 됨
// user.country = "korea";

// 기본 내보내기
export default {
  version: "1.0",
  creator: "Sanghyeok Han",
};
