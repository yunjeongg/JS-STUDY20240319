var count = 0;
for (var i = 0; i < 3; i++) { //3회반복
  for (var j = 0; j < 2; j++) { //2회반복
    console.log('메롱'+ ++count); //메롱 총 6회 반복
    console.log(`${i}, ${j}`); //++가 앞에있으면 +1하고 붙이고 뒤에붙으면 붙고 +1
} console.log('냠냠' + count); //3회반복
}

// 구구단 2단
var level = 2; // 단수

console.log(`# 구구단 ${level}단`);
for (var line = 1; line <= 9; line++) {
  console.log(`-> ${level} x ${line} = ${level * line}`);
}

// 구구단 2단-9단
for (var level = 2; level <=9; level++) { // 단수
  console.log(`# 구구단 ${level}단`);
for (var line = 1; line <= 9; line++) {
  console.log(`-> ${level} x ${line} = ${level * line}`);
}
}


