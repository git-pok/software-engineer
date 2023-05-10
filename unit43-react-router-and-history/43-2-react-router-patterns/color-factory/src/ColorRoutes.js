import {
    Route, Switch, Redirect 
} from 'react-router-dom';

const ColorRoutes = () => {
    return (
        <Switch>
            <Route exact path="/colors">
                <h1>COLORS</h1>
            </Route>

            <Route exact path="/colors/:color">
                <h1>COLOR</h1>
            </Route>
        </Switch>
    );
}

export default ColorRoutes; 