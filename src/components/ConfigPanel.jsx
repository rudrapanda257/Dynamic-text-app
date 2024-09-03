import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTextBox } from '../features/textBoxSlice';
import { v4 as uuidv4 } from 'uuid';
import './styles.css'; // Import the CSS file

const ConfigPanel = () => {
  const dispatch = useDispatch();
  const [width, setWidth] = useState(200);
  const [height, setHeight] = useState(50);
  const [color, setColor] = useState('#000000');

  const handleAddTextBox = () => {
    const newTextBox = {
      id: uuidv4(),
      text: 'Text Sample',
      left: 100,
      top: 50,
      width: parseInt(width, 10),
      height: parseInt(height, 10),
      color: color,
   
    };
    dispatch(addTextBox(newTextBox));
  };

  return (
    <div className="config-panel">
      <button
        className="add-text-button"
      
      // style={{
      //     position: 'relative',
      //     width: '100%',
      //     height: '100%',
      //     border: '1px solid white',
      //     cursor: 'Pointer',
      //     padding: '5px',
      //     display: 'flex',
      //     alignItems: 'center',
      //     justifyContent: 'center',
      //     backgroundColor: 'green', // Ensure the background is transparent
      //     hover: 'red',
      //     color: color, // Set text color
      //   }}
        onClick={handleAddTextBox}>Add Text</button>
      <br />
      <div  className="input-group">
        <label>
          Width:
          <input
            type="number"
            value={width}
            onChange={(e) => setWidth(e.target.value)}
          />
        </label>
        <br />
        <label>
          Height:
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </label>
        <label>
          Text Color:
          <input
            type="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
        </label>
      </div>
    </div>
  );
};

export default ConfigPanel;
