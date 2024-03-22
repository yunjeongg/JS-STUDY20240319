//begin= 10, end= 0, step= 1
//10부터 0까지 1씩 줄어든다
console.log('10!!');
console.log('9!!');
console.log('8!!');
//...
console.log('0!!');

//begin= 10, end= 0, step= 1
//이것을 정규식으로 작성하면
var n = 10;

console.log(`${n}!!`);
n--;
console.log(`${n}!!`);
n--;
console.log(`${n}!!`);
n--;
//...
console.log(`${n}!!`);

//begin= 10, end= 0, step= 2
//while문을 쓰면 3
var n = begin;
while (n >= end) {
  console.log(`${n}!!`);
  step;
}

//begin= 10, end= 0, step= 1
//while문을 쓰면 2
var n = 10; //1. 시작값 10

while (n >= 0) {         //2. n이 0과 같거나 클때동안 계속 6.조건이 안맞으면
  console.log(`${n}!!`); //3. n값을 출력한다
  n--;                   //4. n--을 실행하고 
                         //5. while문은 무조건 while문 상단으로 다시 돌아간다.
}                        //7. 종료

//begin= 10, end= 0, step= 2
//while문을 쓰면 3
var n = 10;

while (n >= 0) {
  console.log(`${n}!!`);
  n -= 2;
}

//구구단 구하기 1차
//    2 * n = 2
//ex) 2 * 1 = 2
var n = 1;

while (n <= 9) {
  console.log(`2 x ${n} = ${2 * n}`);
  n++
}

//구구단 구하기 최종
var n = 1;
var level = 5

while (n <= 9) {
  console.log(`level x ${n} = ${level * n}`);
  n++
}

//10~34까지의 정수를 1씩 증가하면서 출력
//begin~end          step

var m = 10;

while (m <=34) {
  console.log(m);
  m++
}

//10~34까지의 정수를 1씩 증가하면서 홀수만 출력
var m = 10;

while (m <=34) {
  if (m % 2 === 1 )
  console.log(m);
  m+=2;
}
//while 반복하는데 만약에 이러면 저렇게하세요
//if 만약에 이러면 반복해서 저렇게하세요

//1~10까지의 누적합
var total = 0;
var i = 1;

while (i <= 10) {
  
  total += i
  i++

}
console.log(total);

