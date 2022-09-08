const todoForm = document.getElementById("todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.getElementById("todo-list");

function onTodoSubmit(event) {
    event.preventDefault(); //기본동작 막기
    const newTodo = todoInput.value;
    todoInput.value = ""; //입력창 클리어

    paintTodo(newTodo);
};

function deleteTodo(event) {
    const li = event.target.parentElement;
    li.remove();
}

//리스트 그리기
function paintTodo(newTodo) {
    const li = document.createElement("li");

    const span = document.createElement("span");
    span.innerText = newTodo;

    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteTodo);

    li.appendChild(span);
    li.appendChild(button);
    
    todoList.appendChild(li);
}

todoForm.addEventListener("submit", onTodoSubmit);