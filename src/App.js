import 'react-color-palette/css';
import { useState } from 'react';

export default function App() {
  const useGenerateRandomColor = () => {
    //
    const [color, setColor] = useState('');
    const generateColor = () => {
      setColor(Math.random().toString(16).slice(-6));
    };
    return { color, generateColor };
  };

  const { color, generateColor } = useGenerateRandomColor();
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <button
        style={{
          padding: '8px 16px',
          margin: '32px auto 16px auto',
          borderRadius: 'none',
          fontSize: '1rem',
          border: '2px dashed {color}',
        }}
        onClick={generateColor}
      >
        Generate
      </button>

      <div
        style={{
          height: '400px',
          width: '400px',
          margin: '16px auto',
          backgroundColor: '#' + color,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: '12px',
        }}
      >
        <button
          style={{
            padding: '20px 12px',
            borderRadius: '8px',
            fontSize: '1rem',
          }}
        >
          background color: #{color}
        </button>
      </div>
    </div>
  );
}
