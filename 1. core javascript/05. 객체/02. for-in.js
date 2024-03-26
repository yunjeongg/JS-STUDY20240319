
var phone = {
  company: '삼성',
  color: '펄화이트',
  model: '갤럭시 S24 Ultra',
  price: 1200000,
}

//for (변수선언 in 객체명) {}
//값이 아닌 키가 반복됨
for (var data in phone) {
  // console.log(data);
console.log(phone[data]);
//phone의 값들의 데이터타입은 문자열이기때문에 [대괄호]로 감싸줘야함. 
console.log(typeof data);
}

