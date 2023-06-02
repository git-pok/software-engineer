import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import './TodoForm.css';

const TodoForm = () => {

  const INITIAL_STATE = {
    todo: "",
    complete: false
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
    const { todo, complete } = formData;
    console.log(todo, complete);
    // updateMeme({ todo, complete, id: uuid() });
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
        <label htmlFor="complete">Complete</label>
        <input
          name="complete"
          type="checkbox"
          value={formData.complete}
          onChange={handleChange}
          id="complete">
        </input>
      </div>
      <button>SUBMIT</button>
    </form>
  );
}

export default TodoForm;
