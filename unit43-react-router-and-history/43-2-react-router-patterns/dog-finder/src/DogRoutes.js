import {Route, Switch, useParams} from 'react-router-dom';
// import './DogNav.css';

const DogRoutes = ({ props }) => {

const { name } = useParams();
console.log("URL PARAMS", name); 
  return (
    <Switch>
        <Route exact path="/dogs">
            <DogList />
        </Route>

        <Route exact path="/dogs/:name">
            <DogProfile name={name} />
        </Route>
    </Switch>
  );
}

export default DogRoutes;