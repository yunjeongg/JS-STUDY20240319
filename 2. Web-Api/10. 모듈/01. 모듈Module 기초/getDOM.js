//export 파일을 밖으로 내보내기
//1번방식
//export const $btn = document.getElementById ('btn');
//export const $pTEXT = document.querySelector('.text');

//2번방식
const $btn = document.getElementById ('btn');
const $pTEXT = document.querySelector('.text');

export {$btn, $pTEXT};