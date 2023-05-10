import { useState } from 'react';

const useToggle = (boolean) => {
    const [ state, setState ] = useState(boolean);

    const toggleState = () => {
        setState(state => !state)
    }

    return [ state, toggleState];
}

export default useToggle; 