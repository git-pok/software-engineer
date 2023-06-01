import { useState } from 'react';
import { useDispatch } from "react-redux";
import './MemeForm.css';

const MemeForm = ({ updateMeme }) => {
  const INITIAL_STATE = {
    img: "",
    topText: "",
    btmText: ""
  }

  const [ formData, setFormData ] = useState(INITIAL_STATE);

  const handleChange = evt => {
    const { name, value } = evt.target;

    setFormData(data => ({
      ...data,
      [name]: value
    }))
  }

  const handleSubmit = evt => {
    evt.preventDefault();
    const { img, topText, btmText } = formData;
    console.log("SUBMIT");
    updateMeme({ img, topText, btmText });
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="MemeForm">
      <div className="MemeForm-input-container">
        <label htmlFor="img">Image Address</label>
        <input
          name="img"
          type="text"
          placeholder="Type an image address"
          value={formData.img}
          onChange={handleChange}
          id="img">
        </input>
      </div>
      <div className="MemeForm-input-container">
      <label htmlFor="topText">Top Text</label>
      <input
        name="topText"
        type="text"
        placeholder="Type top text"
        value={formData.topText}
        onChange={handleChange}
        id="topText">
      </input>
      </div>
      <div className="MemeForm-input-container">
      <label htmlFor="btmText">Bottom Text</label>
      <input
        name="btmText"
        type="text"
        placeholder="Type bottom text"
        value={formData.btmText}
        onChange={handleChange}
        id="btmText">
      </input>
      </div>
      <button>SUBMIT</button>
    </form>
  );
}

export default MemeForm;
