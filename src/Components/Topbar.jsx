import React from 'react'
import "./Topbar.css"

export default function Topbar() {
  return (
    <div className='topbar-container'>

     <span className='logo-text'>nordL</span>

     <div className='nav-links'>
        <a href='/about us'>About Us</a>
        <button className='login-button'>Login</button>
        <button className='install-app-button'>Install App</button>
     </div>
      
    </div>
  )
}
