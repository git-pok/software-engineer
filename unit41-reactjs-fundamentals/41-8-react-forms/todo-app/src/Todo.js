import { useState } from 'react';
import EditTodoForm from './EditTodoForm.js';
import './Todo.css';

/**
 * Todo- this component should display a div with the task of the todo.
 */

const Todo = ({ todo, removeTodo, id, editTodo }) => {
  const [ isActive, setIsActive ] = useState(false);

  const editForm = () => {
    setIsActive(() => (
      !isActive      
    ));
  }

  return (
    <>
    <div className="Todo">
      <p className="Todo-p">{ todo }</p>
      <button
      className="Todo-delete-icon"
      onClick={() => removeTodo(id)}>X</button>
      <button
      className="Todo-edit-icon"
      onClick={editForm}
      >EDIT</button>
    </div>
    {
      isActive ? <EditTodoForm id={id} editTodo={editTodo} /> : null
    }
    </>
  );
}

export default Todo;