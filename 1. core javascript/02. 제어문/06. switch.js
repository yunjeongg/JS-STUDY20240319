var season = prompt('선호하는 계절을 입력하세요!');

//가로 안에는 조건을 판별할 변수 (비교식x, 문자값이나 숫자값만 써야함)
switch (season) {

  case '봄' : case 'spring' :
    //케이스는 나열하는 것으로 추가가 됨 ,등 필요없음
    alert ('봄에는 여의도나 가요');
    break;
    //break;을 넣으면 코드가 밑으로 흘러내려가지 않음
  case '여름' : case 'summer' :
    alert ('여름에는 낙산해수욕장 가요');
    break;
  case '가을' : case 'fall' :
    alert ('가을에는 설악산 가요');
    break;
  case '겨울' : case 'winter' :
    alert ('겨울에는 홍천해수욕장 가요');
    break;

  default:
    alert ('봄, 여름, 가을, 겨울 중 하나를 입력하세요!');
  //default - else if 에서 else 같은 효과를 준다
}

/* if문을 작성했다면 조건에맞을때까지 계속 반복하겠지만
switch문을 썼다면 조건을 판별할 변수의 값으로 뛰어넘어 바로 그 조건으로 간다*/
/* switch문은 다 if문으로 바꿀 수 있지만
if문을 다 switch로 바꿀 수 있는 것은 아니다.*/


