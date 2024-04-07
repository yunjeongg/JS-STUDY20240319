for (let i = 0; i < 3; i++) {
  console.log(`hello ${i}`);
}

for (let i = 0; i < 4; i++) {
  console.log(`bye ${i}`);
}
//동기
//코드는 위에서부터 순서대로 진행된다
//동시에 작업실행이 안됨
//ex)길이 하나여서 지나갈때 순서대로 지나가야됨

//비동기
//ex)길이 여러개여서 지나갈때 동시에 여러 지나갈 수 있음

//비동기함수 setTimeout //setTimeout(()=>{})
//코드를 순서대로 진행시키는 것이 아닌 시간차로 진행시킬 수 있게 한다.
console.log('오늘 할 일은?');

setTimeout(()=>{
  console.log('집에서 쉴 거야');
}, 1500);


console.log('===============');
setTimeout(()=>{
  for (let i = 0; i < 3; i++) {
    console.log(`hello ${i}`);
  }
}, 2000) //0.2초, 밀리초: 1/1000초, 실행지연시간

setTimeout(()=>{
  for (let i = 0; i < 4; i++) {
    console.log(`bye ${i}`);
  }
})

//로그인할때 중복확인할때 서버랑 통신을 하게 되는데
//시간차를 주지않고 바로 통신하게 하면 서버통신비가 오래나온다
