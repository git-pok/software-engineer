import { Link } from 'react-router-dom';
import './DogList.css';


const DogList = ({ dogData }) => {

  return (
    <>
    <h1 className="DogList-h1">DOGS</h1>
    <div className="DogList">
        {
            dogData.dogs.map((val, idx) => (
              <div
                key={`${val.name} content-container`}
                className="DogList-content-container">
                <div className="DogList-content">
                  <img src={val.src}></img>
                  <div className="DogList-text">
                    <Link
                        key={idx}
                        exact="true"
                        to={`/dogs/${val.name}`}>{val.name}</Link>
                  </div>
                </div>
              </div>
            ))
        }
    </div>
    </>
  );
}

export default DogList;