import React, { useState, useEffect } from 'react';


const Clock = () => {
  
  const [time, setTime] = useState(new Date());

  
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date()); 
    }, 1000); 

    return () => clearInterval(intervalId);
  }, []);

  
  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  const formattedTime = `${hours < 10 ? '0' : ''}${hours}:${
    minutes < 10 ? '0' : ''
  }${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

  return (
    <div style={{ textAlign: 'center', fontFamily: 'Arial', padding: '50px', color: '#2c3e50',}}>
      <h1>Digital Clock</h1>
      <h2>{formattedTime}</h2>
    </div>
  );
};

export default Clock;
