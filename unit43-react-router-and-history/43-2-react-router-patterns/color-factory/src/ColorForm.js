import { useState } from 'react';

const ColorForm = () => {

    const initialState = {
        color: ""
    }

    const [ formData, setFormData ] = useState(initialState);

    const handleChange = e => {
        const { name, value } = e.target;

        setFormData(formData => ({
            ...formData,
            [name]: value
        }))
    }

    const handleSubmit = e => {
        e.preventDefault();
        console.log("SUBMITTED!!!");
        console.log(formData);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="color">
                Color
            </label>
            <input
                id="color"
                type="text"
                name="color"
                value={formData.color}
                onChange={handleChange}
                placeholder="Type a Color" >
            </input>
            <button>SUBMIT</button>
        </form>
    );
}

export default ColorForm;