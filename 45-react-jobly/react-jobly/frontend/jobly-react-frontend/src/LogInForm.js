import { useState, useContext } from 'react';
import { Redirect } from 'react-router-dom';
import JoblyApi from './models/JoblyApi.js';
import JoblyContext from './context/JoblyContext.js';
import useLocalStorage from './hooks/useLocalStorage.js';
import jwt_decode from 'jwt-decode';
// import './LogInForm.css';

const LogInForm = ({ redirect }) => {
  const initialState = { username: "", password: "" };
  const [ formData, setFormData ] = useState(initialState);
  const [ isSubmitted, setIsSubmitted ] = useState(false);
  const [ localStorage, setLocalStorage ] = useLocalStorage("userData", null);
  const { setUserData } = useContext(JoblyContext);

  // const history = useHistory();

  const handleChange = (evt) => {
    const { name, value } = evt.target;

    setFormData(data => ({
      ...data,
      [name]: value
    }))
  }

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    // history.push("/");
    // if (isSubmitted) redirect("/");
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

    setFormData(() => initialState);
    setIsSubmitted(state => !state);
   
  }

  if (isSubmitted) return <Redirect exact to={redirect} />;

  return (
    <form onSubmit={handleSubmit}>
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
  );
}

export default LogInForm;
