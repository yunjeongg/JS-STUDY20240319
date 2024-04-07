
import { $btn as $button } from "./getDOM.js"; //불러온 변수
//충돌났을 경우 내 것을 고치는 것보다 불러온 변수의 이름을 재명명
import { clickHandler } from "./event.js";
//import { pow } from "./pow.js";
import hahahoho from "./pow.js" // export default로 가져왔을 경우 중괄호 없이 이름변경가능

const pow = () => {}; // 내 pow

const $btn = '123'; //내가 만든 변수

console.log(`btn: ${$btn}`);
console.log(`불러온 btn:`, $button);
console.log(pow(5));
console.log(hahahoho.pow(5)); // pow.js의pow
console.log(hahahoho.add(3, 6)); //pow.js의add
pow(); //내 pow는 그냥불러도됨


//event.js 에서 만든 이벤트 핸들러 등록
$button.addEventListener('click', clickHandler);