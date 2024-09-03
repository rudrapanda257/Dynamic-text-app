import React, { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { updateTextBox, deleteTextBox } from '../features/textBoxSlice';
import { Rnd } from 'react-rnd';

const TextBox = ({ id, text, left, top, width, height, color }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [content, setContent] = useState(text);
  const inputRef = useRef(null);

  const handleDoubleClick = () => {
    setIsEditing(true);
    setTimeout(() => {
      inputRef.current?.focus();
    }, 100);
  };

  const handleBlur = () => {
    setIsEditing(false);
    dispatch(updateTextBox({ id, changes: { text: content } }));
  };

  return (
    <Rnd
      size={{ width, height }}
      position={{ x: left, y: top }}
      onDragStop={(e, d) => {
        dispatch(updateTextBox({ id, changes: { left: d.x, top: d.y } }));
      }}
      onResizeStop={(e, direction, ref, delta, position) => {
        dispatch(updateTextBox({
          id,
          changes: {
            width: parseFloat(ref.style.width),
            height: parseFloat(ref.style.height),
            left: position.x,
            top: position.y,
          },
        }));
      }}
      bounds="parent"
    >
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: '100%',
          border: '1px solid white',
          cursor: 'move',
          padding: '5px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'transparent', // Ensure the background is transparent
          color: color, // Set text color
        }}
      >
        {isEditing ? (
          <input
            ref={inputRef}
            type="text"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            onBlur={handleBlur}
            onKeyPress={(e) => {
              if (e.key === 'Enter') handleBlur();
            }}
            style={{
              width: '100%',
              height: '100%',
              fontSize: '18px',
              border: 'none',
              backgroundColor: 'transparent',
              color: color, // Set text color in input
            }}
          />
        ) : (
          <div
            onDoubleClick={handleDoubleClick}
            style={{
              width: '100%',
              height: '100%',
              fontSize: '18px',
              textAlign: 'center',
              color: color, // Set text color
            }}
          >
            <b>{content}</b>
            
          </div>
        )}
        <button
          onClick={() => dispatch(deleteTextBox(id))}
          style={{
            position: 'absolute',
            top: '-10px',
            right: '-10px',
            cursor: 'pointer',
            background: 'red',
            color: 'white',
            border: 'none',
            borderRadius: '50%',
            width: '50px',
            height: '20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          X
        </button>
      </div>
    </Rnd>
  );
};

export default TextBox;
