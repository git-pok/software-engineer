import {NavLink} from 'react-router-dom';
// import './DogNav.css';

const DogProfile = ({ props }) => {
//   console.log(props);
  return (
    <>
        {
            props.dogs.map((val, idx) => {
                <div>
                <h3>NAME: {val.name}</h3>
                <h3>AGE: {val.age}</h3>
                <h3>FACTS:</h3>
                <ul>
                    <li>{val.facts}</li>
                </ul>
                </div>
            })
        }
    </>
  );
}

export default DogProfile;