/* 정수 A, B, C 를 물어보고 
세 값이 같은지, 두값이 같은지, 모두 다른지*/
var A = +prompt ('정수 A는?');
var B = +prompt ('정수 B는?');
var C = +prompt ('정수 C는?');

//A===B==C 라고 적으면 A===B의 결과 true 나오고, 그다음 true === C 을 보기때문에 틀림
if (A === B && B === C) {
  alert ('세 값이 모두 같습니다.');
} else if (A === B || A === C || B === C) {
  alert ('두 값이 같습니다.');
} else {
  alert ('모두 다른 값입니다.')
}


/* 정수 A, B 를 물어보고 두 수의 차이 절대값(-없는값) 으로 구하기 */
var A = +prompt ('정수 A는?');
var B = +prompt ('정수 B는?');

//1번

//2번
var diff = (a > b) ? a - b : b - A;

alert(`두 값의 차이는 ${diff}입니다.`);
//3번
var diff = a - B;
var diff = (a > b) ? diff : -diff;

alert(`두 값의 차이는 ${diff}입니다.`);


/* 정수 A, B, C 를 물어보고 최소값을 구하기 */
var A = prompt ('정수 A는?');
var B = prompt ('정수 B는?');
var C = prompt ('정수 C는?');

//min: 최소값을 저장해 놓을 변수
//1. 자리뺏기싸움
var min = a;                    //  a: 9 ,  b: 77,  c: 99
if (b < min) min = b;           //  min : 9
if (c < min) min = c;

alert(`최소값은 ${min}입니다.`);

//2.
if (A < B && A < C) {
  alert (`최소값은 ${A}입니다.` )
} else if (B < A && B < C) {
  alert (`최소값은 ${B}입니다.` )
} else if (C < A && C < B) {
  alert (`최소값은 ${C}입니다.` )
} else {
  alert('세 값이 모두 같습니다.')
}
