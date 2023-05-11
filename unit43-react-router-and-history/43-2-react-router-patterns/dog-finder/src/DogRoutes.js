import {
  Route, Switch, Redirect, useLocation
} from 'react-router-dom';
import DogProfile from './DogProfile.js';
import DogList from './DogList.js';


const DogRoutes = ({ dogData }) => {

  const { pathname } = useLocation();
  const dogNameParam = pathname.slice(6);

  const findDog = (name) => (
    dogData.dogs.filter(val => (
      val.name === name
    ))
  )

  const pathLen = pathname.length;
  const dog = pathLen > 6 ? findDog(dogNameParam) : null;

  return (
    <Switch>
        <Route exact path="/dogs">
            <DogList dogData={dogData} />
        </Route>

        <Route exact path="/dogs/:name">
            <DogProfile dog={dog} />
        </Route>

        <Redirect to="/dogs" />
    </Switch>
  );
}

export default DogRoutes;