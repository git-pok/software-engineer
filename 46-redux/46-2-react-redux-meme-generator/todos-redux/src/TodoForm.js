import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import './TodoForm.css';

const TodoForm = ({ createTodo }) => {

  const INITIAL_STATE = {
    todo: "",
    status: false
  }

  const [ formData, setFormData ] = useState(INITIAL_STATE);

  const handleChange = evt => {
    const { name, value } = evt.target;
    const targetId = evt.target.id;
    const isChecked = evt.target.checked;

    setFormData(data => ({
      ...data,
      [name]: targetId === "todo" ? value : isChecked
    }))
  }

  const handleSubmit = evt => {
    evt.preventDefault();
    const { todo, status } = formData;
    createTodo({ todo, status, id: uuid() });
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="TodoForm">
      <div className="TodoForm-input-container">
        <label htmlFor="todo">Todo</label>
        <input
          name="todo"
          type="text"
          placeholder="Type a todo"
          value={formData.todo}
          onChange={handleChange}
          id="todo">
        </input>
      </div>
      <div className="TodoForm-input-container">
        <label htmlFor="status">Complete</label>
        <input
          name="status"
          type="checkbox"
          value={formData.status}
          onChange={handleChange}
          id="status">
        </input>
      </div>
      <button>SUBMIT</button>
    </form>
  );
}

export default TodoForm;
