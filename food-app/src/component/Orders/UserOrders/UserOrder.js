import React ,{useState} from "react";
import { OrderData } from "./OrderData";
import ConfirmedOrders from "../ConfiredOrders/Main";
import Pizza from "./../../../assests/pizza.jpg";
import OrderItemDetails from "./OrderItemDetails";
import "./UserOrder.css";
import { Link } from "react-router-dom";
function UserOrder(props) {
  const OrderData = props.OrderData;
  const HotelDatas = OrderData.HotelData;
  const [ShowDetails,SetShowDetails]=useState(false);
  const OrderItems = OrderData.Order.OrderItem;
  return (
    <div className="All-Order-Box">
      <div className="All-Hotel-Box">
        <div className="All-Hotel-Box1">
          <div className="All-Hotel-Image">
            <img src={Pizza} alt="Not available"></img>
          </div>
          <div className="All-Hotel-Data">
            <div className="HotelData1">{HotelDatas.Name}</div>
            <div className="HotelData2">{HotelDatas.Address}</div>
          </div>
        </div>
        <div className="All-Hotel-Box2">Delivered</div>
      </div>
      <div className="All-Item-Box">
        <div className="Order-Datas">
          <div className="Order-Datas-1">Order Number</div>
          <div className="Order-Datas-2">2785575483938</div>
        </div>
        <div className="Order-Datas">
          <div className="Order-Datas-1">Total Amount</div>
          <div className="Order-Datas-2">234</div>
        </div>
        <div className="Order-Datas">
          <div className="Order-Datas-1">Items</div>
          <div className="Order-Datas-2">{OrderItems.map((item) => (
          <div>
            {item.Quantity}x{item.Name} ,
          </div>
        ))}</div>
        </div>
        
        <div className="Order-Datas">
          <div className="Order-Datas-1">Orderd On</div>
          <div className="Order-Datas-2">24 July 2019</div>
        </div>
      </div>
     <div className="Order-Detail-View">
      <button className="Order-Detail-Button" onClick={()=>SetShowDetails(true)}>View Details</button>
      {
        ShowDetails&&
        <ConfirmedOrders  OnClose={()=>{SetShowDetails(false)}}/>
      }
     </div>
    </div>
  );
}

export default UserOrder;
