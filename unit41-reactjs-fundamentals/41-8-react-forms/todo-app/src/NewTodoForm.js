import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import './NewTodoForm.css';

/**
 * NewTodoForm - this component should render a form
 * with one text input for the task to be created. When
 * this form is submitted, a new Todo component
 * should be created.
 */


const NewTodoForm = ({ addTodo }) => {

  const INITIAL_STATE = {
    todo: ""
  };

  const [ formData, setFormData ] = useState(INITIAL_STATE);

  const handleChange = e => {
    const evtTarget = e.target; 
    const { name, value } = evtTarget;

    setFormData(formData => ({
      ...formData,
      [name]: value
    }));
  }

  const handleSubmit = e => {
    e.preventDefault();
    addTodo({...formData, id: uuid()});
    setFormData(INITIAL_STATE);
  }

  return (
    <form onSubmit={handleSubmit} className="NewTodoForm-form">
      <label
        className="NewTodoForm-label"
        htmlFor="todo">Todo</label>
      <input
        className="NewTodoForm-input"
        id="todo"
        type="text"
        name="todo"
        placeholder="Create Todo!!!"
        value={formData.todo}
        onChange={handleChange} />

      <button className="NewTodoForm-submit">ADD TODO</button>
    </form>
  );
}

export default NewTodoForm;