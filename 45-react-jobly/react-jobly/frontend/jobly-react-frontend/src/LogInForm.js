import { useState, useContext, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
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
  const [ localStorage, setLocalStorage ] = useLocalStorage("userData", null);
  const { setUserData, userData } = useContext(JoblyContext);

  useEffect(() => {
    const login = async () => {
      const { username, password } = formData;
      const loginResult = await JoblyApi.logIn({endpoint: "auth/token", username, password});
      const token = loginResult.data.token;
      const payload = await jwt_decode(token);
      payload.token = token;
  
      setLocalStorage(() => (
        payload
      ));
  
      setUserData(() => (
        payload
      ));

      setIsSubmitted();
      setFormData(() => initialState);
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

  if (isSubmitted) return <Redirect exact to="/" />;

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
      <button>SUBMIT</button>
    </form>
    </>
  );
}

export default LogInForm;
