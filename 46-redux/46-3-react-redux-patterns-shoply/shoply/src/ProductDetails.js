import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { addToCart, deleteFromCart } from "./actions/actions";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import './ProductDetails.css';

const ProductDetails = () => {

  const { id } = useParams();
  console.log(id);

  const dispatch = useDispatch();
  const products = useSelector(store => store.products, shallowEqual);
  const product = products.filter(val => val.id === id)[0];
  // const cartStore = useSelector(store => store.cart, shallowEqual);
  // console.log("PRODUCT", product);
  const addItemToCart = id => {
    dispatch(addToCart(product));
  };

  const deleteItemFromCart = id => {
    dispatch(deleteFromCart(id));
  };

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
