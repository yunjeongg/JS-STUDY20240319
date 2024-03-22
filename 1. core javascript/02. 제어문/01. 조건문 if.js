
/* 랜덤 정수 생성하기 : Math.random ()*/
//ex)랜덤 플레이리스트재생, 이상형월드컵, 몬스터리젠 등

//0이상 1미만의 난수
//Math.random()               - 0.0 < ~ < 1.0

//그럼 1이상 10미만의 랜덤실수 생성
//Math.random() * 10          - 0.0000 < ~ < 10.0000

//소숫점이하 버리기 : Math.floor()
//ex)Math.floor(9.389) = 9

/*그럼 1이상 10미만의 랜덤정수 생성
Math.floor(Math.random() * 10) - 0.0000 < ~ < 10.0000 
Math.floor(Math.random() * 10) + 1
*/

/*랜덤범위 정수값 공식
x이상 y이하의 랜덤정수 생성
Math.floor(Math.random() * (y - x + 1)) + x

117 ~ 142
Math.floor(Math.random() * (142 -117 + 1)) + 117
Math.floor(Math.random() * 26)) + 117
*/


var randomNumber = Math.floor(Math.random() * 10);
console.log(`랜덤값: ${randomNumber}`);

var randomNumber = Math.random () * 10;
console.log(`랜덤값: ${randomNumber}`);


var score = 90;
var score = Math.floor(Math.random() * 101); //0이상 100미만의 랜덤점수

//조건문바깥에있기에 100% 출력
console.log(`점수: ${score}점`);

//조건문의 조건에 맞으면 출력
if (score > 60) {
  console.log('합격하셨어요~ 짝짝!');
  console.log('수고링~');
}
//그렇지않으면 출력, if가 거짓일때만 출력, if없이 else사용하면 안됨
else {
  console.log('시험 탈락!! 에베베베~');
}