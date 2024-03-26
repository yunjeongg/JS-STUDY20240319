
//객체 생성

//우리 집 강아지 정보 저장 (변수로 저장)
var name = '뽀삐';
var kind = '진돗개';
var age = 3;
var injection = true;
var favorite = ['산책, 간식'];
var bark = () => console.log('왈왈');

//우리 집 강아지 정보 저장 (배열로 저장)
var dog = [
  '뽀삐', 
  '진돗개', 
  3, 
  true,
  ['산책, 간식'],
  () => console.log('왈왈'), 
]

console.log(dog[0]);
console.log(dog[4]);

//우리 집 강아지 정보 저장 (객체로 저장)
var dog = {
  name: '뽀삐',
  kind: '진돗개',
  injection: true,
  favorite: ['산책', '간식', '꼬리흔들기'], 
  bark: () => console.log('왈왈'), 
}

console.log(dog.name);
console.log(dog.favorite);

//우리 집 고양이 정보 저장
var cat = {
  name: '콩순이',
  kind: '코숏',
  age: 2,
  injection: true,
  favorite: ['낮잠', '방 어지르기'], 
  bark: () => console.log('야옹'), 
  hate: 33,
  //키는 띄어쓰기없는 문자로만 사용, 정 사용하고싶다면 '키,특문,띄어쓰기' 형식으로 사용
  //값은 숫자, 문자, 논리, 배열, null, 객체 등.. 다 들어갈 수 있다.
}

console.log(dog.name);
console.log(cat.name);

//게시판글 정보 저장
var 게시판글 = {
  글번호: 11,
  작성자: {
    계정명: 'abc',
    닉네임: '깜찍이',
    가입일자: '2023-12-12'
  }, 
  글내용: 'ㄴㅁ호호소',
  작성일자: '2024-03-26'
}

//객체에 저장된 데이터 참조(조회)
console.log(cat.age);
console.log(dog.injection);
console.log(cat.favorite[1]);//고양이의 2번째취미 조회

//데이터타입: 어떤 데이터가 할 수 있는 일을 정의
dog.age++ //age는 숫자타입이기때문에 ++가능
!dog.injection //injection은 논리타입이기때문에 ! 가능
dog.favorite.push('꼬리흔들기'); //favorite은 배열타입이기때문에 push가능
cat.favorite.splice(0, 1);

dog.favorite.splice(1,1);
dog.favorite.reverse();
//배열의 사본에 작업을 하면 원본은 유지됨
console.log(dog.favorite);

//객체를 참조하는 두번째 방법
console.log('====================');

var key = 'name';
console.log(dog.name);
//위의 방법이 안 될 경우 아래방법으로
console.log(dog['name']);//뽀삐, 동일
//dog의 객체를 조회할 때 문자열은 대괄호 안에 키를 따옴표로 감싸야 하지만
console.log(dog[key]);//뽀삐, 동일
//변수 키를 만들고 그 변수값을 넣어줄 땐 대괄호로만 감싸도 됨

//프로퍼티 수정 (기존에 있는 key로 접근)
console.log('====================');
dog.age = 4;
cat.favorite[1] = '실뭉치';

console.log(dog);
console.log(cat);

//프로퍼티 동적 추가 (기존에 없는 key로 접근)
//개발시 없다가 공개되고 추가하는것
console.log('====================');
cat.friend = '철수';

console.log(cat);


//프로퍼티 삭제
console.log('====================');
delete cat.hate;
delete cat.friend;

console.log(cat);

//객체 프로퍼티 유무 확인
//phone에 새로운 프로퍼티 추가하고 싶음
/*추가하고싶은데 다른 사람이 먼저작성해놓았으면 추가가아닌 수정이되기때문에
작성된 게 있는지 확인하고 없을때 추가*/
console.log('====================');
console.log('memory' in phone);

var newkey = 'memory';
if (!('newkey' in phone)) {
  phone[newkey] = '32GB';
}



