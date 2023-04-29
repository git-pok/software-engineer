import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import NewTodoForm from './NewTodoForm.js';
import Todo from './Todo.js';
import './TodoList.css';

/**
 * TodoList - this component should render the
 * NewTodoForm component and should render the list
 * of Todo components. Place your state that
 * contains all of the todos in this component.
 */

const TodoList = () => {
  
  const [ todos, setTodos ] = useState([]);

  const todosLen = todos.length;

  const addTodo = (newTodo) => {
    setTodos(todos => (
      [...todos, newTodo]
    ))
  }
  
  const removeTodo = (id) => {
    setTodos(todos.filter(todo => (
      todo.id !== id
    ))
    )
  }

  const editTodo = ({ id, edit }) => {
    setTodos(todos => (
      todos.map(todo => {
        if (todo.id === id) todo.todo = edit;
        return todo;
      })
    ))
  }

  return (
    <>
    <NewTodoForm addTodo={addTodo} />
      <div className="TodoList">
        <ul>
          { todosLen ?
            todos.map((list, idx) => (
             <li key={idx}><Todo
                                id={list.id}
                                todo={list.todo}
                                key={uuid()}
                                removeTodo={removeTodo}
                                editTodo={editTodo} /></li>
            )) :
            <h1 className="TodoList-p">No Todos</h1>
          }
        </ul>
      </div>
    </>
  );
}

export default TodoList;