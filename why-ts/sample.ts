// :을 통해 타입 정의
function add(a: number, b: number): number {
  return a + b;
}

/* 타입스크립트는 타입을 정의해주면 그 타입과 맞지 않는 타입을 넣을경우
    빨간표시가 뜬다.
*/

var result = add(10, "20");

//반환값까지 타입을 지정해주면 result. 점을 눌렀을때 반환타입의 api함수까지 보여줌
result.toLocaleString();
