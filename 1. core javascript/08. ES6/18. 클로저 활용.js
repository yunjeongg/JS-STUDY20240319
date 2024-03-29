/*
const increase = (() => {
  let count = 0;
  return () => ++count;
})();

const decrease = (() => {
  let count = 0;
  return () => --count;
})();

console.log(increase());
console.log(increase());
console.log(increase());
console.log(increase());
console.log(decrease());
console.log(decrease());
*/

// const countClosure = () => {
//   let count = 0;
//   const increase = () => ++count;
//   const decrease = () => --count;
// 
//   return { //객체에 묶어서 내보냈다
//     increase,
//     decrease,
//   };
// };
// //키 increase에는 함수 increase가
// //키 decrease에는 함수 decrease가 들어있다

//간단하게 하면
const { increase, decrease } = (() => {
  let count = 0;
  return {
    increase: () => ++count,
    decrease: () => --count,
  }
})();
// console.log(typeof counter);

console.log(increase());
console.log(increase());
console.log(increase());
console.log(increase());
console.log(decrease());
console.log(decrease());