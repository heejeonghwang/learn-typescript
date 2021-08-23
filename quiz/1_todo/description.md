## 첫번째 프로젝트 - 프로젝트 구성 파일 소개 (NPM, ESLint, TS)

    - tsconfig.json에서 compilerOptions는 타입스크립트에서 자바스크립트로 변환할때 어떤식으로 세부사항을 지정하는지 적혀있는 부분

    - tsconfig.json에서 
      noImplicitAny값을 true로 바꾸면 index.ts에서 빨간줄 에러가 뜨게됨.

      이 빨간색 에러는 타입스크립트에서 자바스크립트로 변환할 때 에러가 남아있으면 컴파일(변환)이 되지 않습니다.
      따라서 이런 부분에 있어서는 전부다 타이핑 작업을 해줘야함
      (타이핑 typing) : 타입이 정의되지않은 코드에 타입을 입혀주는 행위)

    
    - package.json을 보면 eslint 이런식으로 적혀있는데
      eslint라고 하는 것들이 타입스크립트 문법을 보조하고있다.    
      eslint설정파일에 룰이 있는데 그 룰에 안맞는것들은 경고야, 에러야 이렇게 표현됨
      (설정파일은 .eslintrc.js)

## 첫번째 프로젝트 - 실습 방법 안내 및 any, void 소개

    - any 
    (let todoItems: any)
    any로 타입을 설정하면 모든 타입을 다 통칭해서 any라고 보면됨

    ***꿀팁Tip) 처음에 타입스크립트 입히실때 모든 변수타입들을 any로 지정해두고 구체적으로 하나하나씩 특정 타입들로 지정해 나가는게 좋다.

    "noImplicitAny": true <-- true이면 타입을 any라도 일단 붙혀라

    - void
    반환값이 없다는 뜻 
    (function addTodo(todo): any {})

## 첫번째 프로젝트 - 변수, 함수 타입