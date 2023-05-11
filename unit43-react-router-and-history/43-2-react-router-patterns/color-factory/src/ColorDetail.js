import {useParams} from 'react-router-dom';

const ColorDetail = () => {
    const { id } = useParams();

    return (
        <h1>{id}</h1>
    );
}

export default ColorDetail;