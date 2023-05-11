import './InputError.css'; 

const InputError = ({ text }) => {

    return (
        <div className="InputError">
            <p>{text}</p>
        </div>
    );
}

export default InputError;