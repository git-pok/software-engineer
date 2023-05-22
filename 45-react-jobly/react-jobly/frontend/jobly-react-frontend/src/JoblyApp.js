import JoblyRoutes from './JoblyRoutes.js';
import JoblyNavbar from './JoblyNavbar.js';
// import './JoblyApp.css';

const JoblyApp = () => {
  return (
    <>
      <JoblyNavbar
        linkNames={["companies", "jobs", "profile"]} />
      <JoblyRoutes />
    </>
  );
}

export default JoblyApp;
