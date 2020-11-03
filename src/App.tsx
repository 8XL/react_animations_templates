import React from 'react';

import { DrawStrokeText } from './components'

function App() {
  const [stroked, setStroked] = React.useState<string>('STROKED')
  const [filled, setFilled] = React.useState<string>('TRANSITION')
  return (
    <div className="container">
      <div className='wrapper__stroked-animations'>
        <input onChange={e=>setStroked(e.target.value)} placeholder={stroked} maxLength={12}/>
        <DrawStrokeText 
          content={stroked}
          className='svg-wrapper first' 
          style={{
            strokeColor:'#a3faa2',
            strokeWidth: '1.3',
            fontSize: 60,
            opacity: 0.4
          }}
        />
        <DrawStrokeText 
          content={stroked}
          className='svg-wrapper second' 
          style={{
            strokeColor:'#232323',
            strokeWidth: '1.3',
            fontSize: 60
          }}
        />
        <input onChange={e=>setFilled(e.target.value)} placeholder={filled} />
        <DrawStrokeText 
          content={filled}
          className='svg-wrapper third' 
          style={{
            strokeColor:'#c97da4',
            fontSize: 50,
            transition: '2s',
            strokeWidth: '1.5',
            fill: '#c97da4',
            fillDuration: '0.25s',
            fillDelay: '4.5s'
          }}
        />
      </div>
    </div>
  );
}

export default App;
