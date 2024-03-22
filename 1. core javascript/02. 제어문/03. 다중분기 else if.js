
var age = 16;

if (age > 20) {
  console.log("성인입니다.");
} else {
  console.log("미성년자입니다.");
}

//미성년자도 초딩, 중딩, 고딩을 나누고싶다
/*조건은 위에서부터 아래대로 순차적으로 가는 것이기 때문에
상위조건이 하위조건을 포함하면 안됨 
ex) 12이상, 17이상 (x) / 17이상, 12이상 */
if (age > 20) {
  console.log("성인입니다.");
} else if (age > 17) {
  console.log("고딩입니다.");
} else if (age > 14) {
  console.log("중딩입니다.");
} else if (age > 8) {
  console.log("초딩입니다.");
} else {
  console.log("아동입니다.");
}

//미성년자도 초딩, 중딩, 고딩을 나누고싶다
/* if, elseif, else 까지 한 묶음이고
else if를 사용 안하고 그자리에 if를 더 넣으면 묶음을 하나 더 생성하는것이므로
따로따로 작성한다 
아래의 경우 4묶음이므로 4번 반복*/ 
if (age > 20) {
  console.log("성인입니다.");
} if (age > 17) {
  le.log("고딩입니다.");
} if (age > 14) {
  le.log("중딩입니다.");
} if (age > 8) {
  console.log("초딩입니다.");
} else {
  console.log("아동입니다.");
}
