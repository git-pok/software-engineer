import { useState, useContext, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import Message from './Message.js';
import JoblyApi from './models/JoblyApi.js';
import JoblyContext from './context/JoblyContext.js';
import useLocalStorage from './hooks/useLocalStorage.js';
import useToggleState from './hooks/useToggleState.js';
import jwt_decode from 'jwt-decode';
import './LogInForm.css';

const LogInForm = () => {
  const initialState = { username: "", password: "" };
  const [ formData, setFormData ] = useState(initialState);
  const [ isSubmitted, setIsSubmitted ] = useToggleState(false);
  const { setUserData, userData } = useContext(JoblyContext);
  const [ invalidForm, setInvalidForm ] = useToggleState(false);

  useEffect(() => {
    const login = async () => {
      const { username, password } = formData;
      try {
        const loginResult = await JoblyApi.logIn({endpoint: "auth/token", username, password});
        const token = loginResult.data.token;    
        const payload = await jwt_decode(token);
        payload.token = token;
        setUserData(() => (
          payload
        ));

        setIsSubmitted();
        setFormData(() => initialState);
        <Redirect exact to="/" />

      } catch (err) {
        <Redirect exact to="/login" />
        setInvalidForm();
        setTimeout(setInvalidForm, 3000);
        setTimeout(setIsSubmitted, 3000);
      }
    }

    if (isSubmitted) login();

  }, [isSubmitted])

  const handleChange = (evt) => {
    const { name, value } = evt.target;

    setFormData(data => ({
      ...data,
      [name]: value
    }))
  }

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    setIsSubmitted();
  }

  // if (isSubmitted) return <Redirect exact to="/" />;

  return (
    <>
    <h1 className="LogInForm-h1">Log In</h1>
    <form onSubmit={handleSubmit} className="LogInForm">
      <label htmlFor="username">Username</label>
      <input
        type="text"
        id="username"
        onChange={handleChange}
        value={formData.name}
        name="username"
        placeholder="Type a name"
        autoComplete="username"></input>
      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        onChange={handleChange}
        value={formData.password}
        name="password"
        placeholder="Type a password"
        autoComplete="current-password"></input>
      {
        invalidForm &&
        <Message msgObj={
          {
            class: "fail",
            msg: "Invalid form data!"
          }
        } />
      }
      <button>SUBMIT</button>
    </form>
    </>
  );
}

export default LogInForm;
