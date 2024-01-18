import 'react-color-palette/css';
import { useState } from 'react';

export default function App() {
  const useGenerateRandomColor = () => {
    // Using the hook for creating the variable
    const [color, setColor] = useState('');
    // Defining the function for returning a random color
    const generateColor = () => {
      // Getting random 16 characters converted to string and reduced to six
      setColor(Math.random().toString(16).slice(-6));
    };
    // Returning the color
    return { color, generateColor };
  };
  // Create function which returns the divs and buttons
  const { color, generateColor } = useGenerateRandomColor();
  return (
    // Creating div around
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      {/* Creating the generate-button */}
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
        {/* <button
          style={{
            padding: '20px 12px',
            borderRadius: '8px',
            fontSize: '1rem',
          }}
        > */}
        Generated Color: #{color}
        {/* </button> */}
      </div>
    </div>
  );
}
