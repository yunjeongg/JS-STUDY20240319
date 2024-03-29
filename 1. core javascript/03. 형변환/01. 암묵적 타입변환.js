var n1 = 10;
var n2 = '20';

console.log(n1 + n2); //1020

var n3 = n1 + '';
console.log(typeof n3); //string

var n4 = n2 - n1 - 5 - '3';
console.log(n4); //2

var n5 = n1 * n2;
console.log(n5); //200

var n6 = 'hello' * 3;
console.log(n6); //NaN

console.log('====================');

var n7 = +'99';
console.log(true + true); //2, true의 기본값 1
console.log(true + false); //1
console.log(false + false); //0, false의 기본값 0

console.log('====================');

//while (1) {} 
//while (true) {}

//falsy: 0, '', null, undefined, NaN

if (0) console.log ('hello-1');
if ('') console.log ('hello-2');
if (null) console.log ('hello-3');
if (undefined) console.log ('hello-4');
if (NaN) console.log ('hello-5');

//falsy를 제외한 값 모두 truthy
if (99) console.log ('hello-6');
if (-89.876) console.log ('hello-7');
if ('안뇽?') console.log ('hello-8');
if (' ') console.log ('hello-9'); //hello-9, 공백이 아닌 스페이스(스페이스도 데이터)
if ([10, 20, 30]) console.log ('hello-10');
if ([]) console.log ('hello-11');//hello-11, 공백이 아닌 빈바구니(빈바구니도 데이터)
if (function(){}) console.log ('hello-12');

for (var i = 1; i <= 10; i++) {
  if (i % 2) {
    console.log(`${i}는 홀수입니다.`);
  } else {
    console.log(`${i}는 짝수입니다.`);
}
}

console.log('====================');

var apple = 10;
if (apple > 0) {
  console.log('사과가 있습니다.');
} else {
  console.log('사과가 없습니다.');
}

var n = 20;
var flag = n > 10;
if (flag) {} // if (flag === true) {}

while (true) {} //무한반복문
while ('shsdfh') {} //무한반복문
while (12233) {} //무한반복문


