
var a = 5;
var b = "5";

// console.log(a = b);  //a에 b를 대입한다 
console.log(a == b); //true
console.log(a === b); //true

// ==비교는 결과 예측이 어려움
console.log('0' == '');        //false
console.log(0 == '');          //true
console.log('0' == 0);         //true
console.log(false == 'false'); //false
console.log(false == 0);       //true

// === 를 쓰자
console.log('0' === '');        //false
console.log(0 === '');          //false
console.log('0' === 0);         //false
console.log(false === 'false'); //false
console.log(false === 0);       //false

//대소비교 아스키코드 ASCII
//뒤로 갈 수록 크고, 대문자가 소문자보다 작다
console.log('a' > 'A'); //97 > 65, true
console.log('c' > 'a'); //99 > 97, false
console.log('강'<'황'); //true
//          97 99   97 100
console.log('ace' < 'ade'); //true 앞부터 한글자씩 싸우기 때문에 앞에서 승부나면 뒤는 안봄