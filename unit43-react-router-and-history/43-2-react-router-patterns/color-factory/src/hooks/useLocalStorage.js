import { useState, useEffect } from 'react';

const useLocalStorage = (key, defaultValue) => {
    const [ state, setState ] = useState(() => {
        const value = JSON.parse(
                                    window.localStorage
                                    .getItem(key)
                                    || defaultValue
                                )
        return value;
    });

    useEffect(() => {
        window.localStorage.setItem(key, state);
    }, [key, state]);

    return [ state, setState];
}

export default useLocalStorage; 