import React, { useState } from 'react';
import './App.css';

function App() {
  const [page, setPage] = useState(1);
  const [settings, setSettings] = useState({
    font: '',
    textSize: '',
    lineSpacing: '',
    backgroundColor: '',
    wordSpacing: '',
    letterSpacing: '',
  bold: '',
  underline: '',
  });

  const updateSetting = (key, value) => {
    setSettings(prev => ({ ...prev, [key]: value }));
    setPage(prev => prev + 1);
  };

  const applyStyles = () => {
    const {
      font,
      textSize,
      lineSpacing,
      backgroundColor,
      wordSpacing,
      letterSpacing,
      bold,
      underline
    } = settings;
  
    const fontMap = {
      'Arial': 'Arial, sans-serif',
      'Georgia': 'Georgia, serif',
      'Verdana': 'Verdana, sans-serif',
      'Times New Roman': '"Times New Roman", serif',
    };
  
    return {
      fontFamily: fontMap[font] || 'inherit',
      fontSize: textSize,
      lineHeight: lineSpacing,
      backgroundColor: backgroundColor,
      color: backgroundColor === 'black' ? 'white' : 'black',
      wordSpacing: wordSpacing,
      letterSpacing: letterSpacing,
      fontWeight: bold,
      textDecoration: underline,
      padding: '30px',
      borderRadius: '10px',
      maxWidth: '700px',
      margin: 'auto',
      boxShadow: '0 0 20px rgba(0,0,0,0.1)'
    };
  };
  

  return (
    <div className="container">
      {page === 1 && (
        <div className="card">
          <h1>Welcome!</h1>
          <p>This tool helps you create a reading view that works better for your eyes.</p>
          <button onClick={() => setPage(2)}>Start</button>
        </div>
      )}

      {page === 2 && (
        <div className="card">
          <h2>Which font is easiest to read?</h2>
          {['Arial', 'Georgia', 'Verdana', 'Times New Roman'].map(font => (
            <button key={font} onClick={() => updateSetting('font', font)} style={{ fontFamily: font }}>
              {font}
            </button>
          ))}
        </div>
      )}

      {page === 3 && (
        <div className="card">
          <h2>What size text feels best?</h2>
          {[
            { label: 'Small', value: '14px' },
            { label: 'Medium', value: '18px' },
            { label: 'Large', value: '22px' },
            { label: 'Extra Large', value: '28px' },
          ].map(option => (
            <button key={option.label} onClick={() => updateSetting('textSize', option.value)}>
              {option.label}
            </button>
          ))}
        </div>
      )}

      {page === 4 && (
        <div className="card">
          <h2>Do you want extra space between lines?</h2>
          {[
            { label: 'Normal', value: '1.5' },
            { label: 'A little more', value: '1.75' },
            { label: 'Double spaced', value: '2' },
          ].map(option => (
            <button key={option.label} onClick={() => updateSetting('lineSpacing', option.value)}>
              {option.label}
            </button>
          ))}
        </div>
      )}

      {page === 5 && (
        <div className="card">
          <h2>Which background helps your eyes the most?</h2>
          {[
            { label: 'White', value: 'white' },
            { label: 'Light Yellow', value: '#fff9c4' },
            { label: 'Soft Gray', value: '#f0f0f0' },
            { label: 'Dark (Black with light text)', value: 'black' },
          ].map(option => (
            <button key={option.label} onClick={() => updateSetting('backgroundColor', option.value)}>
              {option.label}
            </button>
          ))}
        </div>
      )}

      {page === 6 && (
        <div className="card">
          <h2>Do you want more space between words?</h2>
          {[
            { label: 'Normal', value: 'normal' },
            { label: 'A little more', value: '0.3em' },
            { label: 'Lots more', value: '0.6em' },
          ].map(option => (
            <button key={option.label} onClick={() => updateSetting('wordSpacing', option.value)}>
              {option.label}
            </button>
          ))}
        </div>
      )}

{page === 7 && (
  <div className="card">
    <h2>Do you want more space between letters?</h2>
    {[
      { label: 'Normal', value: 'normal' },
      { label: 'A little more', value: '0.05em' },
      { label: 'Lots more', value: '0.1em' },
    ].map(option => (
      <button key={option.label} onClick={() => updateSetting('letterSpacing', option.value)}>
        {option.label}
      </button>
    ))}
  </div>
)}

{page === 8 && (
  <div className="card">
    <h2>Do you prefer bold text?</h2>
    {[
      { label: 'Normal weight', value: 'normal' },
      { label: 'Bold', value: 'bold' },
    ].map(option => (
      <button key={option.label} onClick={() => updateSetting('bold', option.value)}>
        {option.label}
      </button>
    ))}
  </div>
)}

{page === 9 && (
  <div className="card">
    <h2>Do you want underlined text?</h2>
    {[
      { label: 'No underline', value: 'none' },
      { label: 'Underline all text', value: 'underline' },
    ].map(option => (
      <button key={option.label} onClick={() => updateSetting('underline', option.value)}>
        {option.label}
      </button>
    ))}
  </div>
)}


      {page === 10 && (
        <div className="card" style={applyStyles()}>
          <h2>Your Reading View</h2>
          <p>
            This is your custom reading view! You can use this layout to help reduce stress and make reading easier.
            
          </p>
        </div>
      )}
    </div>
  );
}

export default App;
