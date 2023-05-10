import { Link } from 'react-router-dom';

const ColorList = (props) => {
    console.log(props);
    return (
        props.map(val => (
            <div className="ColorList-content-container">
                <div
                    className="ColorList-content"
                    style={{backgroundColor: val.color}}>
                    <div className="ColorList-text">
                        <Link exact to={`/colors/${val.color}`}>
                           {val.color} 
                        </Link>
                    </div>
                </div>
            </div>
        ))
    );
}

ColorList.defaultProps = [
    {color: "red"}
]

export default ColorList; 