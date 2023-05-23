import { useState, useContext } from 'react';
import JoblyApi from './models/JoblyApi.js';
// import CompaniesContext from './context/CompaniesContext.js';
// import './LogInForm.css';

const LogInForm = () => {
  const initialState = { username: "", password: "" };
  const [ formData, setFormData ] = useState(initialState);
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
    const res = await JoblyApi.logIn({endpoint: "auth/token", username, password});
    
    // setJobCoState(data => ({
    //   jobs: data.jobs,
    //   companies: queryData
    // }));

    // setFormData(() => initialState);
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
        type="text"
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
