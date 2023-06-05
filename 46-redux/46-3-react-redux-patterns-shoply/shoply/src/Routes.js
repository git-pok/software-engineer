import { Switch, Redirect, Route } from "react-router-dom";
import ShopList from "./ShopList";
import ShopCart from "./ShopCart";
import ProductDetails from "./ProductDetails";


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

      <Route exact path="/cart">
        <ShopCart />
      </Route>

      <Redirect exact to="/" />
    </Switch>
    </>
  );
}

export default Routes;
