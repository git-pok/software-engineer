import {useParams} from 'react-router-dom';

const ColorDetail = () => {
    const { color } = useParams();
    
    return (
        <h1>{color}</h1>
    );
}

export default ColorDetail;