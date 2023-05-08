import { BrowserRouter, Route, NavLink } from 'react-router-dom';
import Navbar from './Navbar.js';
import LinkBox from './LinkBox.js';
import BackgroundImage from './BackgroundImage.js';
import Snack from './Snack.js';
import './VendingMachine.css';

const VendingMachine = () => {
  return (
    <main>
      <BrowserRouter>

        <Route exact path="/">
          <BackgroundImage
            img={{
                img: `https://images.unsplash.com/photo-
                1585341840941-98553e474d84?ixlib=rb-4.0
                .3&ixid=MnwxMjA3fDB8MHxwaG90byhttps:
                //images.unsplash.com/photo-1585341840941
                -98553e474d84?ixlib=rb-4.0.3&ixid=
                MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGV
                ufDB8fHx8&auto=format&fit=crop&w=1472&q=80`
             }} />
          <LinkBox
            links={[
                {route: "/worms", linkName: "WORMS"},
                {route: "/pretzels", linkName: "PRETZELS"},
                {route: "/twix", linkName: "TWIX"}
            ]} />
        </Route>

        <Route exact path="/worms">
          <Navbar links={[{route: "/", linkName: "HOME"}]} />
          <Snack name="Worms" img="https://images.unsplash.com/photo-1499195333224-3ce974eecb47?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80" />
        </Route>

        <Route exact path="/pretzels">
          <Navbar links={[{route: "/", linkName: "HOME"}]} />
          <Snack name="Pretzels" img="https://media4.giphy.com/media/XulKijZI11Hx8NA4mR/giphy.gif?cid=ecf05e47wknguiw70b33emgrd1s5rxin6xy3j7qjfs5ftlgx&ep=v1_gifs_search&rid=giphy.gif&ct=g" />
        </Route>

        <Route exact path="/twix">
          <Navbar links={[{route: "/", linkName: "HOME"}]} />
          <Snack name="Twix" img="https://i.giphy.com/media/ei9pMw3x3MYVhtlBla/giphy.webp" />
        </Route>

      </BrowserRouter>
    </main>
  );
}

export default VendingMachine;
