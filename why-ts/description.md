## 타입스크립트 소개와 배경

## 타입스크립트란?

    - 타입이 입혀진 자바스크립트
    - 타입스크립트 공식문서 : https://www.typescriptlang.org/

## 왜 타입스크립트를 쓰면 좋은가요?

    - HTTP요청 라이브러리 axios : https://github.com/axios/axios
    - Promise 소개글 : https://joshua1988.github.io/web-development/javascript/promise-for-beginners/
    - JSONPlaceHolder 사이트 : https://jsonplaceholder.typicode.com/

## 자바스크립트에 타입이 있을 때의 첫 번째 장점

    -- app_jsdoc.js

    - 에러를 사전에 방지할 수 있다.
    코드를 작성하다 보면 오타가 날 수 있는데
    타입스크립트는 브라우저로 넘어가서 실행하고 확인하기 전에
    코드상으로 확인 할 수 있다.

    - jsdoc 문서
    https://devdocs.io/jsdoc/

## 자바스크립트에 타입이 있을 때의 두번째 장점

    -- sample.js, sample.ts

    - 코드 가이드 및 자동 완성으로 인해 개발 생산성이 향상 됩니다.
    타입을 설정해 주고 변수 .을 하면 해당 타입에 제공되는 api함수들이 자동완성으로 보이게됨.

    - Intellisense 문서 : https://code.visualstudio.com/docs/editor/intellisense

## 자바스크립트를 타입스크립트처럼 코딩하는 방법

    --sample.js

    - 자바스크립트에서 타입을 쓴 것 같은 효과를 내는법 : jsdoc 이용
    "@ts-check"를 이용하면 타입스크립트를 쓴 것 처럼 에러표시해줌
