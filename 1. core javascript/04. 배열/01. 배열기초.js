var food1 = '짬뽕';
var food2 = '탕수육';
var food3 = '자몽';

var all = `${food1}, ${food2}, ${food3}`;

var arr = [10, 20, 30, 40];
console.log(typeof arr);

//객체 여러개의 데이터로 구성되어 있는 자료형
//배열도 객체

console.log(arr[1]); //20

console.log(arr[2]**2); //900, 배열2의 값은 여전히 30
//console.log(arr[2] = arr[2]**2); //이래야 배열2의 값이 변경됨
arr[2]++;
//또는 이런식으로 직접올려도 배열2의 값 변경됨
console.log(arr);


//배열 데이터 수 확인
console.log(arr.length); //4

console.log(`첫번째 데이터: ${arr[0]}`);
console.log(`마지막 데이터: ${arr[arr.length-1]}`);

console.log('====================');

//배열데이터 순회 (전체참조 :travis)
var arr = [10, 20, 30, 40];

console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);

/*
for (var i = 0; i <= 3; i++) {
  console.log(arr[i]);
}
*/

for (var i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

console.log('====================');

//for ~ of 반복문 (배열 전용 반복문)
var weekDays = ['월', '화', '수', '목', '금', '토', '일', ];

/* 배열에서 조건을 걸때 유리
for (var i = 0; i < weekDays.length; i++) {
  console.log(`${weekDays[i]}요일!!`);
}
*/

//조건을 걸지않고 전체배열 반복시 유리
for (var day of weekDays ) { // var 변수생성 of 배열 (배열에서 하나씩 꺼내 넣을 변수생성)
  console.log(`${day}요일!!`);
}

//배열 생성 관례: 이름 복수형, -List 어미
var fruits = ['자몽', '딸기', '오렌지'];
var fruitList = ['자몽', '딸기', '오렌지'];
var fruitArray = ['자몽', '딸기', '오렌지'];

//맨 마지막에 , 찍고끝냈다가 나중에 내용추가해도 됨
var fruits = ['자몽', '딸기', '오렌지', ];
console.log(fruits.length);
//가독성이 없는것은 띄어쓰기써서 세로로 써도됨
var tags = [
  '<li>오렌지</li>',
  '<a href="#">링크</a>',
  '<h1>로고</h1>',
]