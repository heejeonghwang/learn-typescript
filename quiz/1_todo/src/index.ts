/**원래소스코드 */

// type Todo = {
//   id: number;
//   title: string;
//   done: boolean;
// };

interface Todo {
  id: number;
  title: string;
  done: boolean;
}

// let todoItems: object[];
// let todoItems: {id: number; title: string; done: boolean}[];// a1
let todoItems: Todo[];// a1



// api
function fetchTodoItems(): Todo[] {
  const todos = [
    { id: 1, title: '안녕', done: false },
    { id: 2, title: '타입', done: false },
    { id: 3, title: '스크립트', done: false },
  ];
  return todos;
}

// crud methods
function fetchTodos(): Todo[] {
  const todos = fetchTodoItems();
  return todos;
}

function addTodo(todo: Todo): void {
  // function addTodo(todo: object): void {
  todoItems.push(todo);// todoItems를 a1처럼 객체안의 타입까지 정의하게되면 "todo: obejct" 이렇게 뭉뚱그려 정의하지말고 구체적으로 정의해줘야함 
}

function deleteTodo(index: number): void {
  todoItems.splice(index, 1);
}

// todo라고하는 파라미터 타입을 object가 아니라 {id: number; title: string; done: boolean} 이렇게 정의하면 done에대한 빨간줄 에러가 없어지게됨.
function completeTodo(index: number, todo: Todo): void {
  todo.done = true;
  todoItems.splice(index, 1, todo);
}

// business logic
function logFirstTodo(): object {
  return todoItems[0];
}

function showCompleted(): object[] {
  return todoItems.filter(item => item.done);
}

/**
 * filter 예제
 * 
 let arr = [
   { gender: 'male', name: 'john' },
   { gender: 'female', name: 'sarah' },
   { gender: 'male', name: 'bone' }
 ];

 let filtered = arr.filter(function (item) {
   if (item.gender === 'female') {
     return item;
   }
 });

 console.log(filtered);

 node a.js 실행하면 console.log로 인해 필터링된 값이 찍힘
 */

// TODO: 아래 함수의 내용을 채워보세요. 아래 함수는 `addTodo()` 함수를 이용하여 2개의 새 할 일을 추가하는 함수입니다.
function addTwoTodoItems(): void {
  // addTodo() 함수를 두 번 호출하여 todoItems에 새 할 일이 2개 추가되어야 합니다.
  const item1 = {
    id: 4, 
    title: '아이템4', 
    done: false
  };
  addTodo(item1);

  addTodo({
    id: 5,
    title: '아이템5',
    done: false
  });// 두번 호출
}

// NOTE: 유틸 함수
function log(): void {
  console.log(todoItems);
}

todoItems = fetchTodoItems();
addTwoTodoItems();
log();
