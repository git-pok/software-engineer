import {
    Route, Switch, Redirect 
} from 'react-router-dom';
import useLocalStorage from './hooks/useLocalStorage.js';
import ColorForm from './ColorForm.js';
import ColorList from './ColorList.js';
import ColorDetail from './ColorDetail.js';


const ColorRoutes = () => {

    const [ colors, setColors ] = useLocalStorage("colors", ["red", "blue"]);

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

            <Route exact path="/colors/:id">
                <ColorDetail />
            </Route>

            <Redirect to="/colors" />
        </Switch>
    );
}

export default ColorRoutes; 