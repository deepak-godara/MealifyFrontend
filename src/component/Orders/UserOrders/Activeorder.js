// import React, { useEffect, useState } from "react";
// import "./Activeorder.css";

// import orderAcceptedIcon from "./OrderStatusLogos/check-mark_5290058.png";
// import preparingIcon from "./OrderStatusLogos/eat_3663579.png";
// import outForDeliveryIcon from "./OrderStatusLogos/delivered_12247400.png";
// import deliveredIcon from "./OrderStatusLogos/delivered_12247400.png";
// import { saveOrderStatus } from "../../../reduxtool/reduxActions/OrdersActions";
// import { useDispatch, useSelector } from "react-redux";
// import ConfirmedOrders from "../ConfiredOrders/Main";
// import StatusDisplay from "./statusDisplay";
// import { DELIVERYCONFIRM, SHOW_DELIVERY_CONFIRMATION } from "../../../reduxtool/constants/OrderConstants";

// const Activeorder = ({ item, socket }) => {
//   const dispatch = useDispatch();
//   const [preparing, setPreparing] = useState("preparing");
//   const [outForDelivery, setOutForDelivery] = useState("outForDelivery");
//   const [delivered, setDelivered] = useState("delivered");
//   const [confirmationType, setConfirmationType] = useState("");
//   const [showConfirmation, setShowConfirmation] = useState(false);
//   const [popupPosition, setPopupPosition] = useState({ x: 0, y: 0 });
//   const [orderDetails, setorderDetails] = useState(false);
//   const [confirmdelivery, setConfirmdelivery] = useState(false);
//   const [deliveryConfirmaion, setDeliveryConfirmation] = useState(false);
//   const Status = useSelector((state) => state.statusUpdate);

//   const { deliveryConfirmation, orderId  , Delivered } = useSelector((state) => state.DeliveryConfirmation);

//   const { order } = Status || {};
//   const [statusDisplay, setStatusDisplay] = useState(false);
//   const [StatusForDisplay, setStatusForDisplay] = useState("");
//   const [OrderId, setOrderId] = useState("");
//   const [Name, setName] = useState("");
//   const handleStatusChange = (type, event) => {
//     //dont remove  this function
//   };
//   const confirmStatusChange = () => {
//     //dont remove this function
//   };
//   // useEffect(()=>{
//   //   if(item.HotelDeliveryConfirmation)
//   //   {
//   //     setDeliveryConfirmation(true);
//   //   }
//   // },[])
//   if (socket) {
//     socket.on(
//       "deliveryConfirmationRequestOwner",
//       ({ UserId, OwnerId, OrderId }) => {
//         if (OrderId === item._id) {
//           dispatch(
//             saveOrderStatus({
//               orderId: OrderId,
//               status: "deliveryConfirmByUser",
//             })
//           );
//           // setDeliveryConfirmation(true);
//           dispatch({type:SHOW_DELIVERY_CONFIRMATION , payload:{OrderId  , item}})
//         }
//       }
//     );
//   }



//   useEffect(() => {
//     if (Delivered) {
//       if (item.OrderStatus === "outForDelivery") setDelivered("orderAccepted");
      
//       if (socket) {
//         socket.emit("deliveryConfirmationByUser", {
//           orderId: item._id,
//           HotelId: item.HotelId,
//           userId: item.UserId,
//           status: "delivered",
//         });

//         dispatch({type: DELIVERYCONFIRM , payload: false})
//       } else {
//         alert(`order is at ${item.OrderStatus} stage`);
//       }
//     }
//   }, [Delivered, item, socket ]);


//   // const onConfirm = () => {

//   //   if (item.OrderStatus === "outForDelivery") setDelivered("orderAccepted");
//   //   if (socket) {
//   //     socket.emit("deliveryConfirmationByUser", {
//   //       orderId: item._id,
//   //       HotelId: item.HotelId,
//   //       userId: item.UserId,
//   //       status: "delivered",
//   //     });
//   //   } else {
//   //     alert(`order is at ${item.OrderStatus} stage`);
//   //   }
//   //   setDeliveryConfirmation(false);
//   // };

//   // const onCancel = () => {
//   //   setDeliveryConfirmation(false);
//   // };
//   if (socket) {
//     socket.on(
//       "changeStatusUserside",
//       ({ status, ownerid, userId, orderId, Name }) => {
//         // alert(`your order with order id ${orderId} is  now  ${status}`);
//         setOrderId(orderId);
//         setStatusForDisplay(status);
//         if (orderId === item._id) setStatusDisplay(true);
//         setName(Name);
//         if (item._id === orderId) {
//           switch (status) {
//             case "preparing":
//               setPreparing("orderAccepted");
//               break;
//             case "outForDelivery":
//               setOutForDelivery("orderAccepted");
//               break;
//             default:
//               break;
//           }
//         }
//       }
//     );
//   }

