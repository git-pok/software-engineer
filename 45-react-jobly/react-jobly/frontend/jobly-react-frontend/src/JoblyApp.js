import { useState, useEffect } from 'react';
import JoblyRoutes from './JoblyRoutes.js';
import JoblyNavbar from './JoblyNavbar.js';
import JoblyApi from './models/JoblyApi.js';
// import './JoblyApp.css';

const JoblyApp = () => {
  const [ companies, setCompanies ] = useState(null);

  useEffect(() => {
    async function getCompanies ({ endpoint, data, method }) {
      console.log("USE EFFECT", endpoint);
      const results = await JoblyApi.getCompany({ endpoint, data, method });
      // console.log(results[0]);
      setCompanies(data => results.companies); 
    }

    getCompanies({endpoint: "companies" });
  }, [])

  console.log("CO", companies);
  return (
    <>
      <JoblyNavbar
        linkNames={["companies", "jobs", "profile"]} />
      <JoblyRoutes
        companies={companies} />
    </>
  );
}

export default JoblyApp;
