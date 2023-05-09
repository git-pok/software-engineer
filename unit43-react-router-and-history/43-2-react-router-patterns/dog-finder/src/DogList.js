import {Link} from 'react-router-dom';
import './DogList.css';

const DogList = ({ props }) => {

  return (
    <div className="DogList">
        <h1>DOGS</h1>
        {
            props.dogs.map((val, idx) => (
                <Link
                    key={idx}
                    exact="true"
                    to={`/dogs/${val.name}`}>{val.name}</Link>
            ))
        }
    </div>
  );
}

export default DogList;