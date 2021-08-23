/**내가 직접풀어본 실습문제 */

let todoItems2: Array<object>;

// api
function fetchTodoItems2(): Array<object> {
  const todos: Array<object> = [
    { id: 1, title: '안녕', done: false },
    { id: 2, title: '타입', done: false },
    { id: 3, title: '스크립트', done: false },
  ];
  return todos;
}

// crud methods
function fetchTodos2(): any {
  const todos = fetchTodoItems2();
  return todos;
}

function addTodo2(todo: object): void {
  todoItems2.push(todo);
}

function deleteTodo2(index: number): void {
  todoItems2.splice(index, 1);
}

function completeTodo2(index: number, todo: object): void {
  todo.done = true;
  todoItems2.splice(index, 1, todo);
}

// business logic
function logFirstTodo2(): Array<object> {
  return todoItems2[0];
}

function showCompleted2(): Array<object> {
  return todoItems2.filter(item => item.done);
}

// TODO: 아래 함수의 내용을 채워보세요. 아래 함수는 `addTodo()` 함수를 이용하여 2개의 새 할 일을 추가하는 함수입니다.
function addTwoTodoItems2(): void {
  // addTodo() 함수를 두 번 호출하여 todoItems에 새 할 일이 2개 추가되어야 합니다.
  for (let i=0; i < 2; i++) {
    addTodo2({id: 4, title: "test"})
  }
}

// NOTE: 유틸 함수
function log2(): void {
  console.log(todoItems2);
}

todoItems2 = fetchTodoItems2();
addTwoTodoItems2();
log2();
