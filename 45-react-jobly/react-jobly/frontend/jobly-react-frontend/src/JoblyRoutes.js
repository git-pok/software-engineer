import { Route, Switch, Redirect } from 'react-router-dom';
import JoblyCard from './JoblyCard.js';
import SearchBox from './SearchBox.js';
import LogInForm from './LogInForm.js';

const JoblyRoutes = ({ companies, jobs }) => {

  // console.log("CO", companies);
  return (
    <Switch>
      <Route exact path="/">
        <h1>HOME</h1>
      </Route>
      <Route exact path="/companies">
        <SearchBox />
        <JoblyCard data={companies} title="Companies" />
      </Route>
      <Route exact path="/jobs">
        <JoblyCard data={jobs} title="Jobs" />
      </Route>
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
        <h1>LOG OUT</h1>
      </Route>
      <Route exact path="/signup">
        <h1>SIGN UP</h1>
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
