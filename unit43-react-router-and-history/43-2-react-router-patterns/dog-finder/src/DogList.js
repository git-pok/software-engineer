import {Link} from 'react-router-dom';
// import './DogList.css';

const DogList = ({ props }) => {

  return (
    <>
        <div>
        {
            props.dogs.map((val, idx) => (
                <Link exact to={`/dogs/${val.name}`}>{val.name}</Link>
            ))
        }
        </div>
    </>
  );
}

export default DogList;