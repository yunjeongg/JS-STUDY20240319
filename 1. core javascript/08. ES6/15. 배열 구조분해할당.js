const userName = ['김철수', '강감찬', '박영희'];

//userName에서 각각의 요소들을 다시 변수에 집어넣고 싶을때
const kimm = userName[0];
const kangg = userName[1];
const parkk = userName[2];
// 일일이 빼줄수도 있지만
console.log(`a: ${kimm}, b: ${kangg}, c: ${parkk}`);

const [kim, kang, park] = userName;
//인덱스0번, 1번,  2번      배열
//배열에서 인덱스 0, 1, 2번값을 각각 const kim, kang, park에 넣는다.   

const [kk, ,pp] = userName; //중간에 넣고싶지않은게 있다면 생략
console.log (`kk: ${kk}, pp: ${pp}`);

//const example = ['', [], ()=>{}];


let first = 10, second = 20;
//두 수의 위치를 바꿔주고싶을때
[first, second] = [second, first];
console.log(`first: ${first}, second: ${second}`);


//배열 안에서 맨 앞에 2개만 각각의 변수에 저장하고
//나머지는 다시 배열로 묶고싶다.
const numbers = [1, 3, 5, 7, 9, 11, 13];
const numsCopy = numbers.slice();

const onee = numbers.shift();
const threee = numbers.shift();
//이런식으로 일일이 뽑아낼 수도있으나
//이 경우 원본이 손상되어 사본을 만들고 적용해야한다.
console.log(`onee: ${onee}, numbers: ${numbers}`);

const [one, three, ...numsCopys] = numbers; //...나머지, numsCopy의 나머지
console.log(`one: ${one}, numbers: ${numbers}`);


// 스프레드를 통한 배열 간편 복사
const foods = ['감튀', '햄버거', '콜라'];
//const copyFoods = foods.slice(); //복사방법 1
//const copyFoods = foods.map(f => f); //복사방법 2

const copyFoods = [...foods] //복사방법 3, 오늘배운것

foods[0] = '치킨너겟';
copyFoods.push('밀크쉐이크')

console.log('foods:', foods);
console.log('copyFoods:', copyFoods);

console.log('==============');
//a.concat(b) => [...a, ...b] //배열2개합치기 
const newFoods = ['육포', ...foods, '닭다리', ...userName]; //복사와 동시에 추가도 가능
console.log(newFoods);
