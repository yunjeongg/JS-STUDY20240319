// 자바스크립트의 함수는 함수를 리턴할 수 있음

function Calculator (a) {
  return function (n1, n2) {
    return n1 + n2
  };
}
const x = Calculator ();
console.log(typeof x);

const y = x(10, 20);
console.log(`y: ${y}`);

console.log('==============');
const z = Calculator ()(6, 9);
console.log(`z: ${z}`);

const operate = () => (n1, n2) => n1 * n2;

const k = operate();
const m = k(3, 7);
console.log(`m: ${m}`);

console.log('==============');
function bar() {
  
  function fas() {
    return 10;
  }

  return fas;
}

const h = bar ()();
console.log(`h: ${h}`);

// 카운트를 증가시키는 함수
// let count = 0; // 전역변수
// 
// const increase = () => count++;
// 
// console.log(increase());
// console.log(increase());
// count = 999; // 이런 경우때문에 전역변수사용을 자제해야하고
// //이 상황을 막기 위해 지역변수를 사용해야한다.
// console.log(increase());
// console.log(`count: ${count}`);



// const increase = () => {
//   let count = 0;
//   return ++count;
// };
// //하지만 함수의 통제는 외부에서 하기에 지역변수는 유지가 안됨 
// increase();
// increase();
// const count = increase();
// console.log(`count: ${count}`);



// 클로저를 통해 지역변수의 스코프를 늘려줄 수 있다.
const increaseClosure = () => {
  let count = 0; // 지역변수

  const helper = () => ++count;

  return helper;
};

const increase = increaseClosure();

console.log(increase());
console.log(increase());
count = 999;
console.log(increase());



// 즉시 실행 함수 : 함수를 1회성으로 사용할 목적으로 만드는 함수

//함수이름도 없고 변수에저장된것도아니라 부를방법이 없는데
//함수전체를 소괄호로 묶고 ()호출을 하는 것이 바로 즉시실행함수이다.
(function() {
  console.log('hello');
})();

const increase_ = (() => {
  let count = 0;
  return () => ++count;
})();

increase_();
increase_();
increase_();

