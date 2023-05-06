import { BrowserRouter, Route, NavLink } from 'react-router-dom@5.2.1';
import Snack from './Snack.js';
import './VendingMachine.css';

const VendingMachine = () => {
  return (
    <>
    <BrowserRouter>
      <nav>
        <NavLink />
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
    <h1>VendingMachine COMPONENT</h1>
    </>
  );
}

export default VendingMachine;
