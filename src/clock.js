import React, { useState, useEffect } from 'react';
import './Clock.css';

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
    <div className="clock-container">
      <h1 className="clock-title">Digital Clock</h1>
      <h2 className="clock-time">{formattedTime}</h2>
    </div>
  );
};

export default Clock;
