import { useContext } from "react";
import { useSelector, shallowEqual } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import ShoplyContext from "./context/ShoplyContext";
import './ShopCart.css';

const ShopCart = () => {

  const {
    addItemToCart,
    deleteItemFromCart
  } = useContext(ShoplyContext);

  const cartStore = useSelector(store => store.cart, shallowEqual);

  const cart = Object.values(cartStore.cart);
  const pricesXQty = cart.map(val => val.price * val.qty);
  const total = pricesXQty.length !== 0 ? pricesXQty.reduce((accu, nxt) => accu + nxt) : null;
  const totalRounded = total ? +total.toFixed(2) : 0;
  const shipNHandling = total ? 7 : 0;
  console.log("SHOP CART RAN");

  return (
    <>
    <div className="ShopCart">
      <div className="ShopCart-items-container">
        <h2>Cart Items</h2>
        {
          cart.map(val => (
            <div
              key={val.id}
              className="ShopCart-item">
              <img src={val.image_url}></img>
              <h2>{val.name}</h2>
              <p>Price: {val.price}</p>
              <p>Qty: {val.qty}</p>
              <p>{val.description}</p>
              <div className="ShopCart-icons">
                <FontAwesomeIcon
                className="ShopCart-fa-cart-plus"
                icon={faCartPlus}
                onClick={() => addItemToCart(val.id)} />
                <FontAwesomeIcon
                  className="ShopCart-fa-cart-minus"
                  icon={faMinus}
                  onClick={() => deleteItemFromCart(val.id)} />
              </div>  
            </div>
          ))
        }
      </div>
      <div className="ShopCart-summary">
      <h2>Summary</h2>
      <div className="ShopCart-summary-content">
        <p>Subtotal: {totalRounded}</p>
        <p>Shipping and Handling: { `$0${shipNHandling}.00` }</p>
        <hr></hr>
        <p>Total: { totalRounded + shipNHandling }</p>
      </div>
      </div>
    </div>
    </>
  );
}

export default ShopCart;
