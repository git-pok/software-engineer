import { useContext } from "react";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { useParams, Redirect } from "react-router-dom";
import ShoplyContext from "./context/ShoplyContext";
import './ProductDetails.css';

const ProductDetails = () => {

  const {addItemToCart, deleteItemFromCart, productsStore} = useContext(ShoplyContext);

  const { id } = useParams();

  const dispatch = useDispatch();
  const product = productsStore.filter(val => val.id === id)[0];
  if (!product) return <Redirect exact to="/" />;
  console.log("PRODUCT DETAILS RAN");

  return (
    <>
    <div className="ProductDetails">
          <div
            key={product.id}
            className="ProductDetails-container">
            <img src={product.image_url}></img>
            <h2>{product.name}</h2>
            <p>Price: {product.price}</p>
            <p>{product.description}</p>
            <div className="ProductDetails-icons">
              <FontAwesomeIcon
                className="ProductDetails-fa-cart-plus"
                icon={faCartPlus}
                onClick={() => addItemToCart(product.id)} />
              <FontAwesomeIcon
                className="ProductDetails-fa-cart-minus"
                icon={faMinus}
                onClick={() => deleteItemFromCart(product.id)} />
            </div>
          </div>
    </div>
    </>
  );
}

export default ProductDetails;
