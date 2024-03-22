//조건문 안에 조건문을 만들어 중첩if문을 만들어보자

var UserName = prompt ('이름이 뭐야?');
var UserHeight = +prompt ('키가 얼마나 크니?');

if (UserHeight >= 140) {
  var UserAge = +prompt ('몇살이야?');
  if (UserAge >= 8) {
    alert(`${UserName}는 놀이기구에 탑승할 수 있어 !`);
  } else {
    alert(`${UserName}는 나이제한으로 놀이기구에 탑승할 수 없어 !`);
  }  
} else {
  alert(`${UserName}는 신장미달로 놀이기구에 탑승할 수 없어 !`);
}

alert("오늘 하루 즐거운 시간 보내 !");