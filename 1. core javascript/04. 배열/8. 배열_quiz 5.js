/*
- Quiz. 
아래 요구사항에 맞는 코드를 작성하고 
브라우저에서 실행하여 테스트하세요.
- 요구사항
1. 변수에 배열 ['유노윤호', '최강창민', '영웅재중', '믹키유천', '시아준수']을 저장하세요.   
2. 메뉴를 선택하세요 를 추가하세요
    3-1.새로운 이름 추가
    4-1.기존 이름 삭제
    5-1.프로그램 종료
3-2. 추가할 새로운 멤버의 이름을 입력하고 배열에 없는 이름을 입력하면 'xxx는 잘못된 이름입니다.'라고 출력한 후 
   다시 수정할 이름을 입력할 수 있도록 하세요. 'xxx 이/가 추가되었습니다.' 표시하세요
4-2. 삭제할 새로운 멤버의 이름을 입력하고 한 명의 멤버를 정확하게 수정할때까지 프로그램은 계속되어야 합니다.
5-2. 프로그램을 종료하세요.
*/
var tvxq = ["유노윤호", "최강창민", "영웅재중", "믹키유천", "시아준수"];

while (true) {
  var menu = +prompt(`현재멤버: [${tvxq}]
                     \n메뉴를 선택하세요.
                     \n1. 새로운 이름 추가
                     \n2.기존 이름 삭제
                     \n3.프로그램 종료`);
  if (menu === 1) {
    var selectM = prompt(`현재멤버: [${tvxq}]\n추가할 멤버의 이름을 입력하세요`);
    tvxq.push(selectM);
    alert(`${selectM}이/가 추가되었습니다.\n현재멤버: [${tvxq}]`);
  } else if (menu === 2) {
    var deleteM = prompt(`현재멤버: [${tvxq}]\n삭제할 멤버의 이름을 입력하세요`);
    if (tvxq.includes(deleteM)) {
      tvxq.splice(tvxq.indexOf(deleteM), 1);
      alert(`${deleteM}이/가 삭제되었습니다.\n현재멤버: [${tvxq}]`);
    } else {
      alert(`${deleteM}은/는 잘못된 이름입니다.\n정확한이름을입력해주세요\n현재멤버${tvxq}`);
    }
  } else if (menu === 3) {
    alert(`프로그램을 종료합니다`);
    break;
  } else {
    alert("1, 2, 3중 하나를 선택해주세요");
  }
}

/*
var tvxq = ["유노윤호", "최강창민", "영웅재중", "믹키유천", "시아준수"];
while (true) {
  var oldName = prompt(`현재멤버는 [${tvxq}]입니다. \n수정할 멤버의 이름을 입력하세요.`);
  if (tvxq.includes(oldName)) {
    var newName = prompt("새로운 이름을 입력하세요.");
    tvxq.splice(tvxq.indexOf(oldName), 1, newName);
    alert (`수정완료!\n현재멤버: [${tvxq}]`);
    break;
  } else {
    alert(`${oldName} 은/는 잘못된 이름입니다. \n정확한 이름을 입력해주세요`);
  }
}
*/
