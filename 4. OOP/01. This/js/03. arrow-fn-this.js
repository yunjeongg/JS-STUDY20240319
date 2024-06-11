
// 화살표함수와 this
const dog = {
  name: '뽀삐',
  regularFn: function () {
    console.log('regular:', this);
  },
  arrowFn: () => {
    console.log('arrow:', this);
  }
};

dog.regularFn(); // node.js, 브라우저 모두  자기자신 객체, 
dog.arrowFn(); // node.js 에서는 {}, 브라우저에서는 window 객체

console.log('=============================================');
const cat = {
  name: '나비',
  introduce: function () {
    console.log(`introduce this :`, this); // 나비 객체
    setTimeout(function () {
      console.log('setTimeout this', this); // window 객체
    }, 2000);
  }
}

const rabbit = {
  name: '나비',
  introduce: function () {
    console.log(`introduce this :`, this); // 나비 객체

    // 화살표 함수의 this 는 scope 체인 안의 this를 가리킴 (상위함수)
    setTimeout(() => {
      console.log('setTimeout this', this); // window 객체
    }, 2000);
  }
};

$modal.addEventListener('click', function(e) { // 일반함수
  console.log(this); // $modal

  $ok.addEventListener('click', function(e) { // 일반함수
    console.log(this); // $ok
  });
  $cancel.addEventListener('click', (e) => { // 화살표함수 내의 this = > 상위 레벨의 this
    console.log(this); // $modal
  });
});


