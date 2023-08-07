import React from 'react';
import './Box.css'

const Box = ({ id, onRemove, width, height, backgroundColor }) => {
  const boxStyle = {
    width: `${width}px`,
    height: `${height}px`,
    backgroundColor: backgroundColor,
  };

  return (
    <div className="Box" style={boxStyle}>
      <button onClick={()=> onRemove(id)}>X</button>
    </div>
  );
};

export default Box;
