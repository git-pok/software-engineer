const lStodos = JSON.parse(localStorage.getItem("todos"));
const todos = lStodos ? lStodos : [];
const domDoc = document;
const todoForm = domDoc.querySelector("form");
const todoFormInput = domDoc.querySelector("form input");
const todosDiv = domDoc.querySelector(".todos");
const todoDiv = domDoc.querySelector(".todo-div");
const lStodosSet = new Set ();
// Make Set for each todo.
todos.forEach(todo => lStodosSet.add(todo.todo));
// Append todos to DOM.
appendTodoToDom(todos);
// getSbmtdInpt
// function: accesses submitted form data.
// returns: submitted form data.
function getSbmtdInpt (qrySlcInpt) {
    const todoValue = qrySlcInpt.value;
    return todoValue;
}
// makeTodoDiv
// function: creates div node.
// returns: div node.
function makeTodoDiv () {
    const div = document.createElement("div");
    div.classList.add("todo-div");
    return div;
}
// makeTodoP
// function: creates p node.
// returns: p node.
function makeTodoP (todoStr) {
    const p = document.createElement("p");
    p.innerText = todoStr;
    return p;
}
// makeTodoCheckInpt
// function: creates checkbox node.
// returns: checkbox node.
function makeTodoCheckInpt () {
    const cmpltInpt = document.createElement("input");
    cmpltInpt.setAttribute("type", "checkbox");
    return cmpltInpt;
}
// makeTodoX
// function: creates div node for delete func.
// returns: div node.
function makeTodoX () {
    const dltDiv = document.createElement("div");
    dltDiv.classList.add("delete");
    dltDiv.innerText = "X";
    return dltDiv;
}
// appendTodoToDom
// function: creates nodes for submitted todo,
// and appends it to DOM.
// returns: undefined.
function appendTodoToDom (todoArray) {
    todoArray.forEach(todo => {
        const todoText = todo.todo;
        const div = makeTodoDiv();
        const p = makeTodoP(todoText);
        const checkBox = makeTodoCheckInpt();
        const x = makeTodoX();
        todo.cmplt ? p.classList.add("cmplt") : p.classList.add("not-cmplt");
        if (todo.cmplt) checkBox.checked = true;
        div.setAttribute("data-id", todo.id);
        div.append(p);
        div.append(checkBox);
        div.append(x);
        todosDiv.append(div);
    });
}
// isTodoInItems
// function: verifies if a todo exists.
// returns: Boolean.
function isTodoInItems (todo) {
    return lStodosSet.has(todo);
}
// todosDelAdd
// function: adds or deletes todo from todos.
// returns: added or deleted todo object.
function todosDelAdd (todoStrOrId, add = true) {
    const todosArrayLgth = todos.length;
    const todoId = todosArrayLgth ? todos[todosArrayLgth - 1].id : null;
    const id = todosArrayLgth ? todoId + 1 : 0;
    if (add) {
        const todoObj = { todo: todoStrOrId, cmplt: false, id };
        todos.push(todoObj);
        localStorage.setItem("todos", JSON.stringify(todos));
        return JSON.parse(JSON.stringify(todoObj));
    }
    else {
        const todoObj = todos[todoStrOrId];
        todos.splice(todoStrOrId, 1);
        todos.forEach((todo, idx) =>  {
            todo.id = idx;
        });
        localStorage.setItem("todos", JSON.stringify(todos));
        return JSON.parse(JSON.stringify(todoObj));
    }
}
// submitEventListener
// function: creates todo node for sbmttd data,
// and appends it to DOM.
todoForm.addEventListener("submit", function (evt) {
    evt.preventDefault();
    const todo = getSbmtdInpt(todoFormInput);
    const isTodoExis = isTodoInItems(todo);
    if (!isTodoExis && todo !== "") {
        const todoObj = todosDelAdd(todo);
        lStodosSet.add(todo);
        const div = makeTodoDiv();
        const p = makeTodoP(todo);
        const checkBox = makeTodoCheckInpt();
        const x = makeTodoX();
        div.setAttribute("data-id", todoObj.id);
        p.classList.add("not-cmplt");
        div.append(p);
        div.append(checkBox);
        div.append(x);
        todosDiv.append(div);
    }
    todoFormInput.value = "";
});
// clickEventListener
// function: changes style of todo to complete
// or not complete, or deletes todo.
todosDiv.addEventListener("click", function (evt) {
    const targetPrntTag = evt.target.previousElementSibling;
    const prntTag = evt.target.parentElement;
    const isInpt = evt.target.nodeName === "INPUT";
    if (evt.target.className === "delete") {
        const innerText = evt.target.previousElementSibling.previousElementSibling.innerText;
        const { id } = prntTag.dataset;
        todosDelAdd (id, false);
        lStodosSet.delete(innerText);
        prntTag.remove();
        const domTodos = document.querySelectorAll(".todos .todo-div");
        domTodos.forEach((todo, idx) => todo.dataset.id = idx);
    } else if (isInpt) {
        const innerText = targetPrntTag.innerText;
        targetPrntTag.classList.toggle("cmplt");
        todos.forEach(item => {
            if (item.todo === innerText) {
                if (item.cmplt === true) item.cmplt = false;
                else item.cmplt = true;
            }
        });
    }
    localStorage.setItem("todos", JSON.stringify(todos));
});