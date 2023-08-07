import React, { useState } from 'react';
import Box from './Box';
import { v4 as uuid } from 'uuid';
import NewBoxForm from './forms/NewBoxForm';

const BoxList = () => {
  const [boxes, setBoxes] = useState([]);

  const addBox = (boxData) => {
    setBoxes([...boxes, {...boxData, id:uuid()}]);
  };

  const removeBox = (id) => {
    const newBoxes = [...boxes];
    setBoxes(newBoxes.filter(item => item.id !== id));
  };

  return (
    <div>
      <NewBoxForm addBox={addBox} />
      {boxes.map((box) => (
        <Box
          id={box.id}
          key={box.id}
          width={box.width}
          height={box.height}
          backgroundColor={box.backgroundColor}
          onRemove={removeBox}
        />
      ))}
    </div>
  );
};

export default BoxList;
