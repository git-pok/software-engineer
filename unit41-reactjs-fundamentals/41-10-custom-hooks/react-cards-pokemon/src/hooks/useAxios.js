import { useState } from 'react';
import axios from "axios";
import {v4 as uuid} from 'uuid';

// Function: useAxios()
// Arguments: url, endpoint boolean.
// Logic:
// If !endpoint, returns function for URL.
// Else, returns function for URL and endpoint.
// Returns state and function that sets state.
const useAxios = (url, endpoint=false) => {
  const [ state, setState ] = useState([]);

  if (!endpoint) {
    const addCardApiData = async () => {
      // Function: addCardApiData()
      // Arguments: none.
      // Logic:
      // makes request to endpoint,
      // sets state with data object.

      // url will be undefined if passed into
      // the async function's arguments.
      // console.log("URL", url);
        try {
          const response = await axios.get(url);
          setState(state => [...state, { ...response.data, id: uuid() }]);
        } catch(err) {
          throw new Error(`ERROR!!! \n${err}`);
        }
    }

    return [ state, addCardApiData ];

  } else {
    const addCardApiData = async (endpoint) => {
      // Function: addCardApiData()
      // Arguments: API URL endpoint.
      // Logic:
      // makes request to endpoint,
      // sets state with data object.
        try {
          const BASE_URL = url;
          const response = await axios.get(`${BASE_URL}${endpoint}`);
          setState(state => [...state, { ...response.data, id: uuid() }]);
        } catch(err) {
          throw new Error(`ERROR!!! \n${err}`);
        }
    }
    return [ state, addCardApiData ];
  }
}

export default useAxios;