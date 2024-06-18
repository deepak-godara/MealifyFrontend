import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GetActiveOrders } from '../../../reduxtool/reduxActions/OrdersActions';
import OwnerActiveOrders from './OwnerActiveOrders';
import './OwnerActiveOrders.css';
import { useSocket } from '../../../store/SocketContext';
import { saveOrderStatus } from '../../../reduxtool/reduxActions/OrdersActions';

const OwnerActiveOrder2 = () => {
  const socket = useSocket();
  const dispatch = useDispatch();
  const activeOrderdata = useSelector((state) => state.ActiveOrderdata);
  const { loading, error, Order } = activeOrderdata;
  // const [statusOrder, setStatusOrder] = useState([]);
  
  // const  Status = useSelector(state => state.StatusUpdate);
  // const {order} = Status


  useEffect(() => {
    dispatch(GetActiveOrders());
  }, [dispatch , socket]);

  useEffect(()=>{
    if(socket){
      socket.on("DeliveryConfirmed" , ({orderId , status}) =>{
        dispatch(GetActiveOrders());
      })
    }
  } , [dispatch , Order , socket])

  return (
    <>
      <div className='main-display-page'>
        {Order && Order.map((item, index) => (
          <OwnerActiveOrders key={index} item={item} socket={socket} />
        ))}
      </div>
    </>
  );
}

export default OwnerActiveOrder2;
