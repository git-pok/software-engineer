import { Link } from 'react-router-dom';


const ColorList = ({ colorArray }) => {
    
    return (
        <>
        <Link exact="true" to="/colors/new">
            ADD NEW COLOR
        </Link>
        {
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
        }
        </>
    );
}

export default ColorList; 