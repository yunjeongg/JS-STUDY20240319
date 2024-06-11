
// 1. 일반 함수에서 this
function whatIsThis () {

  // node.js 에서 this 는 global 객체를 표현한다.
  // 그러나 브라우저에서 this 는 window 라는 전역객체를 표현한다.
  console.log(this);
}

// whatIsThis ();


// 2. 객체에서의 this
const madeBy = 'KIA';
const model = 'K7';

const car = {
  madeBy: 'HYUNDAI',
  model: '그랜져',
  showInfo: function() {
    // 2-1. node.js 에서 this 는 자기자신 객체를 표현한다.
    console.log(this);
    // 2-2. 함수 바깥의 madeBy, model 을 참조한다.
    console.log(`제조사: ${madeBy}, 모델명: ${model}`);
    // 2-3. this 를 붙이면 자기자신의 madeBy, model 을 참조한다.
    console.log(`제조사: ${this.madeBy}, 모델명: ${this.model}`);
  }
}

// car.showInfo();


// 3. 이벤트핸들러의 this - function으로 선언 시 이벤트를 건 요소
const $btn = document.getElementById('btn');

const buttonHandler = function(e) {

  // 1. this 가 가리키는 것 => $btn
  console.log('버튼 클릭!');
  console.log(this);

  // 2. 두 표현은 같다.
  $btn.style.background = 'red';
  this.style.background = 'red';
}

$btn.addEventListener('click', buttonHandler); // 두번째자리 함수호출하는것이 아닌 함수명을 넣어야 한다.
