var pets = ['멍멍이', '야옹이', '쩝쩝이'];

console.log(pets);

pets[3] = '징징이';

console.log(pets);

//push(): 배열의 맨 끝에 데이터 추가
pets.push('집게사장');
pets.push('어흥이', '거부긔', '닭둘긔');

console.log(pets);

//pop(): 배열의 맨 끝 데이터 삭제
pets.pop();
var myPet1 = pets.pop();
var myPet2 = pets.pop();

console.log(pets);
console.log(myPet1);
console.log(myPet2);

//shift(): 배열의 맨 첫 데이터 삭제
pets.shift();
pets.shift();

console.log(pets);

//unshift(): 배열의 맨 첫 데이터 추가
pets.unshift('뽈뽈이');
pets.unshift('다람이', '불가리');

console.log(pets);
