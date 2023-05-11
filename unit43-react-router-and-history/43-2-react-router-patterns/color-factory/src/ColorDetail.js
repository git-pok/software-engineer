import {useParams} from 'react-router-dom';
import './ColorDetail.css';

const ColorDetail = () => {
    const { color } = useParams();

    return (
        <div
            style={{backgroundColor: `#${color}`}}
            className="ColorDetail">
            <h1>Color: {`#${color}`}</h1>
        </div>
    );
}

export default ColorDetail;