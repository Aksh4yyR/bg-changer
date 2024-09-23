
import React, { useState } from 'react';

const BackgroundChanger = () => {
  const [backgroundColor, setBackgroundColor] = useState('#ffffff');

  const handleColorChange = (color) => {
    setBackgroundColor(color);
  };

  return (
    <div style={{ backgroundColor, height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ display: 'flex', gap: '20px' }}>
        <button
          style={{ backgroundColor: 'red', color: '#fff', border: 'none', padding: '20px', fontSize: '24px' }}
          onClick={() => handleColorChange('red')}
        >
          Red
        </button>
        <button
          style={{ backgroundColor: 'blue', color: '#fff', border: 'none', padding: '20px', fontSize: '24px' }}
          onClick={() => handleColorChange('blue')}
        >
          Blue
        </button>
        <button
          style={{ backgroundColor: 'green', color: '#fff', border: 'none', padding: '20px', fontSize: '24px' }}
          onClick={() => handleColorChange('green')}
        >
          Green
        </button>
        <button
          style={{ backgroundColor: 'yellow', color: '#000', border: 'none', padding: '20px', fontSize: '24px' }}
          onClick={() => handleColorChange('yellow')}
        >
          Yellow
        </button>
        <button
          style={{ backgroundColor: 'violet', color: '#fff', border: 'none', padding: '20px', fontSize: '24px' }}
          onClick={() => handleColorChange('violet')}
        >
          Violet
        </button>
      </div>
    </div>
  );
};

export default BackgroundChanger;