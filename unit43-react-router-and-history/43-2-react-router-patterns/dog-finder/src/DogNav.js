import {NavLink} from 'react-router-dom';
// import './DogNav.css';

const DogNav = ({ props }) => {
//   console.log(props);
  return (
    <>
    <nav>
        <NavLink exact to="/dogs">
            Home
        </NavLink>
        {/* {
            props.dogs.map((val, idx) => (
                <NavLink
                    exact
                    to={val.name.toLowerCase()}
                    key={idx}
                >
                    {val.name}
                </NavLink>
            ))
        } */}
    </nav>
    {/* <img src={src}></img> */}
    </>
  );
}

export default DogNav;