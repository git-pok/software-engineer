import { useState, useEffect } from 'react';
import JoblyRoutes from './JoblyRoutes.js';
import JoblyNavbar from './JoblyNavbar.js';
import JoblyApi from './models/JoblyApi.js';
import JoblyContext from './context/JoblyContext.js';
import useLocalStorage from './hooks/useLocalStorage.js';
// import './JoblyApp.css';

const JoblyApp = () => {

  const [ jobCoData, setJobCoData ] = useState({});
  
  const [ userData, setUserData ] = useLocalStorage("userData", null);

  useEffect(() => {
    async function getJobsAndCos (...args) {
      const reqResults = await JoblyApi.companyJobReqs(...args);
      const data = await Promise.all(reqResults);
      const dataObj = {};

      data.forEach(val => {
        const data = val.data.companies || val.data.jobs;
        const dataKeys = Object.keys(val.data);
        dataObj[dataKeys] = data;
      })

      setJobCoData(data => (
        dataObj
      ));
    }

    getJobsAndCos ({endpoint: "companies" }, {endpoint: "jobs" });

  }, [])

  const logOut = () => {
    setUserData(() => null);
    window.localStorage.clear();
  }

  return (
    <>
    <JoblyContext.Provider
        value={{
                setJobCoData,
                setUserData,
                userData
              }}>
      <JoblyNavbar
        linkNames={["companies", "jobs", "profile"]}
        logOut={logOut} />
      <JoblyRoutes
        companies={jobCoData.companies}
        jobs={jobCoData.jobs} />
      </JoblyContext.Provider>
    </>
  );
}

export default JoblyApp;
