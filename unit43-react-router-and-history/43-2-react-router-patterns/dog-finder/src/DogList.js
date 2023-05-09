import { Link } from 'react-router-dom';
import './DogList.css';

const DogList = ({ props }) => {

  return (
    <>
    <h1 className="DogList-h1">DOGS</h1>
    <div className="DogList">
        {
            props.dogs.map((val, idx) => (
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