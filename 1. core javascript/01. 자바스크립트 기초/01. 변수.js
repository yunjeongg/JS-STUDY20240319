var result; // 변수 선언

result = 10 + 20; // 값을 변수에 할당 (대입)
//result와 10+20이 같다 가 아니고 result에 10+20을 저장한다 라는 뜻
// = 은 저장명령

var multiple = result * 3;

console.log(multiple);

var fruit; // 만들때는 붙이고
fruit = '자몽'; // 초기화할때는 var 안붙임
console.log (fruit);

var food = '볶음밥'; //만들면서 초기화 하기
food = '돈까스'; // 재할당하기
console.log(food);

//변수 이름 규칙
var 7number; //숫자로 시작하면 안됨
var num7ber; //중간에 오는 것은 가능
var user name; //띄어쓰기 안됨

//네이밍 관례
var current_login_user_phone_number; //snake case
var CurrentLoginUserPhoneNumber     // camel case (js: o 자바스크립트는 이걸)

//변수 이름 규칙
var apple; //이 셋은 다 같은 변수가 아님
var APPLE;
var Apple;

var myPetName!; //변수에 특수문자를 사용하면 안됨
var $myPetName_; //변수에 사용가능한 예외특수문자 _, $

var for; //키워드(예약어)는 변수이름으로 사용하면 안됨
var let;

var For; //이건 가능
var lEt;

var a = '홍길동' // x 
var UserName = '홍길동' // 변수이름은 구체적이고 명확하게 짓기

var UserName; //변수이름은 일관성있게 짓기
var UserAge;
var MemberAddress; // x

var 쩰리 = '곰표젤리'; // 영어로 쓰자


//변하지 않는 수 상수 const (constant)
const $orange = #ffa808;

$orange = sagsrh; //상수는 재할당할 수 없기때문에 재할당하면 에러발생

const COLOR_GREEN = "#0F0"; //상수는 대문자와 _밑줄로 구성된 이름으로 명명





