import { useState, useContext } from 'react';
import { Redirect } from 'react-router-dom';
import JoblyApi from './models/JoblyApi.js';
import JoblyContext from './context/JoblyContext.js';
import useLocalStorage from './hooks/useLocalStorage.js';
import useToggleState from './hooks/useToggleState.js';
import jwt_decode from 'jwt-decode';
import './SignupForm.css';

const SignupForm = () => {
  const initialState = {
                          username: "",
                          password: "",
                          firstName: "",
                          lastName: "",
                          email: ""
                      };
  const [ formData, setFormData ] = useState(initialState);
  const [ localStorage, setLocalStorage ] = useLocalStorage("userData", null);
  const [ isSubmitted, setIsSubmitted ] = useToggleState(false);
  const { setUserData } = useContext(JoblyContext);

  const handleChange = (evt) => {
    const { name, value } = evt.target;

    setFormData(data => ({
      ...data,
      [name]: value
    }))
  }

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    const { 
            username, password, firstName,
            lastName, email
          } = formData;

    const loginResult = await JoblyApi.signUp({
                                                username,
                                                password,
                                                firstName,
                                                lastName,
                                                email
                                              });

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

  if (isSubmitted) return <Redirect exact to="/" />;

  return (
    <>
    <h1 className="SignupForm-h1">Sign Up</h1>
    <form onSubmit={handleSubmit} className="SignupForm">
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
      <label htmlFor="firstName">First Name</label>
      <input
        type="text"
        id="firstName"
        onChange={handleChange}
        value={formData.firstName}
        name="firstName"
        placeholder="Type a first name"></input>
      <label htmlFor="lastName">Last Name</label>
      <input
        type="text"
        id="lastName"
        onChange={handleChange}
        value={formData.lastName}
        name="lastName"
        placeholder="Type a last name"></input>
      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        onChange={handleChange}
        value={formData.email}
        name="email"
        placeholder="Type an email"></input>
      <button>SUBMIT</button>
    </form>
    </>
  );
}

export default SignupForm;
