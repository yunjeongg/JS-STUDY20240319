var t = true, f = false;

//and연산 :논리곱 - &&
//ex) 로그인 시 아이디와 비밀번호 확인
console.log(t && t); // t, 아이디와 비밀번호 둘 다 일치
console.log(t && f); // f, 아이디만일치, 비밀번호 틀림
console.log(f && t); // f 아이디 틀림, 비밀번호일치
console.log(f && f); // f 아이디 비밀번호 둘 다 트림

//or연산 :논리합 - ||
//ex) 채용면접에서 성격과 학점중 하나만 좋아도 합격
console.log(t || t); // t, 성격과 학점 둘 다 좋음
console.log(t || f); // t, 성격만 좋음, 학점은 낮음
console.log(f || t); // t 성격은 개판, 학점은 좋음
console.log(f || f); // f 성격과 학점 둘 다 개판

//not연산 :논리반전 - !
//~가 아니다, not, 보통 if문에서 쓰임
console.log(!t); //f, not true

var money = 1000;
if (!money) {
  console.log('나는 거지야');
} else {
  console.log('나는 돈이 있어!');
}
