/*  ## 기본타입 - 문자열, 숫자, 배열 */

// JS 문자열 선언
var str_js = "hello";

// TS 문자열 선언
let str: string = "hello";

// TS 숫자
let num: number = 10;

// TS 배열
let arr: Array<number> = [1, 2, 3];
let heroes: Array<string> = ["Capt", "Thor0", "Hulk", 10]; // 10에 빨간줄이 표시된다 배열의 string타입만 허용하기 때문 (이건 TSLint 기능)
let items: number[] = [1, 2, 3];

/*  ## 기본타입 - 튜플, 객체, 진위값 */

// TS 튜플 (배열의 각각 인덱스 순서의 타입까지 정의하는 것이 튜플)
// 튜플 : 모든 인덱스에 타입이 정의되어있는 배열
let address_ts: [string, number] = ["gangnam", 100];

// TS 객체
let obj: object = {};
let person1: object = {
  name: "capt",
  age: 100,
};
// 객체의 구체적인 정의
let person2: { name: string; age: number } = {
  name: "thor",
  age: 1000,
};

// TS 진위값 true, false
let show: boolean = true;
