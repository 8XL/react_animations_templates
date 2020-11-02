import React from 'react';

import { DrawStrokeText } from './components'

function App() {
  return (
    <div className="container">
      <DrawStrokeText 
        content='STROKED'
        className='svg-wrapper first' 
        style={{
          strokeColor:'#a3faa2',
          strokeWidth: '1.3',
          fontSize: 60,
          opacity: 0.4
        }}
      />
      <DrawStrokeText 
        content='STROKED'
        className='svg-wrapper second' 
        style={{
          strokeColor:'#232323',
          strokeWidth: '1.3',
          fontSize: 60
        }}
      />
      <DrawStrokeText 
        content='TRANSITION'
        className='svg-wrapper third' 
        style={{
          strokeColor:'#c97da4',
          fontSize: 50,
          transition: '2s',
          strokeWidth: '1.5',
          fill: '#c97da4',
          fillDuration: '4s'
        }}
      />
    </div>
  );
}

export default App;
