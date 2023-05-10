import { Link } from 'react-router-dom';


const ColorList = ({ colorArray }) => {
    
    // console.log("COLORS", colors);
    return (
        colorArray.map((val, idx) => (
            <div
                key={idx}
                className="ColorList-content-container">
                <div
                    className="ColorList-content"
                    style={{backgroundColor: val}}>
                    <div className="ColorList-text">
                        <Link exact="true" to={`/colors/${val}`}>
                           {val} 
                        </Link>
                    </div>
                </div>
            </div>
        ))
    );
}

ColorList.defaultProps = { 
    preSetColors: [
        {color: "red"}
    ]
}

export default ColorList; 