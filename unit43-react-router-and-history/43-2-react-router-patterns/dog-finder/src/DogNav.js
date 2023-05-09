import {BrowserRouter, Route, NavLink} from 'react-router-dom';
import './DogNav.css';

const DogNav = (props) => {
//   const src = props.dogs[2].src;
  return (
    <>
    <nav>
        {
            props.map(val => (
                <NavLink exact to={val.name}>{val.name}</NavLink>
            ))
        }
    </nav>
    <img src={src}></img>
    </>
  );
}

export default DogNav;