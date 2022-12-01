let form = document.querySelector('#todo-form');
let input = document.querySelector("input[type='text']");
let friendList = document.querySelector("#todo-lists");
let completeBttn = document.querySelectorAll("input[name='completebutton']");
let strikeThrough = document.querySelectorAll("#todo-lists > li");
// const toggleSwitch = document.querySelectorAll('input[type="checkbox"]');
let itemsArray = localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : [];
localStorage.setItem('todos', JSON.stringify(itemsArray));
let data = JSON.parse(localStorage.getItem('todos'));

function createList(text, completed=false){
  let toDoLi = document.createElement('li');
    toDoLi.classList.add('items');
    friendList.appendChild(toDoLi);

  // span where the input's value will fill
  let span = document.createElement('span');
    span.innerText = text;
    if (completed) {
      span.classList.add('complete');
    }
    toDoLi.appendChild(span);

  // complete button
  let completeBttn = document.createElement('input');
    completeBttn.setAttribute('type', 'checkbox');
    if (completed) {
      completeBttn.setAttribute('checked', true);
    }
    completeBttn.setAttribute('name', 'completebutton');
    toDoLi.appendChild(completeBttn);

  // removeBttn 
  let removeBttn = document.createElement('button');
    removeBttn.innerText = 'x';
    removeBttn.setAttribute('name', 'removebutton');
    toDoLi.appendChild(removeBttn);
};

form.addEventListener('submit', function(e) {
  e.preventDefault();
  itemsArray.push(
    {todo: input.value,
     completed: false 
    });

  localStorage.setItem('todos', JSON.stringify(itemsArray));

  createList(
    input.value
  );

  input.value = '';
  
});

for (let item of data) {
  createList(
    item.todo,
    item.completed
  );
};

// toggle and remove function with Event Delegation
friendList.addEventListener('click', function(e) {
  if (e.target.name === 'completebutton') {
      e.target.previousElementSibling.classList.toggle('complete')
      let clickedItem = e.target.previousElementSibling.innerText;
      const foundItem = itemsArray.find(function(item) {
          return item.todo === clickedItem;
      });
      foundItem.completed = !foundItem.completed;
      localStorage.setItem('todos', JSON.stringify(itemsArray));
       

  } else if (e.target.name === 'removebutton') {
      let removedItem = e.target.previousElementSibling.previousElementSibling.innerText;
      // console.log(clickedItem, e.target)
      let currentItemsArray = JSON.parse(localStorage.getItem('todos'))
      // console.log('items before removing ', currentItemsArray)

      // remove item from array by filtering the list items that don't match the cliked item inot a new array
      const updatedItemsArray = currentItemsArray.filter(function(item) {
          return item.todo !== removedItem;
      });
      // console.log('after removing ', updatedItemsArray)
      // updating local storage with the new variable (array) created above
      localStorage.setItem('todos', JSON.stringify(updatedItemsArray));
      e.target.parentElement.remove();
  }
});
// todo make item list unique
