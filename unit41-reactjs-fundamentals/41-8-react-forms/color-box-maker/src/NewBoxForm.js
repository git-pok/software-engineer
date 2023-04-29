import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import './NewBoxForm.css';

// NewBoxForm - this component should render
// a form that when submitted, creates a new Box.
// You should be able to specify the Box’s
// width, height, and background color. When
// the form is submitted, clear the input values.

const NewBoxForm = ({ addBox }) => {

  const INITIAL_STATE = {
    backgroundColor: "",
    width: "",
    height: ""
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
    addBox({...formData, id: uuid()});
    setFormData(INITIAL_STATE);
  }

  return (
    <form onSubmit={handleSubmit} className="NewBoxForm-form">
      <label
        className="NewBoxForm-label"
        htmlFor="backgroundColor">Background Color</label>
      <input
        className="NewBoxForm-input"
        id="backgroundColor"
        type="text"
        name="backgroundColor"
        placeholder="Type Color!!!"
        value={formData.backgroundColor}
        onChange={handleChange} />

      <label
        className="NewBoxForm-label"
        htmlFor="width">Width</label>
      <input
        className="NewBoxForm-input"
        id="width"
        type="text"
        name="width"
        placeholder="Type Width With px Suffix!!!"
        value={formData.width}
        onChange={handleChange} />

      <label
      className="NewBoxForm-label"
      htmlFor="height">Height</label>
      <input
        className="NewBoxForm-input"
        id="height"
        type="text"
        name="height"
        placeholder="Type Height With px Suffix!!!"
        value={formData.height}
        onChange={handleChange} />
      <button className="NewBoxForm-submit">ADD BOX</button>
    </form>
  );
}

export default NewBoxForm;