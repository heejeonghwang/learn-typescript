interface User {
    age: number;
    name: string;
}

// 변수에 활용한 인터페이스
// seho라는 변수는 User라는 인터페이스 타입을 선언한 형태.
var seho: User = {
    age: 33,
    name: '세호'
}

/* 함수에 인터페이스 활용 */
//파라미터에 user: User 라고 하면 이 함수는 항상 정해진 형식만 파라미터로 받겠다는 뜻
function getUser(user: User) {
    console.log(user);
}

const capt = {
    name: '캡틴'
}
//getUser(capt); // capt이라고 하는 변수는 객체에 name이라는 속성밖에 없기때문에 User의 인터페이스와는 맞지않다. 그래서 에러발생

const capt_2 = {
    name: '캡틴',
    age: 100
}
getUser(capt_2);

/* 함수의 스펙(구조)에 인터페이스를 활용 */
interface SumFunction {
    (a: number, b: number): number; 
}

var sum: SumFunction;
sum = function(a: number, b: number): number {
    return a + b;
}

/* 인덱싱 방식을 정의하는 인터페이스 */
interface StringArray {
    [index: number]: string;
}

var arr: StringArray = ['a', 'b', 'c'];
//arr[0] = 10; //string이여야 하므로 10이라고하면 틀림

/* 인터페이스 딕셔너리 패턴 */
interface StringRegexDictionary {
    [key: string]: RegExp;// 정규표현식
}

var obj: StringRegexDictionary = {
    // sth: /abc/,
    cssFile: /\.css$/,
    jsFile: /\.js$/
}
obj['cssFile'] = 'a'// RegExp형식으로 되어야하는데 'a' string 형식으로 부여했기때문에 오류남 (인터페이스 형식에 맞지않다.)
obj['a'] = /\.js$/

Object.keys(obj).forEach(function (value) {

})

/* 인터페이스 확장(상속) */
interface Person {
    name: string;
    age: number;
}

interface Developer extends Person {
    language: string;
}

var captain: Developer = {
    language: 'ts',
    age: 100,
    name: '캡틴'
}