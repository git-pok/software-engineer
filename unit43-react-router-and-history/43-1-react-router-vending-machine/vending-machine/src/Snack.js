import './Snack.css';

const Snack = ({ name, img, snackInfo }) => {
  
  return (
    <div className="Snack">
      <h1 className="Snack-h1">{name}</h1>
      <img className="Snack-img" src={img} />
      <ul>
          <li>COMPANY: {snackInfo.company ? snackInfo.company : "Not Available"}</li>
          <li>PRICE: {snackInfo.price ? snackInfo.price : "No Price"}</li>
          <li>CALORIES: {snackInfo.calories ? snackInfo.calories : "No Calories"}</li>
      </ul>
    </div>
  );
}

export default Snack;
