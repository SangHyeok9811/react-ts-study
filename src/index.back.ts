// ecmascript(es, js) module

// const person = { username: "Alice", age: 30 };
// const {usernamem, age} = {username: "Alice", age: 30};
// username, age
// 구조분해할당

import { appName, greet, user } from "./module"; // 확장자 확인s

// 디폴트 모듈
// 자동완성으로 파일명하고 모듈명을 동일하게 해줌
// import module from "./module";
// 아래랑 동일
import metadata from "./module";

// const module = require("./module") ?????

// 타입 추론
// let name = "Javascript!!";

// 타입 선언
let name: string;
// name = 1;
name = "Javascript";

console.log(
  greet(
    `${name}-${appName}-
  ${metadata.version}-${metadata.creator}
  -${user.name}-${user.age}`,
    "male"
  )
);

document.getElementById("root").innerHTML = greet(`${name}-${appName}-
${metadata.version}-${metadata.creator}
-${user.name}-${user.age}`);
