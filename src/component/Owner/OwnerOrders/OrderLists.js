import React from "react";
// import {table}
import "./OrderList.css";
import { useSocket } from "../../../store/SocketContext";
import Face from "../../../assests/meals.jpg";
function OrderLists(props) {
  const SocketCtx = useSocket();
  const AcceptOrder = (OrderId, Order) => {
    SocketCtx.emit("OrderConfirmationFromHotel", {
      orderid: OrderId,
      code: 1,
      OrderData: props.Order,
      currDate :props.currDate
    });
    props.DeleteFunction(OrderId)
  };
  const RejectOrder = (OrderId, Order) => {
    SocketCtx.emit("OrderConfirmationFromHotel", {
      orderid: OrderId,
      id : Order._id,
      code: 0,
      OrderData: props.Order,
      currDate :props.currDate
    });
    props.DeleteFunction(OrderId)
  };
  return (
    <div className="New-Order-Owner">
      <div className="New-Order-Container1">
        <div className="New-Order-Image">
          <img src={Face} alt="not available" />
        </div>
        <div className="New-Order-Name">{props.Order.UserId}</div>
      </div>
      <div className="New-Order-Container2">
        <div className="New-Order-Item-Container">
          <div className="New-Order-Item1"> Order Number</div>
          <div className="New-Order-Item2">{props.Order.OrderId}</div>
        </div>
        <div className="New-Order-Item-Container">
          <div className="New-Order-Item1">Items</div>
          <div className="New-Order-Item2">
            {props.Order.Items.map((item, index) => (
              <p>
                {item.Quantity}x{item.Name} ,{" "}
              </p>
            ))}
          </div>
        </div>
        <div className="New-Order-Item-Container">
          <div className="New-Order-Item1">Date</div>
          <div className="New-Order-Item2">24 july 2024 at 9:00pm</div>
        </div>
      </div>
      <div className="New-Order-Action-Buttons">
        <button
          className="New-Order-Butts"
          onClick={()=>{AcceptOrder(props.Order.OrderId, props.Order)}}
        >
          Accept
        </button>
        <button
          className="New-Order-Butts"
          onClick={()=>{RejectOrder(props.Order.OrderId, props.Order)}}
        >
          Reject
        </button>
      </div>
    </div>
  );
}



export default OrderLists;
