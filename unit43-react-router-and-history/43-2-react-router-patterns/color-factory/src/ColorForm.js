import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './ColorForm.css';


const ColorForm = ({ addColor }) => {

    const [ isTouched, setIsTouched ] = useState(false);
    const [ isSubmit, setIsSubmit ] = useState(false);

    const history = useHistory();

    const initialState = {
        color: ""
    }

    const [ formData, setFormData ] = useState(initialState);

    const handleChange = e => {
        setIsTouched(() => true);
        const { name, value } = e.target;

        setFormData(formData => ({
            ...formData,
            [name]: value
        }))
    }

    const handleSubmit = e => {
        e.preventDefault();
        setIsSubmit(() => true);
        if (formData.color) {
            addColor(formData.color);
            setFormData(initialState);
            history.push("/colors");
        }
    }

    return (
        <form
            className="ColorForm"
            onSubmit={handleSubmit}>
            { isSubmit && !isTouched && <h1>Invalid</h1> }
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