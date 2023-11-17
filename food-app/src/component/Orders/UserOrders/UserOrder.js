import React from "react";
import { OrderData } from "./OrderData";
import Pizza from "./../../../assests/pizza.jpg";
import OrderItemDetails from "./OrderItemDetails";
import "./UserOrder.css";
import { Link } from "react-router-dom";
function UserOrder(props) {
  const OrderData = props.OrderData;
  const HotelDatas = OrderData.HotelData;
  const OrderItems = OrderData.Order.OrderItem;
  return (
    <Link to='Con' className="All-Order-Box">
      <div className="All-Hotel-Box">
        <div className="All-Hotel-Box1">
          <div className="All-Hotel-Image">
            <img src={Pizza} alt="Not available"></img>
          </div>
          <div className="All-Hotel-Data">
            <div className="HotelData1">{HotelDatas.Name}</div>
            <div className="HotelData2">{HotelDatas.Address}</div>
            <div className="HotelData3">{HotelDatas.Status}</div>
          </div>
        </div>
        <div className="All-Hotel-Box2">Delivered</div>
      </div>
      <div className="All-Item-Box">
        {OrderItems.map((item) => (
          <OrderItemDetails
            type={item.type}
            Name={item.Name}
            Quantity={item.Quantity}
          />
        ))}
      </div>
      <div className="Item-Divider"></div>
      <div className="All-Data-Box">
        <div className="HotelData2">{OrderData.Order.Date}</div>
        <div className="HotelData1">₹{OrderData.Order.Amount}</div>
      </div>
    </Link>
  );
}

export default UserOrder;
