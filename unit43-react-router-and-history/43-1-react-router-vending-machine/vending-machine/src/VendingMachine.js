import { BrowserRouter, Route, NavLink } from 'react-router-dom';
import Navbar from './Navbar.js';
import Snack from './Snack.js';
import './VendingMachine.css';

const VendingMachine = () => {
  return (
    <main>
    <BrowserRouter>
      <Navbar links={[
            {route: "/", linkName: "HOME"},
            {route: "/mambas", linkName: "MAMBAS"},
            {route: "/pretzels", linkName: "PRETZELS"},
            {route: "/twix", linkName: "TWIX"}
      ]} />

      <Route exact path="/">
        <img src="https://i.giphy.com/media/VGDt57CysJa68fQ7Rd/giphy.webp"></img>
      </Route>

      <Route exact path="/mambas">
        <Snack name="Mambas" img="https://media0.giphy.com/media/W36qRrUjqYenJQ51nB/giphy.gif?cid=ecf05e47zjs8ey9y0mwa0pivbrti4kpikkbaau6riy0d8fec&ep=v1_gifs_search&rid=giphy.gif&ct=g" />
      </Route>

      <Route exact path="/pretzels">
        <Snack name="pretzels" img="https://media4.giphy.com/media/XulKijZI11Hx8NA4mR/giphy.gif?cid=ecf05e47wknguiw70b33emgrd1s5rxin6xy3j7qjfs5ftlgx&ep=v1_gifs_search&rid=giphy.gif&ct=g" />
      </Route>

      <Route exact path="/twix">
        <Snack name="Twix" img="https://i.giphy.com/media/ei9pMw3x3MYVhtlBla/giphy.webp" />
      </Route>

    </BrowserRouter>
    </main>
  );
}

export default VendingMachine;
