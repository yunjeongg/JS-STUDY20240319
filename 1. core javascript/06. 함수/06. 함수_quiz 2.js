/*
1. 키(cm)와 몸무게(kg)을 인수로 전달받아 
2. bmi지수를 계산하여 반환함과 동시에 
3. bmi가 25.0이상이면 "당신은 과체중입니다." 
  18.5이하면 "당신은 저체중입니다." 
  나머지는 "당신은 정상체중입니다."를 출력하는 
  CalcBMI라는 함수를 정의하고 호출하세요. 
# bmi 계산식 : 몸무게(kg) / (키(m) * 키(m)) 
# 출력 예시: 
"키 -> 178.4cm, 체중-> 78.2kg의 체질량지수는: 24.57입니다"

Math.round(5.99999); //반올림 6
*/


/*선생님 정답
// bmi판별해서 체중상태를 출력하는 함수
function judgeWeight(bmi) {
  var level; 
  if (bmi >= 25.0) {
    level = '과';
  } else if (bmi <= 18.5) {
    level = '저';
  } else {
    level = '정상';
  }
  console.log(`당신은 ${level}체중입니다.`);
}

function calcBMI(cm, kg) {
  var m = cm / 100;
  var bmi = kg / (m * m);

  judgeWeight(bmi);
  
  return bmi;
}

// 어떤 숫자를 자릿수만큼 반올림하는 함수
/*
  Math.round()
  ex)  5.78889327428734 -> 6
       34.12314234523   -> 34

  5.78786455435
  x 100 =>   578.7864...
  반올림 =>  579
  / 100 =>   5.79

function round(number, position) {
  return Math.round(number * 100) / 100;

*/


/*
var h = 178.4, w = 78.2;
var myBmi = calcBMI(h, w);

console.log(`키 -> ${h}cm, 체중 -> ${w}kg의 체질량지수는 ${round(myBmi, 3)}입니다.`);
*/



//var h = 178.4, w = 78.2;
//var myBmi = calcBMI(h, w);
var Bmi = 0;
function calcBMI(h, w) {
  Bmi = `${w / (h * h/10000)}`;
  if (Bmi >= 25) {
    console.log('과체중')
  } else if (Bmi <= 18.5) {
    console.log('저체중')
  } else {
    console.log('정상체중')
  }
  console.log(`키 -> ${h}cm, 체중 -> ${w}kg의 체질량지수는 ${Math.round(Bmi, 2)}입니다.`);
  return;
}
calcBMI(178.4, 78.2);

//console.log(`키 -> ${h}cm, 체중 -> ${w}kg의 체질량지수는 ${round(myBmi, 2)}입니다.`);