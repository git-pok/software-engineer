import { useState } from 'react';
import axios from "axios";


const useAxios = (url) => {
  const [ state, setState ] = useState(() => {
    useEffect(() => {
      const addApiData = async (url) => {
        try {
          const response = await axios.get(url);
          setState(state => [...state, { ...response.data, id: uuid() }]);
        } catch(err) {
          throw new Error(`ERROR!!! \n${err}`);
        }
      }
  
      addApiData();
  
    }, [url])
  });

  return [ state, setState ];
}

export default useAxios;