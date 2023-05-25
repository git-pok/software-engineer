import { Route, Switch, Redirect, useLocation } from 'react-router-dom';
import { useContext, useState } from 'react';
import JoblyCard from './JoblyCard.js';
// import DetailsCard from './DetailsCard.js';
import CompanyDetailsCard from './CompanyDetailsCard.js';
import JobDetailsCard from './JobDetailsCard.js';
import SearchBox from './SearchBox.js';
import LogInForm from './LogInForm.js';
import SignupForm from './SignupForm.js';
// import JoblyApi from './models/JoblyApi.js';
import JoblyContext from './context/JoblyContext.js';

const JoblyRoutes = ({ companies, jobs }) => {

  const [ details, setDetails ] = useState([]);
  const { userData } = useContext(JoblyContext);
  const userToken = userData ? userData.token : null;

  return (
    <Switch>
      <Route exact path="/">
        <h1>HOME</h1>
      </Route>
      { userToken ?
      <Route exact path="/companies">
        <SearchBox />
        <JoblyCard
          data={companies}
          title="Companies"
          setDetails={setDetails}
          />
      </Route>
      : null
      }
      { userToken ?
      <Route exact path="/jobs">
        <JoblyCard
          data={jobs}
          title="Jobs"
          jobs={true}
          setDetails={setDetails}
          />
      </Route>
      : null
      }
      <Route exact path="/profile">
        <h1>PROFILE</h1>
      </Route>
      <Route exact path="/users">
        <h1>USERS</h1>
      </Route>
      <Route exact path="/login">
        <h1>LOG IN</h1>
        <LogInForm />
      </Route>
      <Route exact path="/logout">
        <Redirect exact to="/" />
      </Route>
      <Route exact path="/signup">
        <h1>SIGN UP</h1>
        <SignupForm />
      </Route>
      <Route exact path="/companies/:handle">
        <CompanyDetailsCard
          data={details} />
      </Route>
      <Route exact path="/jobs/:id">
        <JobDetailsCard
          data={details} />
      </Route>
      <Route exact path="/users/:username">

      </Route>
      <Redirect to="/" />
    </Switch>
  );
}

export default JoblyRoutes;
