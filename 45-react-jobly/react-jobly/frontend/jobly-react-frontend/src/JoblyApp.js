// import { useState, useEffect } from 'react';
import JoblyRoutes from './JoblyRoutes.js';
import JoblyNavbar from './JoblyNavbar.js';
// import JoblyApi from './models/JoblyApi.js';
// import './JoblyApp.css';

const JoblyApp = () => {
  // const [ companies, setCompanies ] = useState(null);

  // useEffect(() => {
  //   async function getCompanies (url) {
  //     const results = await JoblyApi.getCompany(url);
  //     console.log(results[0]);
  //     setCompanies(data => [results.companies]); 
  //   }

  //   getCompanies("companies");
  // }, [])

  // console.log("CO", companies);
  return (
    <>
      <JoblyNavbar
        linkNames={["companies", "jobs", "profile"]} />
      <JoblyRoutes />
    </>
  );
}

export default JoblyApp;
