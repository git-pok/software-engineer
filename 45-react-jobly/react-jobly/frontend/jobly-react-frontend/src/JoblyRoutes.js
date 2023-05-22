import { Route, Switch, Redirect } from 'react-router-dom';

const JoblyRoutes = () => {
  return (
    <Switch>
      <Route exact path="/">

      </Route>
      <Route exact path="/companies">

      </Route>
      <Route exact path="/jobs">

      </Route>
      <Route exact path="/users">

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
