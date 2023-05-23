import { useState, useContext } from 'react';
import JoblyApi from './models/JoblyApi.js';
import JoblyContext from './context/JoblyContext.js';
// import './SearchBox.css';

const SearchBox = () => {
  const initialState = { name: "", minEmp: "", maxEmp: "" }
  const [ formData, setFormData ] = useState(initialState);
  const { setJobCoData } = useContext(JoblyContext);

  const handleChange = (evt) => {
    const { name, value } = evt.target;

    setFormData(data => ({
      ...data,
      [name]: value
    }))
  }

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    const { name, minEmp, maxEmp } = formData;
    const nameProp = name !== "" || name ? name : null;
    const minEmpProp = minEmp !== "" || minEmp ? minEmp : null;
    const maxEmpProp = maxEmp !== "" || maxEmp ? maxEmp : null;

    const queryResult = await JoblyApi.getEndpoint(
                              { 
                                endpoint: "companies",
                                data: {
                                        name: nameProp,
                                        minEmployees: minEmpProp,
                                        maxEmployees: maxEmpProp
                                      }
                              }
                          )
    const queryData = queryResult.companies;
    setJobCoData(data => ({
      jobs: data.jobs,
      companies: queryData
    }));

    // setFormData(() => initialState);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        id="name"
        onChange={handleChange}
        value={formData.name}
        name="name"
        placeholder="Type a name"></input>
      <label htmlFor="minEmp">Minimum Employees</label>
      <input
        type="number"
        id="minEmp"
        onChange={handleChange}
        value={formData.minEmp}
        name="minEmp"
        placeholder="Type a number"></input>
      <label htmlFor="maxEmp">Maximum Employees</label>
      <input
        type="number"
        id="maxEmp"
        onChange={handleChange}
        value={formData.maxEmp}
        name="maxEmp"
        placeholder="Type a number"></input>
      <button>SEARCH</button>
    </form>
  );
}

export default SearchBox;
