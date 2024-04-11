import React, { useEffect, useState } from 'react'
import "./Card.css"

export default function Card() {

    const [blockHeight, setBlockHeight] = useState(0)
    const [blocksUntilHalving, setBlocksUntilHalving] = useState(0)
    const [btcPrice, setBtcPrice] = useState(0)
    const [nextHalvingDate, setNextHalvingDate] = useState("18th April, 2024")

    useEffect(() =>{
      const fetchBTCData = async() =>{
        const response = await fetch("https://api.blockchain.info/stats")
        const jsonData = await response.json()
        setBtcPrice(`$${jsonData.market_price_usd}`)
        setBlockHeight(jsonData.n_blocks_total)
        const BUH = jsonData.nextretarget - jsonData.n_blocks_total;
        setBlocksUntilHalving(BUH)
      }
      fetchBTCData()
    },[])
  return (
    <div className='card-container'>
      <div className='data-container'>
        <div className='block-height'>
            <span>Current Block Height</span>
            <div className='card-value'>{blockHeight}</div>
        </div>
        <div className='block-until-halving'>
            <span>Blocks Until Halving</span>
            <div className='card-value'>{blocksUntilHalving}</div>
        </div>
        <div className='btc-price'>
            <span>BTC Price</span>
            <div className='card-value'>{btcPrice}</div>
        </div>
        <div className='next-halving'>
            <span>Next Bitcoin Halving Date</span>
            <div className='card-value'>{nextHalvingDate}</div>
        </div>
      </div>
      <div>
        <button  className='card-btn'>Check Now!</button>
      </div>
    </div>
  )
}
