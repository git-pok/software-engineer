import {Link} from 'react-router-dom';
// import './DogList.css';

const DogList = ({ props }) => {

  return (
    <>
        <h1>DOGS</h1>
        {
            props.dogs.map((val, idx) => (
                <Link
                    key={idx}
                    exact
                    to={`/dogs/${val.name}`}>{val.name}</Link>
            ))
        }
    </>
  );
}

export default DogList;