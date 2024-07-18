import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GetActiveOrders } from '../../../reduxtool/reduxActions/OrdersActions';
import OwnerActiveOrders from './OwnerActiveOrders';
import './OwnerActiveOrders.css';
import { useSocket } from '../../../store/SocketContext';

const OwnerActiveOrder2 = () => {
  const socket = useSocket();
  const dispatch = useDispatch();
  const activeOrderdata = useSelector((state) => state.ActiveOrderdata);
  const { loading, error, Order } = activeOrderdata;

  useEffect(() => {
    dispatch(GetActiveOrders());
  }, [dispatch]);

  useEffect(() => {
    if (socket) {
      const handleDeliveryConfirmed = ({ orderId, status }) => {
        console.log("Order delivered by owner:", orderId, status);
        dispatch(GetActiveOrders());
      };

      socket.on("DeliveryConfirmed", handleDeliveryConfirmed);
    }
  }, [dispatch, socket]);

  return (
    <>
      <div className='main-display-page'>
        {Order && Order.map((item, index) => (
          (item.OrderStatus !== 'delivered')?
          <OwnerActiveOrders key={index} item={item} socket={socket} /> : ' '
        ))}
      </div>
    </>
  );
}

export default OwnerActiveOrder2;
