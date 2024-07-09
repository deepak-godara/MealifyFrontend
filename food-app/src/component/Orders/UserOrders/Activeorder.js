import React, { useEffect, useState } from 'react';
import './Activeorder.css';

import orderAcceptedIcon from './OrderStatusLogos/check-mark_5290058.png';
import preparingIcon from './OrderStatusLogos/eat_3663579.png';
import outForDeliveryIcon from './OrderStatusLogos/delivered_12247400.png';
import deliveredIcon from './OrderStatusLogos/delivered_12247400.png';
import { saveOrderStatus } from '../../../reduxtool/reduxActions/OrdersActions';
import { useDispatch , useSelector } from 'react-redux';

const Activeorder = ({ item , socket }) => {

  const dispatch= useDispatch();
  if(socket)console.log("socekt id from order    mai.js i is :" , socket.id);
  const [preparing, setPreparing] = useState('preparing');
  const [outForDelivery, setOutForDelivery] = useState('outForDelivery');
  const [delivered, setDelivered] = useState('delivered');
  const [confirmationType, setConfirmationType] = useState('');
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [popupPosition, setPopupPosition] = useState({ x: 0, y: 0 });

  const  Status = useSelector(state => state.StatusUpdate);
  const {order} = Status
 
  const handleStatusChange = (type , event) => {
    setConfirmationType(type);
    setShowConfirmation(true);
    setPopupPosition({ x: event.clientX, y: event.clientY });
  };
  const confirmStatusChange = () => {
    setShowConfirmation(false);
    switch (confirmationType) {
      case 'delivered':
        setDelivered('orderAccepted');
        break;
      default:
        break;
    }
    dispatch(saveOrderStatus({ orderId : item._id, status: confirmationType}));
    socket.emit("deliveryConfirmationByiUser" , {orderId:item._id , ownerId : item.OwnerId , useId:item.UserId , status:confirmationType})
  };
  if (socket) {
    socket.on("changeStatusUserside", ({ status, ownerid, userId, orderId }) => {
      console.log("confirmmessage and  order id is : ", status, orderId);
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

  return (
    <>
      <div className='main-div'>
        <div className='OrderId'><h2>OrderId # {item._id}</h2></div>
        <div className='OrderDetails'>
          <div className='ItemNames'>
            <div><h2>Items</h2></div>

            {item.Items.map((x, index) => (
              <p key={index}>{x.Name} : {x.Total}rs.</p>
            ))}

          </div>
          <div>Total : {item.Total}rs.</div>
          <div>
            <button type="button">Order Details</button>
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
              <img src={((item.Status || []).includes('outForDelivery') || outForDelivery === 'orderAccepted') ? orderAcceptedIcon : outForDeliveryIcon}  alt="Out for Delivery Icon" />
              <label>Out for Delivery</label>
            </button>
          </div>
          <div className="status">
            <button type="button" onClick={(e) => handleStatusChange('delivered' , e)}>
              <img src={((item.Status || []).includes('delivered') || delivered === 'orderAccepted') ? orderAcceptedIcon : deliveredIcon} alt="Delivered Icon" />
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
      </div>
    </>
  );
};

export default Activeorder;
