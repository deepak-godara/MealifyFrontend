import React, { useContext, useEffect, useState } from 'react';
import { OrderData } from './OrderData';
import UserOrder from './UserOrder';
import './UserOrder.css';
import Activeorder from './Activeorder';
import { useDispatch, useSelector } from 'react-redux';
import { GetActiveOrders } from '../../../reduxtool/reduxActions/OrdersActions';
import { useSocket } from '../../../store/SocketContext';
import ClientContext from '../../../store/AuthClient';
import StatusDisplay from './statusDisplay';
import GiveReview from '../../Review/GiveReview';
import { Reviewform } from '../../Review/Reviewform';

const Ordersss= () => {
  const socket = useSocket();
  const dispatch = useDispatch();
  const activeOrderdata = useSelector((state) => state.ActiveOrderdata);
  const { loading, error, Order } = activeOrderdata;
  const userctx = useContext(ClientContext);
  const clientId = userctx.ClientId;
  console.log("main.js Client id is:", clientId);

  const [status, setStatus] = useState('');
  const [id, setId] = useState('');
  const [statusDisplay, setStatusDisplay] = useState(false);
  const [name, setName] = useState('');
  const [DisplayReviewForm , setDisplayReviewForm] = useState(true);

  useEffect(() => {
    dispatch(GetActiveOrders());
    if (socket) {
      socket.on("DeliveryConfirmed", ({ status, orderId, HotelName }) => {
          dispatch(GetActiveOrders());
          setDisplayReviewForm(true);
      });
    }
  }, [dispatch, socket]);

  return (
    <>
      <div className='mainOrderpage'>
        <div><h3>Active Orders</h3></div>
        <div className='ActiveOrderClass'>
          {Order && Order.map((item, index) => (
            (item.OrderStatus !== "delivered" && item.UserId === clientId) && (
              <Activeorder key={index} item={item} socket={socket} />
            )
          ))}
        </div>
        <div className='PastOrders'><h3>Past Orders</h3></div>
        <div className='Order-Main-Containers'>
          {Order && Order.length > 0 ? (
            Order.map((item, index) => (
              (item.OrderStatus === "delivered" && item.UserId === clientId) && (
                <UserOrder key={index} OrderData={item} />
              )
            ))
          ) : (
            <p>No past orders available</p>
          )}
        </div>
      </div>
      {/* {DisplayReviewForm && <Reviewform  OnClose={()=> setDisplayReviewForm(false)}/>} */}
    </>
  );
}

export default Ordersss;
