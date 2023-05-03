import { useState, useEffect } from 'react';
import axios from "axios";
import {v4 as uuid} from 'uuid';


const useAxios = (url) => {
  const [ state, setState ] = useState([]);

  const addCardApiData = async () => {
    // url will be undefined if passed into
    // the async function's arguments.
    try {
      const response = await axios.get(url);
      setState(state => [...state, { ...response.data, id: uuid() }]);
    } catch(err) {
      throw new Error(`ERROR!!! \n${err}`);
    }
  }

  return [ state, addCardApiData ];
}

export default useAxios;