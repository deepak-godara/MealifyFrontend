import React, { useEffect } from 'react';
import { OrderData } from './OrderData';
import UserOrder from './UserOrder';
import './UserOrder.css';
import Activeorder from './Activeorder';
import { useDispatch, useSelector } from 'react-redux';
import { GetActiveOrders } from '../../../reduxtool/reduxActions/OrdersActions';
import { useSocket } from '../../../store/SocketContext';

const Ordersss= () => {
  const socket = useSocket();
  const dispatch = useDispatch();
  const activeOrderdata = useSelector((state) => state.ActiveOrderdata);
  const { loading, error, Order } = activeOrderdata;

  useEffect(() => {
    dispatch(GetActiveOrders());

    if (socket) {
      const handleStatusChange = ({ status, ownerId, userId, orderId }) => {
        console.log("confirm message and order id is:", status, orderId);
        dispatch(GetActiveOrders());
      };
      socket.on("changeStatusUserside", handleStatusChange);
    }
  }, [dispatch, socket]);

  return (
    <>
      <div className='mainOrderpage'>
        <div><h3>Active Orders</h3></div>
        <div className='ActiveOrderClass'>
          {Order && Order.map((item, index) => (
            item.OrderStatus !== "delivered" && (
              <Activeorder key={index} item={item} socket={socket} />
            )
          ))}
        </div>
        <div className='PastOrders'><h3>Past Orders</h3></div>
        <div className='Order-Main-Containers'>
          {Order && Order.length > 0 ? (
            Order.map((item, index) => (
              item.OrderStatus === "delivered" && (
                <UserOrder key={index} OrderData={item} />
              )
            ))
          ) : (
            <p>No past orders available</p>
          )}
        </div>
      </div>
    </>
  );
}

export default Ordersss;
