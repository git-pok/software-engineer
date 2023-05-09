import { Route, Switch, Redirect } from 'react-router-dom';
import DogProfile from './DogProfile.js';
import DogList from './DogList.js';
// import './DogNav.css';

const DogRoutes = ({ props }) => {

  return (
    <Switch>
        <Route exact path="/dogs">
            <DogList props={props} />
        </Route>

        <Route exact path="/dogs/:name">
            <DogProfile props={props} />
        </Route>

        <Redirect to="/dogs" />
    </Switch>
  );
}

export default DogRoutes;