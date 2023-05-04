import { useState } from 'react';
import axios from "axios";
import {v4 as uuid} from 'uuid';

// Function: useAxios()
// Arguments: url, endpoint boolean.
// Logic:
// If !endpoint, returns function for URL.
// Else, returns function for URL and endpoint.
// Returns state and function that sets state.
// State: Array of API data objects.
// State Function: adds API data object to Array.
const useAxios = (url, endpoint=false) => {
  const [ state, setState ] = useState([]);

  // Function: addCardApiData()
  // Arguments: API URL endpoint.
  // Logic:
  // makes request to endpoint,
  // sets state with data object.
  const addCardApiData = async (endpoint=false) => {
        try {
            const BASE_URL = url;
            const response = !endpoint ? await axios.get(url) : await axios.get(`${BASE_URL}${endpoint}`);
            setState(state => [...state, { ...response.data, id: uuid() }]);
        } catch(err) {
            throw new Error(`ERROR!!! \n${err}`);
        }
  }

  return [ state, addCardApiData ];

}


export default useAxios;