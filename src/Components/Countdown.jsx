import React, { useState } from 'react'
import "./Countdown.css"
import BitcoinImg from "../assets/image.png"

export default function Countdown() {
    const [day, setDay] = useState(0)
    const [hour, setHour] = useState(0)
    const [minute, setMinute] = useState(0)
    const [second, setSecond] = useState(0)


    
  return (
    <div className='countdown-container'>
      <h1 className='header'>Bitcoin Halving Countdown</h1>
      <div className='timer-container'>
      <img src={BitcoinImg} alt="bitcoin" />
      <div className='day'>
        <span className='time-value'>{day}</span>
        <div className='time-text'>Days</div>
      </div>
      <div className='hour'>
        <span className='time-value'>{hour}</span>
        <div className='time-text'>Hour</div>
      </div>
      <div className='minute'>
        <span className='time-value'>{minute}</span>
        <div className='time-text'>Minutes</div>
      </div>
      <div className='second'>
        <span className='time-value'>{second}</span>
        <div className='time-text'>Seconds</div>
      </div>
    </div>
    </div>
  )
}
