import { Switch, Redirect, Route } from "react-router-dom";
import ShopList from "./ShopList";
import ProductDetails from "./ProductDetails";
// import './Routes.css';

const Routes = () => {

  return (
    <>
    <Switch>
      <Route exact path="/">
        <ShopList />
      </Route>

      <Route exact path="/products/:id">
        <ProductDetails />
      </Route>
      <Redirect exact to="/" />
    </Switch>
    </>
  );
}

export default Routes;
