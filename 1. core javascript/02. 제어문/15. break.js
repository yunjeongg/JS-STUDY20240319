
for (var i = 1; i <= 50; i++) {
  console.log(i);
  if (i > 10) {
    break;
  }
  // break를 만나면 반복문은 바로 끝남
  //보통은 반복문이 아닌 조건문(만약~하면끝내라)에 사용
}

for (var i = 0; i < 3; i++) {
  for (var j = 0; j < 2; j++) {
    if (i === j) {
      break;
    }
    console.log(`${i}, ${j}`);
  }
}