import React from "react";
import OrderDetailItems from "./OrderDetailItems";
import './ConfirmedOrders.css'
function OrderDetails(props) {
  const Data = props.item;
  return (
    <div className=" Ord-Det-Container flex1">
      <div className="Ord-Det-Con Under-Shadow">Order Details</div>
    <div className="flex1 Ord-Details">
      {/* <OrderDetailItems Name="OrderNumber" Data={Data.OrderNumber} /> */}
      <OrderDetailItems Name="Payment" Data={Data.Payment} />
      <OrderDetailItems Name="Date" Data={Data.Date} />
      <OrderDetailItems Name="PhoneNumber" Data={Data.PhoneNumber} />
      <OrderDetailItems Name="Deliver to" Data={Data.DeliverTo} />
    </div>
    </div>
  );
}

export default OrderDetails;
