import React from 'react';
import { Handle } from 'reactflow';

const CustomNode = ({ data }) => {
  const handleClick = async () => {
    if (data.functionName) {
      const result = await window.eel[data.functionName](data.label)();
      alert(result);
    }
  };

  return (
    <div onClick={handleClick} style={{ padding: 10, border: '1px solid black', borderRadius: 5 }}>
      <Handle type="target" position="top" />
      <div>{data.label}</div>
      <Handle type="source" position="bottom" />
    </div>
  );
};

export default CustomNode;
