import { useState, useEffect } from 'react';

const useLocalStorage = (key, value) => {
    const [ state, setState ] = useState(() => {
        const value = JSON.parse(
                                    window.localStorage
                                    .getItem(key)
                                    || value
                                )
        return value;
    });

    useEffect(() => {
        window.localStorage.setItem(key, state);
    }, [key, state]);

    return [ state, setState];
}

export default useLocalStorage; 