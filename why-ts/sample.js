// 자바스크립트에 타입이 있을 때의 두번째 장점
function sum(a, b) {
  return a + b;
}

/* 자바스크립트에서는 미리 에러를 잡을 수 없으며 
    인자가 둘다 number로 와야하는데 
    이렇게  되면 1020 결과값이 도출된다.
 */

sum(10, "20");

// 자바스크립트를 타입스크립트처럼 코딩하는 방법 : jsdoc 이용

// @ts-check

/**
 *
 * @param {number} a 첫번째 숫자
 * @param {number} b 두번째 숫자
 */
function sum2(a, b) {
  return a + b;
}

sum2(10, "20");
