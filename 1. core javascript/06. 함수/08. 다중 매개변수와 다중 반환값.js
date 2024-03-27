
function add2 (n1, n2) {
  return n1 + n2;
  // 두 값의 합을 구하고싶을때
}
var r2 = add2 (5, 9);

function add3 (n1, n2, n3) {
  return n1 + n2 + n3;
  // 세 값의 합을 구하고 싶을때
}
var r3 = add3 (5, 9, 2);



  // ...n개의 값의 합을 구하고 싶다면?
/*
만약 n개의 정수 합을 구해주는 함수를 만들어야 한다면
파라미터에 집합자료형(배열, 객체)을 전달한다.
*/
function addAll(numbers, others) {
  var total = 0;
  for (var n of numbers) {
    total += n;
  }
  return total;
}


// ES6 - spread문법
function addAllES6(first, second, ...numbers) {
  console.log(`numbers: ${numbers}`);
  var total = 0;
  for (var n of numbers) {
    total += n;
  }
  return total;
}

// 100만줄
var r1 = addAll([5, 9, 2, 10, 20], [1, 2, 3]);
console.log(`r1: ${r1}`);

var r2 = addAllES6(10, 20, 30, 40, 50);



console.log('=======================');

// 다중 반환값
// 함수의 반환값은 언제나 하나다.
function arithmeticOperate(n1, n2) {
  var addResult = n1 + n2;
  var subResult = n1 - n2;
  var multiResult = n1 * n2;
  var divResult = n1 / n2;
  return [
    addResult, 
    subResult, 
    multiResult, 
    divResult,
  ];
}

var r3 = arithmeticOperate(20, 10);
console.log(`덧셈결과: ${r3[0]}`);
console.log(`뺄셈결과: ${r3[1]}`);
console.log(`곱셈결과: ${r3[2]}`);
console.log(`나눗셈결과: ${r3[3]}`);