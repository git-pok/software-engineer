import { Link } from 'react-router-dom';

const ColorList = (props) => {
    console.log(props);
    return (
        props.dogs.map((val, idx) => (
            <div
                key={idx}
                className="ColorList-content-container">
                <div
                    className="ColorList-content"
                    style={{backgroundColor: val.color}}>
                    <div className="ColorList-text">
                        <Link exact="true" to={`/colors/${val.color}`}>
                           {val.color} 
                        </Link>
                    </div>
                </div>
            </div>
        ))
    );
}

ColorList.defaultProps = { 
    dogs: [
        {color: "red"}
    ]
}

export default ColorList; 