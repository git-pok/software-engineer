import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './ColorForm.css';


const ColorForm = ({ addColor }) => {

    const history = useHistory();

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
        addColor(formData.color);
        setFormData(initialState);
        history.push("/colors");
    }

    return (
        <form
            className="ColorForm"
            onSubmit={handleSubmit}>
            <label htmlFor="color">
                Select A Color
            </label>
            <input
                id="color"
                type="color"
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