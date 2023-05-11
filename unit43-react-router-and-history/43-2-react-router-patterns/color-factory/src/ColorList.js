import { Link } from 'react-router-dom';
import './ColorList.css';


const ColorList = ({ colorArray }) => {
    
    return (
        <>
        <div className="ColorList-link">
            <Link exact="true" to="/colors/new">
                ADD NEW COLOR
            </Link>
        </div>

        <div className="ColorList">
        {
            colorArray.map((val, idx) => (
                <div
                    key={idx}
                    className="ColorList-content-container">
                    <div
                        className="ColorList-content"
                        style={{backgroundColor: `#${val}`}}>
                        <div className="ColorList-text">
                            <Link exact="true" to={`/colors/${val}`}>
                                {`#${val}`} 
                            </Link>
                        </div>
                    </div>
                </div>
            ))
        }
        </div>
        </>
    );
}

export default ColorList; 