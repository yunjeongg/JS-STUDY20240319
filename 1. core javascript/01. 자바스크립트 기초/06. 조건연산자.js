var money = 3000;

//조건지가 적을경우 조건연산자 쓰는게 좋다.
//1.
var food = (money >= 8000) ? '돈까스' : '라면';
//1-1.
var food;
if (money > 8000) {
  food = '돈까스';
} else {
  food = '라면';
}

console.log(`선택한 음식: ${food}`);

// 조건지가 많을 경우 if문 길게쓰는게 가독성이 좋다.
//2.
var food = (money >= 8000) ? '돈까스' 
: (money >= 5000) ? '쫄면' 
: (money >= 3000) ? '라면' : '굶어';
//2-2.
var food;
if (money >= 8000) {
  food = '돈까스';
} else if (money >= 5000) {
  food = '쫄면';
} else if (money >= 3000) {
  food = '라면';
} else {
  food = '굶어';
}