//   return (
//     <>
//       <div className="main-div">
//         <div className="OrderId">
//           <h3>OrderId # {item._id} </h3>{" "}
//           <h5>DeliveryConfirmId : #{item.DeliveryId}</h5>
//         </div>
//         <div className="OrderDetails">
//           <div className="ItemNames">
//             <div>
//               <h2>Items</h2>
//             </div>
//             {item.Items.map((x, index) => (
//               <p key={index}>
//                 {x.Name} : {x.Total}rs.
//               </p>
//             ))}
//           </div>
//           <div>Total : {item.Total}rs.</div>
//           <div>
//             <button type="button" onClick={() => setorderDetails(true)}>
//               Order Details
//             </button>
//           </div>
//         </div>

//         <div className="order-status">
//           <div className="status">
//             <button type="button">
//               <img src={orderAcceptedIcon} alt="Order Accepted Icon" />
//               <label>Order Accepted</label>
//             </button>
//           </div>
//           <div className="status">
//             <button type="button">
//               <img
//                 src={
//                   (item.Status || []).includes("preparing") ||
//                   preparing === "orderAccepted"
//                     ? orderAcceptedIcon
//                     : preparingIcon
//                 }
//                 alt="Preparing Icon"
//               />
//               <label>Preparing</label>
//             </button>
//           </div>
//           <div className="status">
//             <button type="button">
//               <img
//                 src={
//                   (item.Status || []).includes("outForDelivery") ||
//                   outForDelivery === "orderAccepted"
//                     ? orderAcceptedIcon
//                     : outForDeliveryIcon
//                 }
//                 alt="Out for Delivery Icon"
//               />
//               <label>Out for Delivery</label>
//             </button>
//           </div>
//           <div className="status">
//             <button
//               type="button"
//               onClick={(e) => handleStatusChange("delivered", e)}
//             >
//               <img
//                 src={
//                   (item.Status || []).includes("delivered") ||
//                   delivered === "orderAccepted"
//                     ? orderAcceptedIcon
//                     : deliveredIcon
//                 }
//                 alt="Delivered Icon"
//               />
//               <label>Delivered</label>
//             </button>
//           </div>
//         </div>

//         {showConfirmation && (
//           <div
//             className="confirmation-popup"
//             style={{ top: popupPosition.y, left: popupPosition.x }}
//           >
//             <p>Are you sure you want to proceed?</p>
//             <button onClick={confirmStatusChange}>Yes</button>
//             <button onClick={() => setShowConfirmation(false)}>No</button>
//           </div>
//         )}
//         {/* {deliveryConfirmaion && (
//           <div className="boxStyle">
//             <p>Please Confirm If Your Order Has Been Delivered</p>
//             <button className="confirmButtonStyle" onClick={onConfirm}>
//               Yes
//             </button>
//             <button className="cancelButtonStyle" onClick={onCancel}>
//               No
//             </button>
//           </div>
//         )} */}
//         {orderDetails && (
//           <ConfirmedOrders
//             Order={item}
//             OnClose={() => {
//               setorderDetails(false);
//             }}
//           />
//         )}
//         {statusDisplay && (
//           <StatusDisplay
//             Status={StatusForDisplay}
//             OrderId={item._id}
//             Name={Name}
//             OnClose={() => setStatusDisplay(false)}
//           />
//         )}
//       </div>
//     </>
//   );
// };

// export default Activeorder;
import React, { useEffect, useState } from "react";
import "./Activeorder.css";

import orderAcceptedIcon from "./OrderStatusLogos/check-mark_5290058.png";
import preparingIcon from "./OrderStatusLogos/eat_3663579.png";
import outForDeliveryIcon from "./OrderStatusLogos/delivered_12247400.png";
import deliveredIcon from "./OrderStatusLogos/delivered_12247400.png";
import { saveOrderStatus } from "../../../reduxtool/reduxActions/OrdersActions";
import { useDispatch, useSelector } from "react-redux";
import ConfirmedOrders from "../ConfiredOrders/Main";
import StatusDisplay from "./statusDisplay";
import { DELIVERYCONFIRM, SHOW_DELIVERY_CONFIRMATION } from "../../../reduxtool/constants/OrderConstants";

