import React, { useContext } from 'react'
import { OrderData } from './OrderData'
import UserOrder from './UserOrder';
import './UserOrder.css'
import ClientContext from '../../../store/AuthClient';
function Orders() {
  const clients=useContext(ClientContext)
console.log(clients.Orders)
  return (
<>
<div className='Order-Container'> Order History</div>
    <div className='Order-Main-Containers'>
        {clients.Orders.map((item)=><UserOrder OrderData={item.OrderNumber}/>)}
    </div>
    </>
  )
}

export default Orders