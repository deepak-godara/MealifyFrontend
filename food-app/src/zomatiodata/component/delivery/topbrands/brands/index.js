import React from 'react'
import './brands.css'
const Brands = (props) => {
  return (
    <div className='Topbrandmainclass'>
        <div className='topbrands-cover max-width'>
            <img src={props.brands.cover} className='topbrands-image'/>
        </div>
        <div className='topbrands-title'>{props.brands.title}</div>
        <div className='topbrands-time'>{props.brands.time}</div>
    </div>
  )
}

export default Brands