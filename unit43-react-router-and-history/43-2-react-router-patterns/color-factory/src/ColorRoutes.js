import {
    Route, Switch, Redirect 
} from 'react-router-dom';
import { useState } from 'react';
import ColorForm from './ColorForm.js';
import ColorList from './ColorList.js';


const ColorRoutes = () => {
    const [ colors, setColors ] = useState([]);

    const addColor = color => {
        setColors(colors => ([
            ...colors, color
        ]));
    }

    return (
        <Switch>
            <Route exact path="/colors">
                <ColorList colorArray={colors} />
            </Route>

            <Route exact path="/colors/new">
                <ColorForm addColor={addColor} />
            </Route>

            <Route exact path="/colors/:color">
                <h1>COLOR</h1>
            </Route>

            <Redirect to="/colors" />
        </Switch>
    );
}

export default ColorRoutes; 