const Activeorder = ({ item, socket }) => {
  const dispatch = useDispatch();
  const [preparing, setPreparing] = useState("preparing");
  const [outForDelivery, setOutForDelivery] = useState("outForDelivery");
  const [delivered, setDelivered] = useState("delivered");
  const [confirmationType, setConfirmationType] = useState("");
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [popupPosition, setPopupPosition] = useState({ x: 0, y: 0 });
  const [orderDetails, setorderDetails] = useState(false);
  const [confirmdelivery, setConfirmdelivery] = useState(false);
  const [deliveryConfirmaion, setDeliveryConfirmation] = useState(false);

  const Status = useSelector((state) => state.statusUpdate);
  const { deliveryConfirmation, orderId, Delivered } = useSelector((state) => state.DeliveryConfirmation);

  const { order } = Status || {};
  const [statusDisplay, setStatusDisplay] = useState(false);
  const [StatusForDisplay, setStatusForDisplay] = useState("");
  const [OrderId, setOrderId] = useState("");
  const [Name, setName] = useState("");

  const handleStatusChange = (type, event) => {
    // don't remove this function
  };

  const confirmStatusChange = () => {
    // don't remove this function
  };

  if (socket) {
    socket.on("deliveryConfirmationRequestOwner", ({ UserId, OwnerId, OrderId }) => {
      if (OrderId === item._id) {
        dispatch(
          saveOrderStatus({
            orderId: OrderId,
            status: "deliveryConfirmByUser",
          })
        );
        // setDeliveryConfirmation(true);
        dispatch({ type: SHOW_DELIVERY_CONFIRMATION, payload: { orderId:OrderId } });
      }
    });
  }

  // useEffect(() => {

    console.log("Deliverd from  aactive order is  : ", Delivered)
    if (Delivered) {
      if (item.OrderStatus === "outForDelivery") setDelivered("orderAccepted");

      if (socket) {
        socket.emit("deliveryConfirmationByUser", {
          orderId: item._id,
          HotelId: item.HotelId,
          userId: item.UserId,
          status: "delivered",
        });

        dispatch({ type: DELIVERYCONFIRM, payload: false }); 
      } else {
        alert(`order is at ${item.OrderStatus} stage`);
      }
    }

    useEffect(() => {
      if (Delivered) {
        console.log("Delivered status updated:", Delivered);
      }
    }, [Delivered, dispatch]);
  // }, [Delivered, item, socket, dispatch]);

  // const onConfirm = () => {
  //   if (item.OrderStatus === "outForDelivery") setDelivered("orderAccepted");
  //   if (socket) {
  //     socket.emit("deliveryConfirmationByUser", {
  //       orderId: item._id,
  //       HotelId: item.HotelId,
  //       userId: item.UserId,
  //       status: "delivered",
  //     });
  //   } else {
  //     alert(`order is at ${item.OrderStatus} stage`);
  //   }
  //   setDeliveryConfirmation(false);
  // };

  // const onCancel = () => {
  //   setDeliveryConfirmation(false);
  // };

  if (socket) {
    socket.on("changeStatusUserside", ({ status, ownerid, userId, orderId, Name }) => {
      // alert(`your order with order id ${orderId} is  now  ${status}`);
      setOrderId(orderId);
      setStatusForDisplay(status);
      if (orderId === item._id) setStatusDisplay(true);
      setName(Name);
      if (item._id === orderId) {
        switch (status) {
          case "preparing":
            setPreparing("orderAccepted");
            break;
          case "outForDelivery":
            setOutForDelivery("orderAccepted");
            break;
          default:
            break;
        }
      }
    });
  }

  return (
    <>
      <div className="main-div">
        <div className="OrderId">
          <h3>OrderId # {item._id} </h3>
          <h5>DeliveryConfirmId : #{item.DeliveryId}</h5>
        </div>
        <div className="OrderDetails">
          <div className="ItemNames">
            <div>
              <h2>Items</h2>
            </div>
            {item.Items.map((x, index) => (
              <p key={index}>
                {x.Name} : {x.Total}rs.
              </p>
            ))}
          </div>
          <div>Total : {item.Total}rs.</div>
          <div>
            <button type="button" onClick={() => setorderDetails(true)}>
              Order Details
            </button>
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
              <img
                src={
                  (item.Status || []).includes("preparing") ||
                  preparing === "orderAccepted"
                    ? orderAcceptedIcon
                    : preparingIcon
                }
                alt="Preparing Icon"
              />
              <label>Preparing</label>
            </button>
          </div>
          <div className="status">
            <button type="button">
              <img
                src={
                  (item.Status || []).includes("outForDelivery") ||
                  outForDelivery === "orderAccepted"
                    ? orderAcceptedIcon
                    : outForDeliveryIcon
                }
                alt="Out for Delivery Icon"
              />
              <label>Out for Delivery</label>
            </button>
          </div>
          <div className="status">
            <button
              type="button"
              onClick={(e) => handleStatusChange("delivered", e)}
            >
              <img
                src={
                  (item.Status || []).includes("delivered") ||
                  delivered === "orderAccepted"
                    ? orderAcceptedIcon
                    : deliveredIcon
                }
                alt="Delivered Icon"
              />
              <label>Delivered</label>
            </button>
          </div>
        </div>

        {showConfirmation && (
          <div
            className="confirmation-popup"
            style={{ top: popupPosition.y, left: popupPosition.x }}
          >
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
        {statusDisplay && (
          <StatusDisplay
            Status={StatusForDisplay}
            OrderId={item._id}
            Name={Name}
            OnClose={() => setStatusDisplay(false)}
          />
        )}
      </div>
    </>
  );
};

export default Activeorder;
