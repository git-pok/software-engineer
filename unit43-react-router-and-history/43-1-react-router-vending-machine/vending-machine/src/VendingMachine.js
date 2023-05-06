import { BrowserRouter, Route, NavLink } from 'react-router-dom';
import Snack from './Snack.js';
import './VendingMachine.css';

const VendingMachine = () => {
  return (
    <main>
    <BrowserRouter>
      <nav className="VendingMachine-nav">
        <NavLink exact to="/">HOME</NavLink>
        <NavLink exact to="/SNACKI">SNACKI</NavLink>
        <NavLink exact to="/SNACKII">SNACKII</NavLink>
      </nav>

      <Route exact path="/">
        <Snack />
      </Route>

      <Route exact path="/">
        <Snack />
      </Route>

      <Route exact path="/">
        <Snack />
      </Route>

      <Route exact path="/">
        <Snack />
      </Route>

    </BrowserRouter>
    </main>
  );
}

export default VendingMachine;
