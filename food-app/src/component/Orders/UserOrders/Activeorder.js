import React, { useEffect, useState } from 'react';
import './Activeorder.css';

import orderAcceptedIcon from './OrderStatusLogos/check-mark_5290058.png';
import preparingIcon from './OrderStatusLogos/eat_3663579.png';
import outForDeliveryIcon from './OrderStatusLogos/delivered_12247400.png';
import deliveredIcon from './OrderStatusLogos/delivered_12247400.png';
import { saveOrderStatus } from '../../../reduxtool/reduxActions/OrdersActions';
import { useDispatch , useSelector } from 'react-redux';
import ConfirmedOrders from '../ConfiredOrders/Main';

const Activeorder = ({ item , socket }) => {

  const dispatch= useDispatch();
  if(socket)console.log("socekt id from order    mai.js i is :" , socket.id);
  const [preparing, setPreparing] = useState('preparing');
  const [outForDelivery, setOutForDelivery] = useState('outForDelivery');
  const [delivered, setDelivered] = useState('delivered');
  const [confirmationType, setConfirmationType] = useState('');
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [popupPosition, setPopupPosition] = useState({ x: 0, y: 0 });
  const [orderDetails , setorderDetails]  = useState(false);
  const  [confirmdelivery , setConfirmdelivery] = useState(false);
  const  Status = useSelector(state => state.StatusUpdate);
  const {order} = Status
 
  const handleStatusChange = (type , event) => {
    setConfirmationType(type);
   if(type === "delivered") {
    if(confirmdelivery)setShowConfirmation(true);
   }
   else setShowConfirmation(true)
    setPopupPosition({ x: event.clientX, y: event.clientY });
  };
  const confirmStatusChange = () => {
    setShowConfirmation(false);
    switch (confirmationType) {
      case 'delivered':
        if(item.OrderStatus === 'outForDelivery')setDelivered('orderAccepted');
        break;
      default:
        break;
    }
    console.log("confirmdelivery from user side is : " , item.OwnerId)

    if (confirmationType === "delivered" && item.OrderStatus === 'outForDelivery'){
      socket.emit("deliveryConfirmationByUser" , {orderId:item._id , ownerId : item.OwnerId , useId:item.UserId , status:confirmationType})
    }
    else{
      alert(`order  is at ${item.OrderStatus} stage`)
    }
  
  };

  if (socket) {
    socket.on('deliveryConfirmationRequestOwner', ({ UserId, OwnerId, OrderId }) => {
      console.log("wreatyfykfuykuhguoiyghugjb12435678976857654jhghubkus");
      saveOrderStatus({ OrderId: OrderId, status: "deliveryConfirmByUser" });
      setConfirmdelivery(true);
      alert(`Request for delivery confirmation by hotel. Please confirm if order is delivered!`);
      console.log("Order confirmed by user:");
    });
  }
  

  if (socket) {
    socket.on("changeStatusUserside", ({ status, ownerid, userId, orderId }) => {
      console.log("confirmmessage and  order id is : ", status, orderId);
      alert(`your order with order id ${orderId}  is ${status}`);
      if (item._id === orderId) {
        switch (status) {    
          case 'preparing':
            setPreparing('orderAccepted');
            break;
          case 'outForDelivery':
            setOutForDelivery('orderAccepted');
            break;
          default:
            break;
        }
      }
    });
  }

   console.log(item.Status);

   
  return (
    <>
      <div className='main-div'>
        <div className='OrderId'><h3>OrderId # {item._id} </h3> <h5>DeliveryConfirmId : #{item.DeliveryId}</h5></div>
        <div className='OrderDetails'>
          <div className='ItemNames'>
            <div><h2>Items</h2></div>

            {item.Items.map((x, index) => ( 
              <p key={index}>{x.Name} : {x.Total}rs.</p> 
            ))}

          </div>
          <div>Total : {item.Total}rs.</div>
          <div>
            <button type="button" onClick={() => setorderDetails(true)}>Order Details</button>
          </div>
        </div>

        <div className="order-status">
          <div className="status">
            <button type="button">
              <img src={orderAcceptedIcon} alt="Order Accepted Icon" />
              <label>Order Accepted</label>
            </button>
          </div>
          <div className="status">
            <button type="button">
              <img src={((item.Status || []).includes('preparing') || preparing === 'orderAccepted') ? orderAcceptedIcon : preparingIcon} alt="Preparing Icon" />
              <label>Preparing</label>
            </button>
          </div>
          <div className="status">
            <button type="button" >
              <img src={((item.Status || []).includes('outForDelivery')|| outForDelivery === 'orderAccepted') ? orderAcceptedIcon : outForDeliveryIcon}  alt="Out for Delivery Icon" />
              <label>Out for Delivery</label>
            </button>
          </div>
          <div className="status">
            <button type="button" onClick={(e) => handleStatusChange('delivered' , e)}>
              <img src={((item.Status || []).includes('delivered')|| delivered === 'orderAccepted') ? orderAcceptedIcon : deliveredIcon} alt="Delivered Icon" />
              <label>Delivered</label>
            </button>
          </div>
        </div>

        {showConfirmation && (
              <div className="confirmation-popup" style={{ top: popupPosition.y, left: popupPosition.x }}>
                <p>Are you sure you want to proceed?</p>
                <button onClick={confirmStatusChange}>Yes</button>
                <button onClick={() => setShowConfirmation(false)}>No</button>
              </div>
            )}

            {orderDetails && (
              <ConfirmedOrders
                Order={item}
                OnClose={() => {
                  setorderDetails(false);
                }}
              />
            )}
      </div>
    </>
  );
};

export default Activeorder;
