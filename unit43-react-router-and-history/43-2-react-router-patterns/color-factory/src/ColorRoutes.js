import {
    Route, Switch, Redirect 
} from 'react-router-dom';
import useLocalStorage from './hooks/useLocalStorage.js';
import ColorForm from './ColorForm.js';
import ColorList from './ColorList.js';


const ColorRoutes = () => {

    const [ colors, setColors ] = useLocalStorage("colors", ["red"]);

    const addColor = color => {
        setColors(colors => ([
            color, ...colors 
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