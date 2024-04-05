//getDOM.js에서 $p.Text를 가져오기
import { $pTEXT, $btn } from './getDOM.js' // "./" 생략하지 말기 

console.log($pTEXT);
console.log($btn);
//이벤트 핸들러 함수
export const clickHandler = e => {
  
  $pTEXT.textContent = '안뇽?';
}