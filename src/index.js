// const person = { username: "Alice", age: 30 };
// const {usernamem, age} = {username: "Alice", age: 30};
// username, age
// 구조분해할당

import { appName, greet, user } from "./module.js"; // 확장자 확인

// 디폴트 모듈
// 자동완성으로 파일명하고 모듈명을 동일하게 해줌
// import module from "./module";
// 아래랑 동일
import metadata from "./module.js";

// const module = require("./module") ?????

const name = "Javascript!!~~";

console.log(
  greet(`${name}-${appName}-
  ${metadata.version}-${metadata.creator}
  -${user.name}-${user.age}`)
);

document.getElementById("root").innerHTML = greet(`${name}-${appName}-
${metadata.version}-${metadata.creator}
-${user.name}-${user.age}`);
