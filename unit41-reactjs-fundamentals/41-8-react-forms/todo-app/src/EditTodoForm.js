import { useState } from 'react';
import './EditTodoForm.css';

/**
 * EditTodoForm - this component should render a form
 * with one text input for the task to be edited. When
 * this form is submitted, a Todo component
 * should be edited.
 */


const EditTodoForm = ({ editTodo, id }) => {

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
    const edit = formData.todo;
    editTodo({ id, edit });
    setFormData(INITIAL_STATE);
  }

  return (
    <form onSubmit={handleSubmit} className="EditTodoForm-form">
      <label
        className="EditTodoForm-label"
        htmlFor="todo">Edit Todo</label>
      <input
        className="EditTodoForm-input"
        id="todo"
        type="text"
        name="todo"
        placeholder="Edit Todo!!!"
        value={formData.todo}
        onChange={handleChange} />

      <button className="EditTodoForm-submit">SUBMIT</button>
    </form>
  );
}

export default EditTodoForm;