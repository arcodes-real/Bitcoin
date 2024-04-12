import React from 'react'
import "./Footer.css"

export default function Footer() {
  return (
    <div className='footer-container'>
      <div>
        <span className='footer-span'>nordL</span>
        <p className='footer-p'>Powered by Nord Finance</p>
        <span>Contact Us</span>
        <div className='icons'>
              <InstagramIcon className="text-white" />
              <TwitterIcon className="text-white" />
              <YoutubeIcon className="text-white" />
              <TwitchIcon className="text-white" />
              <DiscIcon className="text-white" />
        </div>
      </div>
      <div>
        <h3 className='ftr-quicklinks'>Quick Links</h3>
        <ul className='ftr-links'>
            <li className='ftr-item'>
                About Us
            </li>
            <li className='ftr-item'>
                Blog
            </li>
            <li className='ftr-item'>
                FAQ
            </li>
            <li className='ftr-item'>
                Crypto Tools
            </li>
            <li className='ftr-item'>
                Terms and Conditions
            </li>
            <li className='ftr-item'>
                Privacy policy
            </li>
        </ul>
      </div>
      <div>
        <span className='newsletter-header'>Subscribe to the norDL Newsletter</span>
        <form className='ftr-form'>
        <input className="ftr-input" type="text" placeholder='First Name'/>
        <input className="ftr-input" type="text" placeholder='Email'/>
        </form>
        <button className='ftr-button'>Subscribe</button>
        </div>
        <div>
        <span className='reservation'>© 2022-2023 nordL. All rights reserved.</span>
        </div>
    </div>
    
  )
}

function DiscIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        cursor="pointer"
      >
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    )
  }
  
  
  function InstagramIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        cursor="pointer"
      >
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
      </svg>
    )
  }
  
  
  function TwitchIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        cursor="pointer"
      >
        <path d="M21 2H3v16h5v4l4-4h5l4-4V2zm-10 9V7m5 4V7" />
      </svg>
    )
  }
  
  
  function TwitterIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        cursor="pointer"
      >
        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
      </svg>
    )
  }
  
  
  function YoutubeIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        cursor="pointer"
      >
        <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
        <path d="m10 15 5-3-5-3z" />
      </svg>
    )
  }