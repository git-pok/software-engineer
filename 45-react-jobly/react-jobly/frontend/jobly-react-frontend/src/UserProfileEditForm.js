import { useState, useContext, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import JoblyApi from './models/JoblyApi.js';
import JoblyContext from './context/JoblyContext.js';
import useLocalStorage from './hooks/useLocalStorage.js';
import useToggleState from './hooks/useToggleState.js';
import jwt_decode from 'jwt-decode';
// import './UserProfileEditForm.css';

const UserProfileEditForm = () => {
  const initialState = {
    firstName: "", lastName: "",
    email: "", password: ""
  };

  const [ formData, setFormData ] = useState(initialState);
  const [ isSubmitted, setIsSubmitted ] = useToggleState(false);
  const [ userEditData, setUserEditData ] = useState(null);
  // const [ localStorage, setLocalStorage ] = useLocalStorage("userData", null);
  const { setUserData, userData } = useContext(JoblyContext);
  const userName = userData.username;

  useEffect(() => {

    const userEditReq = async () => {
      const patchResult = await JoblyApi.getEndpoint(
                        {
                          endpoint: `users/${userName}`,
                          method: "patch", data: userEditData
                        }
                      );

      console.log(patchResult);
    }

    if (userEditData !== null) userEditReq();
    console.log("userEditData", userEditData);

  }, [userEditData])

  console.log("userEditData", userEditData);
  

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
    const { firstName, lastName, email, password } = formData;
    
    const formDataEntires = JSON.parse(JSON.stringify(Object.entries(formData)));
   
    const dataArray = JSON.parse(JSON.stringify(formDataEntires.filter((val, idx) => (
      formDataEntires[idx][1] !== ""
    ))));

    console.log("DATA ARRAY", dataArray);
    const dataArrayLen = dataArray.length;
    const data = JSON.parse(JSON.stringify(Object.fromEntries(dataArray)));
    console.log("FORM, DATA LEN", dataArrayLen);
    console.log("DATA", data);
    setUserEditData(() => {
        if (dataArrayLen) return JSON.parse(JSON.stringify(data));
        else return null;
      }
    );
    // const patchResult = dataArrayLen ? await JoblyApi.getEndpoint({endpoint: `users/${userName}`, method: "patch", data}) : null;
    // console.log(patchResult);
    // const token = loginResult.data.token;
    // const payload = await jwt_decode(token);
    // payload.token = token;

    // setLocalStorage(() => (
    //   payload
    // ));

    // setUserData(() => (
    //   payload
    // ));

    // setFormData(() => initialState);
  }

  // if (isSubmitted) return <Redirect exact to="/" />;

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="firstName">First Name</label>
      <input
        type="text"
        id="firstName"
        onChange={handleChange}
        value={formData.firstName}
        name="firstName"
        placeholder="Type a first name"
        autoComplete="firstName"></input>
      <label htmlFor="lastName">Last Name</label>
      <input
        type="text"
        id="lastName"
        onChange={handleChange}
        value={formData.lastName}
        name="lastName"
        placeholder="Type a last name"
        autoComplete="lastName"></input>
      <label htmlFor="email">Email</label>
      <input
        type="text"
        id="email"
        onChange={handleChange}
        value={formData.email}
        name="email"
        placeholder="Type an email"
        autoComplete="email"></input>
      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        onChange={handleChange}
        value={formData.password}
        name="password"
        placeholder="Type a password"
        autoComplete="password"></input>
      <button>SUBMIT</button>
    </form>
  );
}

export default UserProfileEditForm;
