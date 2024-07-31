import React from 'react'
import FoodType from '../../Owner/HotelDetails/FoodType'
import './UserOrder.css'
function OrderItemDetails(props) {
  return (
    <div className='Order-Items1'>
        <FoodType types={props.type}/>
        <div className='Item-Data'>{props.Quantity} x {props.Name}</div>
    </div>
  )
}

export default OrderItemDetails