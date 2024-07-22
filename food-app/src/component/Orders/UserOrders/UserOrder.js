import React, { useState, useEffect } from "react";
import { OrderData } from "./OrderData";
import { GetOrderDetails } from "../../../BackendApi/GetOrders";
import ConfirmedOrders from "../ConfiredOrders/Main";
import Pizza from "./../../../assests/pizza.jpg";
import OrderItemDetails from "./OrderItemDetails";
import "./UserOrder.css";
import { Link } from "react-router-dom";
function UserOrder(props) {
  const Order = props.OrderData;
  // const [Order, StateOrder] = useState(null);
  const [ShowDetails, SetShowDetails] = useState(false);
//   console.log("order data wertyuiouyfjhv from userOrder is : " , OrderData)
  // useEffect(() => {
  //   console.log("orderdata is  : "  , OrderData);
  //   async function GetOrderDatas(OrderId) {
  //     console.log("order Id is from  userorder,js is : " , OrderId);
  //     const data = await GetOrderDetails(OrderId);
  //     // console.log(data.order)
  //     StateOrder(data.order);
  //   }
  //   GetOrderDatas(OrderData);
  // }, []);
  // const OrderItems = OrderData.Order.OrderItem;
//   console.log("item from oser order is : " , props.OrderData);
  return (
    <>
      {Order && (
        <div className="All-Order-Box">
          <div className="All-Hotel-Box">
            <div className="All-Hotel-Box1">
              <div className="All-Hotel-Image">
                <img src={Pizza} alt="Not available"></img>
              </div>
              <div className="All-Hotel-Data">
                <div className="HotelData1">{Order.HotelName}</div>
                <div className="HotelData2">{Order.HotelAddress}</div>
              </div>
            </div>
            <div className="All-Hotel-Box2">{Order.OrderStatus}</div>
          </div>
          <div className="All-Item-Box">
            <div className="Order-Datas">
              <div className="Order-Datas-1">Order Number</div>
              <div className="Order-Datas-2">2785575483938</div>
            </div>
            <div className="Order-Datas">
              <div className="Order-Datas-1">Total Amount</div>
              <div className="Order-Datas-2">{Order.Total}</div>
            </div>
            <div className="Order-Datas">
              <div className="Order-Datas-1">Items</div>
              <div className="Order-Datas-2">
                {Order.Items.map((item) => (
                  <div>
                    {item.Quantity}x{item.Name} ,
                  </div>
                ))}
              </div>
            </div>

            <div className="Order-Datas">
              <div className="Order-Datas-1">Orderd On</div>
              <div className="Order-Datas-2">24 July 2019</div>
            </div>
          </div>
          <div className="Order-Detail-View">
            <button
              className="Order-Detail-Button"
              onClick={() => SetShowDetails(true)}
            >
              View Details
            </button>
            {ShowDetails && (
              <ConfirmedOrders
                Order={Order}
                OnClose={() => {
                  SetShowDetails(false);
                }}
              />
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default UserOrder;
