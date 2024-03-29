//hello 5번 반복 while 
//코드가길어졌을때 반복이 몇번인지 안보임
//반복횟수를 모를때 ex)정지누를때까지 노래재생해줘
//1-2-3-4 2-3-4 ... -2-3-4-2 실행순서
var i = 1; //1.begin
while (i <= 5) { //2.end
  console.log ('hello'); //3.execute
  i++ //4.step
}

//hello 5번 반복 for
//begin,end,step를 한군데에 모아놔서 반복횟수잘보임
//그래서 반복횟수를 알 때 for사용
//1-2-3-4 2-3-4 ... -2-3-4-2 실행순서
//         1      2      4
for (var i = 1; i <= 5; i++) {
//                3
  console.log ('hello');
}

//1부터 10까지 다 더하기
var total = 0;
for (var i = 1; i <=10; i++) {
  total += i; //total의 변수선언을 여기서 하면 매번 초기화되어서 중첩이안됨 
}
console.log (total);

//횟수지정반복문
for (var i = 0; i < 5; i++) {
  console.log ('메롱');
}

