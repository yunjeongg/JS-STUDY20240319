//문자형을 명시적으로 숫자형로 바꾸기
var x = '30', y = '40';

var result1 = Number(x) + Number(y);
var result2 = parseInt(x) + parseInt(y);
//parseInt 문자를 숫자로 바꿀 때 정수로 바꾼다. (소숫점버림)
//parseDouble 를 사용하면 소숫점을 지킬 수 있다.
var result3 = +x + +y;

console.log(result1);
console.log(result2);
console.log(result3);


//숫자형, 논리형등을 명시적으로 문자형으로 바꾸기
var m = ''+10 + 20;
console.log(m);

var f = +false; //앞에 +하나붙이면 숫자형
var f = ''+false; //앞에 +하나붙이고 공백붙이면 문자형

console.log('====================');

console.log('hello'); //truthy
console.log(Boolean('hello')); //true
console.log(Boolean(null)); //false
console.log(!!999); //true, 느낌표두개도 논리를 논리형으로 바꿔줌
//첫번째느낌표 - 숫자형 > 논리형, 두번째느낌표 - 논리형 > 논리형
console.log(!!undefined); //false

//회원 로그인 여부 확인
function isLogin() {
  const token = window.localStorage.getItem('LOGIN_ACCESS_TOKEN');

  return token !== null;
  //return !!window.localStorage.getItem('LOGIN_ACCESS_TOKEN');
}
//const isLogin = () => 
//!!window.localStorage.getItem('LOGIN_ACCESS_TOKEN');
