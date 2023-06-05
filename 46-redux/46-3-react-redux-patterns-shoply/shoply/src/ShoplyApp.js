// import ShopList from "./ShopList";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { addToCart, deleteFromCart } from "./actions/actions";
import Navbar from "./Navbar";
import Routes from "./Routes";
import ShoplyContext from "./context/ShoplyContext";
// import './ShoplyApp.css';

const ShoplyApp = () => {

  const dispatch = useDispatch();
  const productsStore = useSelector(store => store.products, shallowEqual);
  const cartStore = useSelector(store => store.cart, shallowEqual);
  
  const addItemToCart = id => {
    const clickedItem = productsStore.filter(val => val.id === id);
    dispatch(addToCart(clickedItem[0]));
  };

  const deleteItemFromCart = id => {
    dispatch(deleteFromCart(id));
  };

  return (
    <>
      <ShoplyContext.Provider
        value={
          { addItemToCart, deleteItemFromCart, productsStore}
        }>
        <Navbar />
        <Routes />
      </ShoplyContext.Provider>
    </>
  );
}

export default ShoplyApp;
