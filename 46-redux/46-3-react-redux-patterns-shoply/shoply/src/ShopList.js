import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { addToCart, deleteFromCart } from "./actions/actions";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import './ShopList.css';

const ShopList = () => {
  // console.log("COMP ACTIONS", addToCart, deleteFromCart);
  // const store = useSelector(store => store, shallowEqual);
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
  console.log("COMP RAN");
  // console.log("Store", store);
  // console.log("productsStore", productsStore);
  // console.log("cartStore", cartStore);
  return (
    <>
    <div className="ShopList">
      {
        productsStore.map(val => (
          <div
            key={val.id}
            className="ShopList-container">
            <img src={val.image_url}></img>
            <h2>{val.name}</h2>
            <p>Price: {val.price}</p>
            <p>{val.description}</p>
            <Link
              exact
              to={`/products/${val.id}`}
              className="ShopList-button">
              CLICK FOR DETAILS
            </Link>
            <div className="ShopList-icons">
              <FontAwesomeIcon
                className="ShopList-fa-cart-plus"
                icon={faCartPlus}
                onClick={() => addItemToCart(val.id)} />
              <FontAwesomeIcon
                className="ShopList-fa-cart-minus"
                icon={faMinus}
                onClick={() => deleteItemFromCart(val.id)} />
            </div>
          </div>
        ))
      }
    </div>
    </>
  );
}

export default ShopList;
