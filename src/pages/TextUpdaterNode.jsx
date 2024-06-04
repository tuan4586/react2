import { useCallback, useState } from 'react';
import { Handle, Position } from 'reactflow';
import {eel} from "../services/eel"
const handleStyle = { left: 170 };

function TextUpdaterNode({ data, isConnectable }) {
  const onChange = useCallback((evt) => {
    console.log("TextUpdaterNode value"+evt.target.value);
    console.log("TextUpdaterNode data"+data);
  }, []);

  return (
    <div className="text-updater-node">
      <Handle type="target" position={Position.Left} isConnectable={isConnectable} />
      <div> 
        <div className='flex items-center justify-center'>{data.label}</div>
        
        <div onChange={onChange} className='h- w-40' />
      </div>
      <Handle
        type="source"
        position={Position.Right}
        id="a"
        style={handleStyle}
        isConnectable={isConnectable}
      />
      
    </div>
  );
}

export default TextUpdaterNode;
