const lStodos = JSON.parse(localStorage.getItem("todos"));
const todos = lStodos ? lStodos : [];
const domDoc = document;
const todoForm = domDoc.querySelector("form");
const todoFormInput = domDoc.querySelector("form input");
const todosDiv = domDoc.querySelector(".todos");
const todoDiv = domDoc.querySelector(".todo-div");
const lStodosSet = new Set ();
todos.forEach(todo => lStodosSet.add(todo.todo));

appendTodoToDom(todos);

function getSbmtdInpt (qrySlcInpt) {
    const todoValue = qrySlcInpt.value;
    return todoValue;
}

function makeTodoDiv () {
    const div = document.createElement("div");
    div.classList.add("todo-div");
    return div;
}

function makeTodoP (todoStr) {
    const p = document.createElement("p");
    p.innerText = todoStr;
    return p;
}

function makeTodoCheckInpt () {
    const cmpltInpt = document.createElement("input");
    cmpltInpt.setAttribute("type", "checkbox");
    return cmpltInpt;
}

function makeTodoX () {
    const dltDiv = document.createElement("div");
    dltDiv.classList.add("delete");
    dltDiv.innerText = "X";
    return dltDiv;
}

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

function isTodoInItems (todo) {
    return lStodosSet.has(todo);
}

function itemsDelAdd (todoStrOrId, add = true) {
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

todoForm.addEventListener("submit", function (evt) {
    evt.preventDefault();
    const todo = getSbmtdInpt(todoFormInput);
    const isTodoExis = isTodoInItems(todo);
    if (!isTodoExis && todo !== "") {
        const todoObj = itemsDelAdd(todo);
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

todosDiv.addEventListener("click", function (evt) {
    const targetPrntTag = evt.target.previousElementSibling;
    const prntTag = evt.target.parentElement;
    const isInpt = evt.target.nodeName === "INPUT";
    if (evt.target.className === "delete") {
        const innerText = evt.target.previousElementSibling.previousElementSibling.innerText;
        const { id } = prntTag.dataset;
        itemsDelAdd (id, false);
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