import React from 'react'
import './deliveryitem.css'
const Deliveryitem = (props) => {
  return (
    <div className='items'>
       <div className='delivery-item-cover'>
        <img src={props.item.src} alt={props.item.title} className='delivery-item-image'/>
       </div>
       <div className='delivery-item-title'>{props.item.title}</div>
    </div>
  );
}

export default Deliveryitem;