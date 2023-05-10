import { useState } from 'react';

const ColorForm = () => {

    const initialState = {
        name: ""
    }

    const [ formData, setFormData ] = useState(initialState);

    const handleChange = e => {
        const { name, value } = e.target;

        setFormData(formData => (
            ...formData,
            [name]: value
        ))
    }

    return (
        <form onSubmit={handleSubmit}>
            <label for="color">
                Color
            </label>
            <input
                id="color"
                type="text"
                name="color"
                value={formData.color}
                onChange={handleChange} >
            </input>
            <button>SUBMIT</button>
        </form>
    );
}

export default ColorForm;