import { useState, useContext } from 'react';
import JoblyApi from './models/JoblyApi.js';
import JoblyContext from './context/JoblyContext.js';
import jwt_decode from 'jwt-decode';
// import CompaniesContext from './context/CompaniesContext.js';
// import './LogInForm.css';

const LogInForm = () => {
  const initialState = { username: "", password: "" };
  const [ formData, setFormData ] = useState(initialState);
  const { setToken, setUserData } = useContext(JoblyContext);
  // const setJobCoState = useContext(CompaniesContext);

  const handleChange = (evt) => {
    const { name, value } = evt.target;

    setFormData(data => ({
      ...data,
      [name]: value
    }))
  }

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    const { username, password } = formData;
    const loginResult = await JoblyApi.logIn({endpoint: "auth/token", username, password});
    const token = loginResult.data.token;
    JoblyApi.setToken(token);
    const payload = await jwt_decode(token);
    // console.log(JoblyApi.token);

    setToken(() => (
      token
    ));

    setUserData(() => (
      payload
    ));

    setFormData(() => initialState);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Username</label>
      <input
        type="text"
        id="username"
        onChange={handleChange}
        value={formData.name}
        name="username"
        placeholder="Type a name"></input>
      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        onChange={handleChange}
        value={formData.password}
        name="password"
        placeholder="Type a password"></input>
      <button>SUBMIT</button>
    </form>
  );
}

export default LogInForm;
