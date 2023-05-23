import { useState, useEffect } from 'react';
import JoblyRoutes from './JoblyRoutes.js';
import JoblyNavbar from './JoblyNavbar.js';
import JoblyApi from './models/JoblyApi.js';
import CompaniesContext from './context/CompaniesContext.js';
// import './JoblyApp.css';

const JoblyApp = () => {
  // const [ companies, setCompanies ] = useState({});
  const [ jobCoData, setJobCoData ] = useState({});
  const [ userData, setUserData ] = useState(null);

  useEffect(() => {
    async function getJobsAndCos (...args) {
      const reqResults = await JoblyApi.companyJobReqs(...args);
      const data = await Promise.all(reqResults);
      console.log("DATA", data[0].data.companies);
      // console.log(data[1].data);
      const dataObj = {};

      // setJobCoData(() => ({
      //   one: data[0].data.companies,
      //   two: data[1].data.jobs
      // }));

      data.forEach(val => {
        const data = val.data.companies || val.data.jobs;
        const dataKeys = Object.keys(val.data);
        console.log(dataKeys);
        dataObj[dataKeys] = data;
        // dataObj.set(dataKeys[0], data);
      })

      setJobCoData(data => (
        dataObj
      ));
    }

    getJobsAndCos ({endpoint: "companies" }, {endpoint: "jobs" });

  }, [])
  // console.log("JOB CO DATA", jobCoData);

  return (
    <>
      <JoblyNavbar
        linkNames={["companies", "jobs", "profile"]} />
      <CompaniesContext.Provider value={setJobCoData} > 
      <JoblyRoutes
        companies={jobCoData.companies}
        jobs={jobCoData.jobs} />
      </CompaniesContext.Provider>
    </>
  );
}

export default JoblyApp;
