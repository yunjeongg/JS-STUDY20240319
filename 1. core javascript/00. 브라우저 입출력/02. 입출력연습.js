//브라우저에서 입력하기
prompt ('이름이 뭐니?');
prompt ('몇살이니?');

//입출력한 정보 저장하기
var UserName = prompt ('이름이 뭐니?');
var UserAge = +prompt ('몇살이니?');

var birthYear = 2024 - UserAge + 1; 
//정리하겠다고 2025-UserAge 라고 쓰지말기
//2024 + 1 - UserAge, 이런것도 금지 만일 +일 경우 오류날 수 있음

//브라우저에서 알림창을 띄우기
alert (`${UserName}는 ${birthYear}년생이구나?`)