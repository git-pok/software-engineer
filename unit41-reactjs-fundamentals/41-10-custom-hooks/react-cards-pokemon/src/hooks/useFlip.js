import { useState } from 'react';


// Function: useFlip()
// Arguments: none.
// Logic:
// Returns state and function that sets state.
// State: Boolean.
// State Function: toggles Boolean.
const useFlip = () => {
  const [ state, setState ] = useState(true);

  const toggleState = () => {
    setState(state => !state);
  }

  return [ state, toggleState ];
}

export default useFlip;