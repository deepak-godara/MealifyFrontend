import React from "react";
import { Order } from "./OrderData";
import OrderTotal from "./OrderTotal";
import OrderDetails from "./OrderDetails";
import OrderItemDetails from "./OrderItemDetails";
import ModalPortal from "../../UI/ModalPortal";
import './ConfirmedOrders.css'
function ConfirmedOrders(props) {
  return (
    <ModalPortal onClose={props.OnClose}>
    <div className="Con-Orders flex1">
      <div className="Ord-Summary">Order Summary</div>
      <div className="Ord-Hotel Under-Shadow">
        <div className="Ord-Hotel-Name">{Order.HotelName}</div>
        <div>{Order.Address}</div>
      </div>
      <div className="Ord-Status">{Order.Status}</div>
      <OrderItemDetails item={Order.OrderItems} />
      <OrderTotal
      ItemTotal={Order.ItemTotal}
        tax={Order.GST}
        delivery={Order.Delivery}
        total={Order.Total}
      />
      <OrderDetails item={Order.OrderDetails} />
      
    </div>
    </ModalPortal>
  );
}

export default ConfirmedOrders;
