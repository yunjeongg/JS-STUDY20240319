
var num = 27;
console.log(typeof num);
/*자바스크립트는 정수와 실수를 구분하지 않기 때문에 아래의 답이 5.4가 나옴
정수와 실수를 구분하는 자바 등에서는 5라고 나옴, 정수/정수 = 정수 이기 때문에*/
console.log(num / 5); //5.4

var foodName = num;    //27
var foodName = 'num'; //num
console.log(foodName);

//문자열을 표시하는 방법
var foodName = '깐풍기'; //자바스크립트
var foodName = "깐풍기"; //자바
var foodName = `깐풍기`; //최신, 백틱

//백틱사용법
var element = '<nav>\n\t<ul>\n\t<li>딸기</li>\n\t</ul>\n</nav>';
console.log(element);

var element = `
<nav>
   <ul>
      <li> 메롱 </li>
   </ul>
</nav>
`;
console.log(element);

console.log ('=======');

var month = 4;
var day = 5;
var anni = '식목일';

var sentence = month + '월 ' + day + '일은' + anni + '입니다.';
console.log(sentence);

var sentence2 = `${month}월 ${day}일은 ${anni}입니다.`;
console.log(sentence2);

//boolean 논리
var userAge = 30;

var flag = userAge > 19;
console.log(typeof flag);
console.log(flag); //소문자 true, false만 boolean

var true = 10; //불가
var TRUE = 10; //가능

//undefined, null
//undefined: 아직 값이 없는 상태 (고의로 값을 안넣은게 아님)
//null: 일부러 값을 없앤 상태 (고의로 값을 없앰)

var petName;
console.log(petName); //undefined, 개이름을 아직 못지은상태

var myHobby = '산책';
myHobby = null; //null, 산책이 취미지만 고의로 안넣음

function buyNewCar(money) {
  if(money > 5000) return '그랜져';
  else if (money > 3000) return '아반떼';
  else if (money < 0) return null;
}
