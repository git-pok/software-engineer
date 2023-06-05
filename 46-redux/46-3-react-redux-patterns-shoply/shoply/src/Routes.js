import { Switch, Redirect, Route, useParams } from "react-router-dom";
import ShopList from "./ShopList";
import ProductDetails from "./ProductDetails";
// import './Routes.css';

const Routes = () => {

  const id = useParams();
  console.log(id);

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
