const lSitems = JSON.parse(localStorage.getItem("todos"));
const items = lSitems ? lSitems : [];
const domDoc = document;
const todoForm = domDoc.querySelector("form");
const todoFormInput = domDoc.querySelector("form input");
const todosDiv = domDoc.querySelector(".todos");
const todoDiv = domDoc.querySelector(".todo-div");

appendTodoToDom(items);

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

function appendTodoToDom (items) {
    items.forEach(todo => {
        const todoText = todo.todo;
        const div = makeTodoDiv();
        const p = makeTodoP(todoText);
        const checkBox = makeTodoCheckInpt();
        const x = makeTodoX();
        todo.cmplt ? p.classList.add("cmplt") : p.classList.add("not-cmplt");
        if (todo.cmplt) checkBox.checked = true;
        div.append(p);
        div.append(checkBox);
        div.append(x);
        todosDiv.append(div);
    });
}

function isTodoInItems (todo) {
    return items.some(item => item.todo === todo);
}

function itemsDelAdd (todoStrOrObj, add = true) {
    if (add) items.push({ todo: todoStrOrObj, cmplt: false });
    else {
        items.forEach((todo, idx) => {
            if (todo.todo === todoStrOrObj) items.splice(idx, 1);
        })
    }
    localStorage.setItem("todos", JSON.stringify(items));
    // console.log(localStorage);
}

todoForm.addEventListener("submit", function (evt) {
    evt.preventDefault();
    const todo = getSbmtdInpt(todoFormInput);
    const isTodoExis = isTodoInItems(todo);
    if (!isTodoExis) {
        itemsDelAdd(todo);
        const div = makeTodoDiv();
        const p = makeTodoP(todo);
        const checkBox = makeTodoCheckInpt();
        const x = makeTodoX();
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
        itemsDelAdd (innerText, false);
        prntTag.remove();
    } else if (isInpt) {
        const innerText = targetPrntTag.innerText;
        targetPrntTag.classList.toggle("cmplt");
        items.forEach(item => {
            if (item.todo === innerText) {
                if (item.cmplt === true) item.cmplt = false;
                else item.cmplt = true;
            }
        });
        localStorage.setItem("todos", JSON.stringify(items));
    }
});