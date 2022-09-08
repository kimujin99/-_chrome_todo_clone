const todoForm = document.getElementById("todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

//local storage에 저장할 array
//let : 기존 local storage에 있는 array를 업데이트하기 위해
let todos = [];

function saveTodos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
}

//submit 이벤트
function onTodoSubmit(event) {
    event.preventDefault(); //기본동작 막기
    const newTodo = todoInput.value;
    todoInput.value = ""; //입력창 클리어

    //todos obj 만들기
    const newTodoObj = {
        text : newTodo,
        id : Date.now(),
    }

    //array에 저장
    todos.push(newTodoObj);
    //화면에 출력
    paintTodo(newTodoObj);
    //local storage에 저장
    saveTodos();
};

function deleteTodo(event) {
    //어떤 리스트가 선택되었는지 판단
    const li = event.target.parentElement;
    todos = todos.filter((todo) => todo.id !== parseInt(li.id));
    li.remove();

    saveTodos();
}

//리스트 그리기
function paintTodo(newTodo) {
    //<li>만들기
    const li = document.createElement("li");
    li.id = newTodo.id;
    //<span>만들기
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    //<button>만들기
    const button = document.createElement("button");
    button.innerText = "❌";
    //버튼 클릭 이벤트 - 삭제
    button.addEventListener("click", deleteTodo);

    //<li>안에 추가
    li.appendChild(span);
    li.appendChild(button);
    //<ul>안에 추가
    todoList.appendChild(li);
}

todoForm.addEventListener("submit", onTodoSubmit);

//local storage의 todos를 가져와 세팅
const savedTodos = localStorage.getItem(TODOS_KEY);
if(savedTodos !== null){
    const parsedTodos = JSON.parse(savedTodos);
    //local storage의 todos를 array에 업데이트
    todos = parsedTodos;
    parsedTodos.forEach(paintTodo);
}
