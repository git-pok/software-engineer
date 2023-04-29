import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import './BoxList.css';
import Box from './Box.js';
import NewBoxForm from './NewBoxForm.js';

// BoxList - Place your state that contains
// all of the boxes here. This component should
// render all of the Box components along
// with the NewBoxForm component

const BoxList = () => {

  // const INITIAL_STATE = {
  //   id: uuid(),
  //   backgroundColor: "DarkGoldenRod",
  //   width: "240px",
  //   height: "240px"
  // };

  const [ boxes, setBoxes ] = useState([]);

  const addBox = (newBox) => (
    setBoxes(boxes => [...boxes, newBox ])
  );

  const removeBox = (id) => (
    setBoxes(boxes.filter(n => n.id !== id))
  );

  const useStateLen = boxes.length; 

  return (
    <>
      <NewBoxForm addBox={addBox} />
      <h1 className="BoxList-h1">Boxes</h1>
      { useStateLen ?
        boxes.map((box, idx)=> (
        <Box
          key={idx}
          boxId={box.id}
          removeBox={removeBox}
          backgroundColor={box.backgroundColor}
          width={box.width}
          height={box.height} />
        )) : null
      }
    </>
  );
}

export default BoxList;
