//아이디 && 비밀번호
   true && true;   //t
   true && false;  //f
  false && true;   //f
//단축평가, 아이디가 틀렸는데 비밀번호까지 볼 필요 없음
  false && false;  //f

  //1차면접 || 2차면접
      true || true;   //t
      true || false;  //t
// 1차면접의 인상이 좋아서 2차면접까지 가지않음
     false || true;   //t
// 1차면접이 별로여서 2차면접도 봐야함
     false || false;  //f

//OR연산 : 첫번째 truthy를 반환
console.log('hello'||'bye'); //'hello'
console.log(null ||'안뇽'); //'안뇽'

//AND연산 : 첫번째 falsy를 반환
console.log('메롱' && '즐'); '즐'
//왼쪽 true, 오른쪽도 true 결국 마지막값 반환
console.log('메롱' && NaN && '즐'); NaN
//왼쪽 true, 중간 false 결국 중간값 반환
console.log(0 &&'룰루랄라');'0'


조건 && console.log('blah blah~');
/*

<h1> 안녕하세요 </h1>
login && <h2> xxx님 환영합니다. </h2>

쿠폰당첨여부 && sendCoupon (); //당첨됐을때
내 게시물 여부 && <button> 삭제 </button>


!쿠폰당첨여부 && sendMessage (); //당첨안됐을때

*/

