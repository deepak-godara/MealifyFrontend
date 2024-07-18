
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GetActiveOrders } from '../../../reduxtool/reduxActions/OrdersActions';
import OwnerActiveOrders from './OwnerActiveOrders';
import './OwnerActiveOrders.css';
import { useSocket } from '../../../store/SocketContext';
import { saveOrderStatus } from '../../../reduxtool/reduxActions/OrdersActions';
import UserOrder from '../../Orders/UserOrders/UserOrder';
const OwnerDeliverdOrder = () => {
  const socket = useSocket();
  const dispatch = useDispatch();
  const activeOrderdata = useSelector((state) => state.ActiveOrderdata);
  const { loading, error, Order } = activeOrderdata;
  useEffect(() => {
    dispatch(GetActiveOrders());
  }, [dispatch]);



  useEffect(()=>{
    if(socket){
      socket.on("DeliveryConfirmed" , ({orderId , status}) =>{
         console.log(" order deleiverd by owner  : " , orderId , status);
      })
      dispatch(GetActiveOrders())
    }
  } , [dispatch ])
  
  return (
    <>
      <div className='Order-Main-Containers'>
          {Order && Order.length > 0 ? (
            Order.map((item, index) => (
              (item.OrderStatus === "delivered")?
              (<UserOrder key={index} OrderData={item} />) : ""
            ))
          ) : (
            <p>No past orders available</p>
          )}
        </div>
    </>
  );
}

export default OwnerDeliverdOrder;
