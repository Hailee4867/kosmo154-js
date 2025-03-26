// console.log("안녕하세요. 반갑습니다.");

const fs = require('fs');
const input = fs.readFileSync(
    process.platform === "linux" ?
    "/dev/stdin" : "./input.txt").toString().trim().split(("\r\n");
 
var result = parseInt(input[0])+parseInt(input[1]);
console.log(result);
    // console.log(input);
// console.log(typeof input);
// console.log(input[0]); 
// console.log(input[1]);

// .trim() 은 동백제거 하는 기능

// 숫자가  텍스트에서 
// .split("\r\n"); 에서 r을 지우고 백준 알고리즘사이트에서 인식할수있음. 
