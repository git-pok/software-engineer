import { Route, Switch, Redirect } from 'react-router-dom';
import { useContext} from 'react';
import JoblyCard from './JoblyCard.js';
import SearchBox from './SearchBox.js';
import LogInForm from './LogInForm.js';
import SignupForm from './SignupForm.js';
// import JoblyApi from './models/JoblyApi.js';
import JoblyContext from './context/JoblyContext.js';

const JoblyRoutes = ({ companies, jobs }) => {

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
        <JoblyCard data={companies} title="Companies" />
      </Route>
      : null
      }
      { userToken ?
      <Route exact path="/jobs">
        <JoblyCard data={jobs} title="Jobs" />
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
        <LogInForm redirect="/" />
      </Route>
      <Route exact path="/logout">
        <Redirect exact to="/" />
      </Route>
      <Route exact path="/signup">
        <h1>SIGN UP</h1>
        <SignupForm />
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
