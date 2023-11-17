import React from 'react'
import './ConfirmedOrders.css'
function OrderBillData(props) {
  return (
    <div className="Ord-Total flex2">
        <div>{props.Name}</div>
        <div>₹{props.Amount}</div>
    </div>
  )
}

export default OrderBillData