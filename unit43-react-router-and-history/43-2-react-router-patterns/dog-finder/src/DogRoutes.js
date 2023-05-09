import {
  Route, Switch, Redirect, useParams
} from 'react-router-dom';
import DogProfile from './DogProfile.js';
import DogList from './DogList.js';


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