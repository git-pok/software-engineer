import { useState, useContext } from 'react';
import JoblyApi from './models/JoblyApi.js';
import JoblyContext from './context/JoblyContext.js';
import './SearchBox.css';

const SearchBox = () => {
  const initialState = { name: "", minEmp: "", maxEmp: "" }
  const [ formData, setFormData ] = useState(initialState);
  const [ isSearchClicked, setIsSearchClicked ] = useState(false);
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

  }

  const searchClick = () => {
    setIsSearchClicked(state => !state);
  }

  const resetFilters = async () => {
    const queryResult = await JoblyApi.getEndpoint(
      { 
        endpoint: "companies"
      }
    )

    const queryData = queryResult.companies;
    
    setFormData(() => initialState);

    setJobCoData(data => ({
      jobs: data.jobs,
      companies: queryData
    }));
  }

  return (
    <>
    <div className="SearchBox-icon" onClick={searchClick}>
      <i
        className="fa-solid fa-magnifying-glass"></i>
    </div>
    <form onSubmit={handleSubmit}
      className={!isSearchClicked ? "SearchBox-hide" : "SearchBox-show"}>
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
      <button type="submit">SEARCH</button>
      <button type="button" onClick={resetFilters}>RESET</button>
    </form>
    </>
  );
}

export default SearchBox;
