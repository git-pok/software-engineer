import { Route, Switch, Redirect } from 'react-router-dom';
import { useState, useEffect } from 'react';
import JoblyCard from './JoblyCard.js';
import JoblyApi from './models/JoblyApi.js';

const JoblyRoutes = () => {

  const [ companies, setCompanies ] = useState(null);

  useEffect(() => {
    async function getCompanies (url) {
      const results = await JoblyApi.getCompany(url);
      // console.log(results[0]);
      setCompanies(data => [results.companies]); 
    }

    getCompanies("companies");
  }, [])

  // console.log("CO", companies);
  return (
    <Switch>
      <Route exact path="/">
        <h1>HOME</h1>
      </Route>
      <Route exact path="/companies">
        <JoblyCard companies={companies} />
      </Route>
      <Route exact path="/jobs">
        <h1>JOBS</h1>
      </Route>
      <Route exact path="/profile">
        <h1>PROFILE</h1>
      </Route>
      <Route exact path="/users">
        <h1>USERS</h1>
      </Route>
      <Route exact path="/login">
        <h1>LOG IN</h1>
      </Route>
      <Route exact path="/companies/:handle">

      </Route>
      <Route exact path="/jobs/:id">

      </Route>
      <Route exact path="/users/:username">

      </Route>
      <Redirect to="/" />
    </Switch>
  );
}

export default JoblyRoutes;
