import './index.css';
import './App.css';
import React, { useState } from 'react';

const App = () => {
  let time = new Date().toLocaleTimeString();

  const [ctime, setCtime] = useState(time);

  const UpdateTime = () => {
    time = new Date().toLocaleTimeString();
    setCtime(time);
  }

  setInterval(UpdateTime,1000)

  return (
    <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh', background:'pink'}}>
    <h1 style={{fontSize:"8em"}}>{ctime}</h1>
</div>
    
  );
};

export default App