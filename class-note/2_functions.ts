// 함수의 파라미터에 타입을 정의하는 방식
function sum_ts(a: number, b: number) {
  return a + b;
}

sum_ts(10, 20);

// 함수의 반환 값에 타입을 정의하는 방식
function add(): number {
  return 10;
}

// 함수에 타입을 정의하는 방식
function sum(a: number, b: number): number {
  return a + b;
}

// ## 함수 타입 - 파라미터를 제한하는 특성
sum(10, 20, 30, 40); //2개만 필요한데 4개를 넣어서 오류
sum(10); //인자가 적어도 오류  (파라미터 타입의 갯수에 맞게 넣어야함)

// ## 함수 타입 - 옵셔널 파라미터 (필요에 따라서 선택적으로 하나만 넣을 수 있게 물음표?를 사용하여 옵셔널 파라미터 설정 가능)
function log(a: string, b?: string) {
  // 인자의 첫번째는 필수고, 두번째는 옵션으로 넣어도 되고 안넣어도 되는 표시인 물음표?를 넣어준다
}
log("hello world");
log("hello world", "abc");
