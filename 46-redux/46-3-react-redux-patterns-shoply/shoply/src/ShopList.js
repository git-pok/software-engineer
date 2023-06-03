import { useSelector, shallowEqual } from "react-redux";
// import './ShopList.css';

const ShopList = () => {
  const state = useSelector(store => store.products, shallowEqual);
  console.log("STATE", state);
  const values = state.map(val => console.log(val.name));
  return (
    <>
    <div className="ShopList">
      {
        state.map(val => (
          <div key={val.id}>
          <h2>{val.name}</h2>
          <img src={val.image_url}></img>
          <p>{val.description}</p>
          </div>
        ))
      }
    </div>
    </>
  );
}

export default ShopList;
