const employee = {
  empName: '뽀로로',
  age: 10,
  hireDate: '2020-01-30',
  birthDate: '2015-12-31'
}

//변수에 일일이 저장해서 쓸 수도 있지만
const name = employee.empName;
const hire = employee.hireDate;

const {empName, hireDate} = employee;
//        넣고싶은 키        객체이름
console.log(`name: ${empName}, hire: ${hireDate}`);

function foo(empName, age) {
  //const { empName, age } = employee;
  console.log(`내 이름은 ${empName}입니다.`);
  console.log(`나이는 ${age}입니다.`);
}

const age = 10;
const { age: empAge, birthDate } = employee;
//만일 변수 age가 이미 있는상황이라면 age의 이름을 empAge로 바꿔줄 수 있다.

console.log(empAge);


const divStyle = {
  'font-size': '18px',
  'background-color': 'red'
};
const {'font-size':fontSize, 'background-color': bgColor } = divStyle;

console.log(fontSize);
console.log(bgColor);


//키를 추출하고 남은 나머지를 객체로 묶고싶다
const dog = {
  kind: '말티즈',
  name: '해피',
  age: 3,
  injection: false
};

const {kind, age: petAge, ...rest} = dog;

console.log(kind);
console.log(petAge);
console.log(rest);


//객체안전복사
//객체도 마찬가지로 원본이 손상되기때문에 복사 후 적용해야한다.
const copyDog = { ...dog};
copyDog.age = 10;
const copyDog2 = {
  ...dog, 
  age: 20,
  favorite: ['산책']
};

console.log(dog);
console.log(copyDog);
console.log(copyDog2);
