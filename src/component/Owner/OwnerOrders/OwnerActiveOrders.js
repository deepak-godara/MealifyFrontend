import React, { useEffect, useState } from 'react';
import './OwnerActiveOrders.css';
import orderAcceptedIcon from './OrderStatusLogos/check-mark_5290058.png';
import preparingIcon from './OrderStatusLogos/eat_3663579.png';
import outForDeliveryIcon from './OrderStatusLogos/delivered_12247400.png';
import deliveredIcon from './OrderStatusLogos/delivered_12247400.png';
import { saveOrderStatus } from '../../../reduxtool/reduxActions/OrdersActions';
import { useDispatch, } from 'react-redux';
import ConfirmedOrders from '../../Orders/ConfiredOrders/Main';

const OwnerActiveOrders = ({ item, socket }) => {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [confirmationType, setConfirmationType] = useState('');
  const [popupPosition, setPopupPosition] = useState({ x: 0, y: 0 });
  const [preparing, setPreparing] = useState('');
  const [outForDelivery, setOutForDelivery] = useState('');
  const [delivered, setDelivered] = useState('');
  const [userId, setUserId] = useState("");
  const [ownerId, setOwnerId] = useState("");
  const [id, setId] = useState("");
  const [status, setStatus] = useState("");
  const dispatch = useDispatch();
  const [deliveryConfirmation, setDeliveryConfirmation] = useState(false);
  const [orderDetails, setOrderDetails] = useState(false);

  const handleStatusChange = (orderId, status, userId, ownerId, event) => {
    setId(orderId);
    setStatus(status);
    setUserId(userId);
    setOwnerId(ownerId);
    setShowConfirmation(true);
    setConfirmationType(status);
    setPopupPosition({ x: event.clientX, y: event.clientY });
  };

  useEffect(() => {
    if (socket) {
      socket.on("DeliveryConfirmed", ({ orderId, status, Name }) => {
        if (orderId === item._id) {
          setDelivered(status);
        }
      });
    }
  }, [socket, item._id]);

  const onConfirm = () => {
    if (socket) {
      socket.emit("requestForDeliveryConformationbyOwner", {
        UserId: item.UserId,
        OwnerId: item.OwnerId,
        OrderId: item._id
      });
    }
    setDeliveryConfirmation(false);
  };

  const onCancel = () => {
    setDeliveryConfirmation(false);
  };

  const deliveryHandler = () => {
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    setPopupPosition({ x: centerX, y: centerY });
    setDeliveryConfirmation(true);
  };

  const confirmStatusChange = () => {
    setShowConfirmation(false);

    switch (confirmationType) {
      case 'preparing':
        if (item.OrderStatus === 'Accepted') {
          setPreparing('preparing');
        }
        break;
      case 'outForDelivery':
        if (item.OrderStatus === 'preparing') {
          setOutForDelivery('outForDelivery');
        }
        break;
      default:
        break;
    }

    if (confirmationType === 'preparing' || confirmationType === 'outForDelivery') {
      if (socket) {
        socket.emit('statusUpdateMessage', {
          status: status,
          ownerId: ownerId,
          userId: userId,
          orderId: item._id
        });
      }
      dispatch(saveOrderStatus({ orderId: id, status: status }));
    } else {
      alert(`Order is at ${item.OrderStatus} stage`);
    }
  };

  useEffect(() => {
    console.log('Preparing:', preparing);
    console.log('Out for Delivery:', outForDelivery);
  }, [delivered, preparing, outForDelivery, confirmationType]);

  return (
    <>
      <div key={item._id} className='main-div'>
        <div className='OrderId'><h2>OrderId # {item._id}</h2></div>
        <div className='OrderDetails'>
          <div className='ItemNames'>
            <div><h2>Items</h2></div>
            {item && item.Items.map((x, index) => (
              <p key={index}>{x.Name} : {x.Total}rs.</p>
            ))}
          </div>
          <div> Total : {item && item.Total}.rs </div>
          <div>
            <button type="button" onClick={() => setOrderDetails(true)}>Order Details</button>
          </div>
        </div>
        <div className="order-status">
          <div className="status">
            <button type="button" onClick={(e) => handleStatusChange(item._id, 'orderAccepted', item.UserId, item.OwnerId, e)}>
              <img src={orderAcceptedIcon} alt="Order Accepted Icon" />
              <label>Order Accepted</label>
            </button>
          </div>
          <div className="status">
            <button type="button" onClick={(e) => handleStatusChange(item._id, 'preparing', item.UserId, item.OwnerId, e)}>
              <img src={((item.Status || []).includes('preparing') || preparing === 'preparing') ? orderAcceptedIcon : preparingIcon} alt="Preparing Icon" />
              <label>Preparing</label>
            </button>
          </div>
          <div className="status">
            <button type="button" onClick={(e) => handleStatusChange(item._id, 'outForDelivery', item.UserId, item.OwnerId, e)}>
              <img src={((item.Status || []).includes('outForDelivery') || outForDelivery === 'outForDelivery') ? orderAcceptedIcon : outForDeliveryIcon} alt="Out for Delivery Icon" />
              <label>Out for Delivery</label>
            </button>
          </div>
          <div className="status">
            <button type="button" onClick={(e) => deliveryHandler(e)} >
              <img src={((item.Status || []).includes('delivered') || delivered === 'delivered') ? orderAcceptedIcon : deliveredIcon} alt="Delivered Icon" />
              <label>Delivered</label>
            </button>
          </div>
        </div>
        {showConfirmation && (
          <div className='boxStyle' style={{ top: popupPosition.y, left: popupPosition.x }}>
            <p>Are you sure you want to proceed?</p>
            <button className='confirmButtonStyle' onClick={confirmStatusChange}>Yes</button>
            <button className='cancelButtonStyle' onClick={() => setShowConfirmation(false)}>No</button>
          </div>
        )}
        {deliveryConfirmation && (
          <div className='boxStyle' style={{ top: popupPosition.y, left: popupPosition.x }}>
            <p>Do you want to send the delivery confirmation message to the user?</p>
            <button className='confirmButtonStyle' onClick={onConfirm}>Yes</button>
            <button className='cancelButtonStyle' onClick={onCancel}>No</button>
          </div>
        )}
        {orderDetails && (
          <ConfirmedOrders
            Order={item}
            OnClose={() => {
              setOrderDetails(false);
            }}
          />
        )}
      </div>
    </>
  );
};

export default OwnerActiveOrders;
