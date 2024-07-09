import React, { useEffect, useState } from 'react';
import './OwnerActiveOrders.css';
import orderAcceptedIcon from './OrderStatusLogos/check-mark_5290058.png';
import preparingIcon from './OrderStatusLogos/eat_3663579.png';
import outForDeliveryIcon from './OrderStatusLogos/delivered_12247400.png';
import deliveredIcon from './OrderStatusLogos/delivered_12247400.png';
import { saveOrderStatus, GetActiveOrders } from '../../../reduxtool/reduxActions/OrdersActions';
import { useDispatch, useSelector } from 'react-redux';
import { useSocket } from '../../../store/SocketContext';

const OwnerActiveOrders = ({item , socket}) => {
  if (socket) console.log("ownerConformation socket is: ", socket.id);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [confirmationType, setConfirmationType] = useState('');
  const [popupPosition, setPopupPosition] = useState({ x: 0, y: 0 });
  const [preparing, setPreparing] = useState('');
  const [outForDelivery, setOutForDelivery] = useState('');
  const [delivered, setDelivered] = useState('');
  const [userId , setUserId]  =  useState("");
  const [ownerId, setOwnerId] = useState("")
  const [id , setId] = useState("");
  const [status , setStatus] = useState("");
  const dispatch = useDispatch();

  // const activeOrderdata = useSelector((state) => state.ActiveOrderdata);
  // const { loading, error, Order } = activeOrderdata;
  
  const handleStatusChange = (orderId, status, userId , ownerId, event) => {
    setId(orderId);
    setStatus(status)
    setUserId(userId)
    setOwnerId(ownerId)
    // if(item && (item.Status ||[]).includes)
    setShowConfirmation(true);
    setConfirmationType(status);
    setPopupPosition({ x: event.clientX, y: event.clientY });
  };
  
 if(socket){
  socket.on("DeliveryConfirmed" , ({orderId, status}) =>{
    if(orderId === item._id) setDelivered(status);

  })
 }
  // const  Status = useSelector(state => state.StatusUpdate);
  // const {order} = Status
  const confirmStatusChange = () => {
    setShowConfirmation(false);
    switch (confirmationType) {
      case 'preparing':
        setPreparing('preparing');
        break;
      case 'outForDelivery':
        setOutForDelivery('outForDelivery');
        break;
      default:
          break;
    }
    // dispatch(saveOrderStatus({ orderId : id, status: status}));
    if(socket) socket.emit('statusUpdateMessage' , { status:status, ownerId : ownerId , userId : userId,  orderId:item._id });
  };
  
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
                <button type="button">Order Details</button>
              </div>
            </div>
            <div className="order-status">
              <div className="status">
                <button type="button" onClick={(e) => handleStatusChange(item._id, 'orderAccepted', item.UserId, item.OwnerId , e)}>
                  <img src={orderAcceptedIcon} alt="Order Accepted Icon" />
                  <label>Order Accepted</label>
                </button>
              </div>
              <div className="status">
                <button type="button" onClick={(e) => handleStatusChange(item._id, 'preparing' , item.UserId, item.OwnerId , e)}>
                  <img src={((item.Status || []).includes('preparing') || preparing === 'preparing') ? orderAcceptedIcon : preparingIcon} alt="Preparing Icon" />
                  <label>Preparing</label>
                </button>
              </div>
              <div className="status">
                <button type="button" onClick={(e) => handleStatusChange(item._id, 'outForDelivery', item.UserId, item.OwnerId , e)}>
                  <img src={((item.Status || []).includes('outForDelivery') || outForDelivery === 'outForDelivery') ? orderAcceptedIcon : outForDeliveryIcon} alt="Out for Delivery Icon" />
                  <label>Out for Delivery</label>
                </button>
              </div>
              <div className="status">
              {/* onClick={(e) => handleStatusChange(item._id, 'delivered', e)} */}
                <button type="button" >
                  <img src={((item.Status || []).includes('delivered') || delivered === 'delivered') ? orderAcceptedIcon : deliveredIcon} alt="Delivered Icon" />
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

export default OwnerActiveOrders;
