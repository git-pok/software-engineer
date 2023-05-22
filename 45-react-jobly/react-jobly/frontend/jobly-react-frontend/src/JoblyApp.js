import JoblyRoutes from './JoblyRoutes.js';
import JoblyNavbar from './JoblyNavbar.js';
// import './JoblyApp.css';

const JoblyApp = () => {
  return (
    <>
      <h1>JOBLY APP</h1>
      <JoblyNavbar
        linkNames={["companies", "jobs", "users"]} />
      <JoblyRoutes />
    </>
  );
}

export default JoblyApp;
