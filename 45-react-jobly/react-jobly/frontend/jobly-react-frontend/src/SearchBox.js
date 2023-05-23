import { useState } from 'react';
import JoblyApi from './models/JoblyApi.js';
// import './SearchBox.css';

const SearchBox = () => {
  // const coData = companies;
  // console.log("F CO", companies.map(val => ( val )));
  // console.log("F CO", companies);
  const initialState = { search: "" }
  const [ formData, setFormData ] = useState(initialState);
  
  const handleChange = (evt) => {
    const { name, value } = evt.target;
    // console.log(name, value);
    setFormData(data => ({
      ...data,
      [name]: value
    }))
  }

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    const { search } = formData;
    console.log(search);
    const queryResult = await JoblyApi.getCompany(
                              { 
                                endpoint: "companies",
                                data: {name: search}
                              }
                          )
    const queryData = queryResult.companies;                       
    // console.log(queryResult.companies);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="search"></label>
      <input
        type="text"
        id="search"
        onChange={handleChange}
        value={formData.search}
        name="search"></input>
      <button>SEARCH</button>
    </form>
  );
}

export default SearchBox;
