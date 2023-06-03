import { useSelector, shallowEqual } from "react-redux";
import './ShopList.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

const ShopList = () => {
  const state = useSelector(store => store.products, shallowEqual);
  console.log("STATE", state);
  const values = state.map(val => console.log(val.name));
  return (
    <>
    <div className="ShopList">
      {
        state.map(val => (
          <div
            key={val.id}
            className="ShopList-container">
            <img src={val.image_url}></img>
            <h2>{val.name}</h2>
            <p>Price: {val.price}</p>
            <p>{val.description}</p>
            <div className="ShopList-buttons">
              <FontAwesomeIcon className="ShopList-fa-cart-plus" icon={faCartPlus} />
              <FontAwesomeIcon className="ShopList-fa-cart-minus" icon={faMinus} />
            </div>
          </div>
        ))
      }
    </div>
    </>
  );
}

export default ShopList;
