
// 객체의 설계도 class

class Pet {
  // 생성자를 통해 필드를 선언한다.
  constructor (name, age) {
    this.name = name;
    this.age = age;
  }

  // 메소드 선언하기
  introduce () {
    console.log(`내 이름은 ${this.name}이고, 나이는 ${this.age}살 입니다.`);
  }
}

// 상속하기
class Dog extends Pet () {
  constructor(name, age, hobby) {
    super(name, age);
    this.hobby = hobby;
  }
}

class Cat extends Pet () {
  constructor(name, age, sleep) {
    super(name, age);
    this.sleep = sleep;
  }
}

// 오버라이드


// 객체 생성
const dog = new Pet('초코', 3); 
console.log(dog);

const cat = new Pet('야옹', 10);
console.log(cat);

console.log(dog === cat); // dog 객체와 cat 객체는 서로 다른 객체이다.
dog.introduce();

const dog2 = new Dog('초코', 3, '산책가기');
console.log(dog2);
const cat2 = new Cat('야옹', 10, '쿨쿨');
console.log(cat2);


