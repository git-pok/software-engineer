import {
    Route, Switch, Redirect 
} from 'react-router-dom';
import ColorForm from './ColorForm.js';
import ColorList from './ColorList.js';


const ColorRoutes = () => {
    return (
        <Switch>
            <Route exact path="/colors">
                <ColorList />
            </Route>

            <Route exact path="/colors/new">
                <ColorForm />
            </Route>

            <Route exact path="/colors/:color">
                <h1>COLOR</h1>
            </Route>

            <Redirect to="/colors" />
        </Switch>
    );
}

export default ColorRoutes; 