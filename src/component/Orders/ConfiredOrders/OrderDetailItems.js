import React from 'react'
import './ConfirmedOrders.css'
function OrderDetailItems(props) {
  return (
    <div className=' flex1 Ord-Items-Det'>
        <div className='Ord-ItemDet-1'>{props.Name}</div>
        <div className='Ord-ItemDet-2'>{props.Data}</div>
    </div>
  )
}

export default OrderDetailItems