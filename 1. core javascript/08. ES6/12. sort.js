// 배열데이터 정렬하기
const nums = [6, 11, 3, 7, 100,  9, 10, 27, 2, 4, 1];
console.log(nums);

nums.sort();
console.log(nums);
// 정렬 기준을 정해줘야하고, 그 기준이 없으면 아스키코드로 정렬한다.


nums.sort((a, b) => a-b); // 오름차순
// a-b를 했을 때,
// 양수가나오면 앞이크고, 음수가나오면 뒤가크고, 0이나오면 똑같은수
console.log(nums);


nums.reverse(); // 내림차순, 이건 오름차순 구한 후 사용했을 경우
console.log(nums);

nums.sort((a, b) => b-a);// 내림차순
console.log(nums);





const userList = [
  {
    account: 'abc1234',
    userName: '대길이',
    job: '추노',
    address: '서울',
    hobbys: ['수영', '축구', '테니스'],
    salary: 5400000,
    age: 35,
  },
  {
    account: 'banana',
    userName: '빠나나',
    job: '과일',
    address: '서울',
    hobbys: ['푸드파이팅', '테니스'],
    salary: 9700000,
    age: 18,
  },
  {
    account: 'park1234',
    userName: '주차왕',
    job: '발렛파킹',
    address: '경기',
    hobbys: ['족구', '축구', '테니스', '영화감상'],
    salary: 3900000,
    age: 56,
  },
  {
    account: 'fire',
    userName: '불꽃남자카리스마',
    job: '게이머',
    address: '서울',
    hobbys: ['독서', '테니스'],
    salary: 7900000,
    age: 42,
  },
];

console.log('==================');
userList.sort((a, b) => a.age - b.age); //나이 오름차순
console.log(userList);

console.log('==================');
userList.sort((a, b) => b.salary - a.salary); //급여 내림차순
console.log(userList);


console.log('==================');
userList.sort((a, b) => { // 이름 가나다 오름차순
if (a.userName > b.userName) return 1;
else if (a.userName < b.userName) return -1;
else return 0;
});
console.log(userList);
