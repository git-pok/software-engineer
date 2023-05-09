import { Route, Switch, useParams } from 'react-router-dom';
// import './DogNav.css';

const DogProfile = ({ props }) => {

    const { name } = useParams();

    const findDog = props.dogs.filter(val => (
        val.name === name
    ))

    return (
        <>
            {
                findDog.map((val, idx) => (
                
                    <div key={val.name}>
                        <h3>NAME</h3>
                        <p>{val.name}</p>
                        <h3>AGE</h3>
                        <p>{val.age}</p>
                        <h3>FACTS</h3>
                        <ul>
                            {
                                val.facts.map((val, idx) => (
                                    <li key={idx}>{val}</li>
                                ))
                            }
                        </ul>
                    </div>
                ))
            }
        </>
  );
}

export default DogProfile;