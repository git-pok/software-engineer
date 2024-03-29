import { useContext } from "react";
import { useSelector, shallowEqual } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import ShoplyContext from "./context/ShoplyContext";
import './ShopList.css';

const ShopList = () => {

  const { addItemToCart, deleteItemFromCart } = useContext(ShoplyContext);
  const productsStore = useSelector(store => store.products, shallowEqual);
  console.log("SHOPLY LIST RAN");
  
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
              exact="true"
              to={`/products/${val.id}`}
              className="ShopList-button">
              CLICK FOR DETAILS
            </Link>
            <div className="ShopList-icons">
            <FontAwesomeIcon
                className="ShopList-fa-cart-minus"
                icon={faMinus}
                onClick={() => deleteItemFromCart(val.id)} />
              <FontAwesomeIcon
                className="ShopList-fa-cart-plus"
                icon={faCartPlus}
                onClick={() => addItemToCart(val.id)} />
            </div>
          </div>
        ))
      }
    </div>
    </>
  );
}

export default ShopList;
