import { useParams } from 'react-router-dom';


const GetParams = ({ props }) => {

    const { name } = useParams();

    const dog = props.dogs.filter(val => (
        val.name === name
    ))

    return (
        <>
            {
                findDog.map((val, idx) => (
                
                    <div key={val.name} className="DogProfile">
                        <img src={val.src}></img>
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