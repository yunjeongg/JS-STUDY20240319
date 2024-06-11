
// this 를 조작하는 메서드

const kim = {
  name: '김철수',
  age: 33
};

const park = {
  name: '박영희',
  age: 66
};

function sayHello (lang1, lang2) {

  // 일반함수의 this 는 global 객체를 표현한다.
  console.log(this);
  console.log(`Hello I am ${this.name}, I can speak ${lang1}, ${lang2}`);
}


// 1. call : this 를 조작하기 위한 메서드
// param1 : 조작 할 this 를 전달
// ...param2 : 원래 해당함수가 받아야 할 파라미터를 전달

// 1-1. 일반 함수 안의 this 는 글로벌 객체
// sayHello(); 

// 1-2.
// sayHello.call(kim);
// sayHello.call(park);

// 1-3.
// sayHello('Korean', 'English');

// 1-4.
sayHello.call(kim, 'Spanish', 'Japanese');
sayHello.call(park, 'Korean', 'Chinese');

console.log('===========================');
// 2. apply : call 과 같다. 다만 param2 를 배열로 묶어서 전달한다.
// 2-1.
sayHello.apply(kim);
sayHello.apply(park);

// 2-2.
sayHello.apply(park, ['한국어', '영어']);

console.log('===========================');
// 3. bind : call, apply 와 같으나, 함수를 바로 실행시키지 않고 this 를 조작한 새로운 함수를 반환한다.
// 함수를 바로실행하는 것이 아닌 나중에 실행한다 -> callback 할 수 있다.
const newSayHello = sayHello.bind(kim, '중국어', '힌두어'); 
newSayHello();

// 3-1. bind 실제 사용예시
const clickHandler = function(fruitName, e) { // e 뿐 아니라, 다른 파라미터를 더 넣고 싶을 때 사용할 수 있다.
  console.log('event객체: ', e);
  console.log('this:', this);
  this.style.background = 'red';
  console.log('전달한 과일명:', fruitName);
};

const $btn = document.getElementById('btn');
const $input = document.getElementById('fruit');

// 3-1-1.
// this = $btn
// $btn.addEventListener('click', clickHandler);

// this 가 가리키는 것이 $btn 에서 $input 이 된다.
// $btn.addEventListener('click', clickHandler.bind($input));

// this 가 가리키는 대상을 바꾸고 싶지 않을 때
// $btn.addEventListener('click', clickHandler.bind(this));

// 이벤트함수에 추가 파라미터를 넣고 싶을 때 01
// $btn.addEventListener('click', clickHandler.bind($btn, '사과'));

// 
// const bindedClickHandler = clickHandler.bind($btn, '레몬');
// $btn.addEventListener('click', bindedClickHandler);

// 이벤트함수에 추가 파라미터를 넣고 싶을 때 02
// $btn.addEventListener('click', function(name, e) {
//   console.log('이름:', name);
// }.bind($btn, '김멍멍'));




