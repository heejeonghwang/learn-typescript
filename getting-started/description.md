## 타입스크립트 시작하기

## 타입스크립트 프로젝트 시작하는 방법 (라이브러리 설치와 TSC)

    -- index.ts, index.js

    - .ts확장자는 타입스크립트를 의미함.
    - ts파일은 브라우저가 바로 실행시킬 수 없다.
    브라우저가 타입스크립트 파일을 인식하지 못함
    따라서, ts파일을 브라우저가 인식할 수 있는 형태의 자바스크립트 파일로 변환시켜줘야함 -> 이게 컴파일(compile)
    - 컴파일(compile): ts파일을 js파일로 변환하는 작업


    - getting-started 폴더 우클릭 -> 터미널 열기
    "노드 기반으로 자바스크립트 라이브러리 설치"
    > node -v (//노드가 설치되어있어야하기 때문에 노드버전 확인)
    > npm i typescript -g
    (// tsc라는 타입스크립트 컴파일 명령어를 실행하기위해서 typescript 라이브러리를 로컬시스템레벨에(-g) 설치함)
    > tsc index.ts
    (// index.ts파일을 js파일로 컴파일 변환하겠다
    실행하면 index.ts 옆에 index.js가 생성이됨
    //만약 보안오류 에러나면 터미널을 관리자 권한으로 실행할것)

    - NPM무료강의 : https://www.inflearn.com/course/%ED%94%84%EB%9F%B0%ED%8A%B8%EC%97%94%EB%93%9C-%EC%9B%B9%ED%8C%A9/lecture/37370?tab=curriculum
    - NPM소개문서 : https://joshua1988.github.io/webpack-guide/build/node-npm.html#npm
    - npm i typescript -g 명령어 의미 : https://joshua1988.github.io/webpack-guide/build/npm-module-install.html#npm-%EC%A0%84%EC%97%AD-%EC%84%A4%EC%B9%98

## 타입스크립트 설정 파일

    - 매번 tsc로 컴파일 하기 힘듦.
    webpack 번들러... 등등 웹 자동화 도구를 이용해서 반복적인 명령어들을 자동화 할 수 있음

    - tsconfig.json
    tsc로 타입스크립트 컴파일 할 때 부가적인 옵션들을 정의할 수 있는데
    옵션들을 정의할 수 있는 파일은 "tsconfig.json"이며 key value형태로 작성한다.

    - tsconfig 레퍼런스 : https://www.typescriptlang.org/docs/handbook/compiler-options.html
    - webpack 핸드북 : https://joshua1988.github.io/webpack-guide/guide.html

## 타입스크립트 플레이그라운드 사이트 소개

    - 인터넷으로 ts파일 코딩하고 tsc결과물(js파일)을 바로 볼 수 있는 사이트

    - 플레이그라운드 사이트 : https://www.typescriptlang.org/play
    - 바벨 사이트 : https://babeljs.io/
    바벨Babel: 자바스크립트 최신 문법을 최대한 많은 브라우저가 호환할 수 있게 변환해주는 도구
