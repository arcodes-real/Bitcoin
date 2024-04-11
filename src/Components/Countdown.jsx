import React, { useState, useEffect } from 'react'
import "./Countdown.css"
import BitcoinImg from "../assets/image.png"

export default function Countdown({targetDate}) {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const formatTime = (time) => {
    return time < 10 ? `0${time}` : time;
  };
    

    
  return (
    <div className='countdown-container'>
      <h1 className='header'>Bitcoin Halving Countdown</h1>
      <div className='timer-container'>
      <img src={BitcoinImg} alt="bitcoin" />
      <div className='day'>
        <span className='time-value'>{timeLeft.days+1}</span>
        <div className='time-text'>Days</div>
      </div>
      <div className='hour'>
        <span className='time-value'>{formatTime(timeLeft.hours)}</span>
        <div className='time-text'>Hour</div>
      </div>
      <div className='minute'>
        <span className='time-value'>{formatTime(timeLeft.minutes)}</span>
        <div className='time-text'>Minutes</div>
      </div>
      <div className='second'>
        <span className='time-value'>{formatTime(timeLeft.seconds)}</span>
        <div className='time-text'>Seconds</div>
      </div>
    </div>
    </div>
  )
}
