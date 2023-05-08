import { useState } from 'react';

const useToggle = () => {
  const [ state, setState ] = useState(true);

  const toggleState = () => {
    setState(state => !state)
  }
  return (
    [ state, toggleState]
  );
}

export default useToggle;
