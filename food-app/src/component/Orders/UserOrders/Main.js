import React from 'react'
import { OrderData } from './OrderData'
import UserOrder from './UserOrder';
import './UserOrder.css'
function Orders() {
  return (
    <div className='Order-Main-Containers'>
        {OrderData.map((item)=><UserOrder OrderData={item}/>)}
    </div>
  )
}

export default Orders