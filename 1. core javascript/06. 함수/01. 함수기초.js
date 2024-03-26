/*
console.log(`김철수님 안녕하세요! 방가방가!!`);
console.log('오늘도 즐거운 하루되세요!!');

//...코드 100줄 정도 작성

console.log(`박영희님 안녕하세요! 방가방가!!`);
console.log('오늘도 즐거운 하루되세요!!');
*/

//함수를 정의한다 function define(만든다.) 
//함수의 이름은 동사형으로 짓는다.
//변수의 이름은 명사로 짓는다.
function sayHello(userName) {
  console.log(`${userName}님 안녕하세요! 방가방가!!`);
  console.log("오늘도 즐거운 하루되세요!!");
}

//함수 호출 function call(사용한다.)
sayHello('둘리');
sayHello('잔망루피');

console.log('====================');

function makeLine () {
  console.log('====================');
}

sayHello('a');
makeLine ();
sayHello('b');
makeLine ();
sayHello('c');
makeLine ();

//나의 프로그램에서는 원의 넓이를 자주 구함
const PI = 3.14159265;

//반지금이 r인 원의 넓이를 구하는 함수 정의
function calcAreaCircle (r) {
  return PI * r **2; 
}
//반지금이 5인 원의 넓이
var circle1 = calcAreaCircle (5)
console.log(circle1);

//반지금이 17인 원의 넓이
var circle2 = calcAreaCircle (5)
console.log(circle2);