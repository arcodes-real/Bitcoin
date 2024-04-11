import React from 'react'
import "./Faq.css"

export default function Faq() {
  return (
    <div className='faq-container'>
      <h1 className='faq-header'>Frequenty Asked Questions</h1>
      <div className='faq-questions'>
        <details className='faq-details'>
            <summary className='faq-summary'>What is a Bitcoin halving event?</summary>
            <p>
                Bitcoin halving is an event where the reward for mining new blocks is halved, meaning miners receive 50%
                fewer bitcoins for verifying transactions.
              </p>
        </details>
        <details className='faq-details'>
            <summary className='faq-summary'>How frequently does Bitcoin halving take place?</summary>
            <ul>
                <li>Bitcoin halving occurs at intervals of approximately every four years, specifically after every 210,000 blocks have been mined.

                </li>
                <li>The upcoming Bitcoin halving event will likely to happen in 18th April, 2024</li>
                <li>During this event, the block reward will be slashed from 6.25 to 3.125 bitcoins for the miners.

                </li>
            </ul>
        </details>
        <details className='faq-details'>
            <summary className='faq-summary'>What advantages are associated with Bitcoin halving?</summary>
            <p>
                Bitcoin halving is an event where the reward for mining new blocks is halved, meaning miners receive 50%
                fewer bitcoins for verifying transactions.
              </p>
        </details>
        <details className='faq-details'>
            <summary className='faq-summary'>What are the drawbacks of Bitcoin halving?</summary>
            <p>
                Bitcoin halving is an event where the reward for mining new blocks is halved, meaning miners receive 50%
                fewer bitcoins for verifying transactions.
              </p>
        </details>
        <details className='faq-details'>
            <summary className='faq-summary'>How can you get ready for Bitcoin halving?</summary>
            <p>
                Bitcoin halving is an event where the reward for mining new blocks is halved, meaning miners receive 50%
                fewer bitcoins for verifying transactions.
              </p>
        </details>
      </div>
    </div>
  )
}
