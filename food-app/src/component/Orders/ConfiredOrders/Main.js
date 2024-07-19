import React, { useContext,useEffect,useState } from "react";
import { Order } from "./OrderData";
import OrderTotal from "./OrderTotal";
import ClientContext from "../../../store/AuthClient";
import OrderDetails from "./OrderDetails";
import OrderItemDetails from "./OrderItemDetails";
import ModalPortal from "../../UI/ModalPortal";
import './ConfirmedOrders.css'
function ConfirmedOrders(props) {
  const [Order,SetOrder]=useState([])
  const[Show,SetShow]=useState(false);
  useEffect(()=>{
    console.log(props.Order)
    SetOrder(props.Order)
    setTimeout(()=>{
      SetShow(true)
    },300)
  },[])
  // const clients=useContext(ClientContext)
  return (
   <>{Show &&
    <ModalPortal onClose={props.OnClose}>
    <div className="Con-Orders flex1">
      <div className="Ord-Summary">Order Summary</div>
      <div className="Ord-Hotel Under-Shadow">
        <div className="Ord-Hotel-Name">{Order.HotelName}</div>
        <div>{Order.HotelAddress}</div>
      </div>
      <div className="Ord-Status">{Order.OrderStatus}</div>
      <OrderItemDetails item={Order.Items} />
      <OrderTotal 
      ItemTotal={Order.ItemTotal}
        tax={Order.GST}
        delivery={Order.Delivery}
        total={Order.Total}
      />
      <OrderDetails item={Order.OrderDetails} />
      
    </div>
    </ModalPortal>
    }
    </>
  );
}

export default ConfirmedOrders;
