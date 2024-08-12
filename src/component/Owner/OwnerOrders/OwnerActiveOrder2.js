import React, { useContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {GetOwnerActiveOrders } from '../../../reduxtool/reduxActions/OrdersActions';
import OwnerActiveOrders from './OwnerActiveOrders';
import Loader from "react-js-loader"
import './OwnerActiveOrders.css';
import UseScrollToTop from '../../UI/UseScroll';
import { useSocket } from '../../../store/SocketContext';
import OwnerContext from '../../../store/AuthOwner';
import StatusDisplay from '../../Orders/UserOrders/statusDisplay';

const OwnerActiveOrder2 = () => {
  const socket = useSocket();
  const dispatch = useDispatch();
  UseScrollToTop();
  const activeOrderdata = useSelector((state) => state.OwnerOrderdata);
  const { loading, error, Order } = activeOrderdata;
  const ownerctx = useContext(OwnerContext);
  const hotelOwnerId = ownerctx.OwnerHotelId;
  // const  owerid = ownerctx.OwnerId;

  // Rename state variable to avoid conflict with component name
  const [showStatusDisplay, setShowStatusDisplay] = useState(false);
  const [status, setStatus] = useState('');
  const [id, setId] = useState('');
  const[name  , setName] =  useState('');

  useEffect(() => {
    dispatch(GetOwnerActiveOrders({id:hotelOwnerId}));
  }, [dispatch , hotelOwnerId]);

  useEffect(() => {
    if (socket) {
      const handleDeliveryConfirmed = ({ orderId, status , Name}) => {
        dispatch(GetOwnerActiveOrders({id:hotelOwnerId}));
        setShowStatusDisplay(true);
        setId(orderId);
        setStatus(status);
        setName(Name)
      };

      socket.on("DeliveryConfirmed", handleDeliveryConfirmed);
    }
  }, [dispatch, socket , hotelOwnerId]);

  return (
    <>
      <div className='main-display-page'>
      {loading && (
          <div className="Spinner-Class3" style={{paddingTop:"10rem"}}>
            <Loader
              type="spinner-cub"
              color="red"
              // top="15rem"
              // style={{ position:"absolute", top:"2.9rem"}}

              // top="2.9rem"
              bgColor="rgb(77, 89, 102)"
              // title={"spinner-cub"}
              size={50}
            ></Loader>
          </div>
        )}
        {!loading&&Order && Order.map((item, index) => (
          (item.OrderStatus !== 'delivered' && hotelOwnerId === item.HotelId) ?
          <OwnerActiveOrders key={index} item={item} socket={socket} /> : ' '
        ))}
      </div>
      {showStatusDisplay && <StatusDisplay Status={status} OrderId={id} Name ={name} onClose={() => setShowStatusDisplay(false)} />}
    </>
  );
}

export default OwnerActiveOrder2;
