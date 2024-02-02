import React, { useContext, useEffect, useState } from "react";
import { RiTimerFill } from "react-icons/ri";
import io from "socket.io-client";
import CancellationPolicy from "./CancellationPolicy";
import OrderBillDetails from "./OrderBillDetails";
import DataDisplay from "../../Hotels/FoodAction/DataDisplay";
import "./Orders.css";
import AddItem from "./AddItem";
import { GetCart } from "../../../BackendApi/Cart";
import ClientContext from "../../../store/AuthClient";
import { useSocket } from "../../../store/SocketContext";
function Cart() {
  const [Cart, SetCart] = useState(null);
  const ClientCtx = useContext(ClientContext);
  const SocketCtx = useSocket();
  const [socketid, SetSocketid] = useState(SocketCtx);
  useEffect(() => {
    SetSocketid(SocketCtx);
  }, [SocketCtx]);
  const CartSubmit = (event) => {
    console.log(SocketCtx);
    event.preventDefault();
    SocketCtx.emit("NewOrder", { id:Cart.HotelId, Cart: Cart,UserId:ClientCtx.ClientId });
    SetCart(null);
  };
  useEffect(() => {
    async function GetCartData() {
      const Data = await GetCart(ClientCtx.ClientId);
      if (Data.status === "success") 
      {SetCart(Data.Cart);
        console.log(Data.Cart)
      }
      // console.log(ClientCtx.Socket)
      SocketCtx.on("OrderConfirmationByHotel",({message,code})=>{
       console.log(message+" svsv "+code);
      })
    }
    GetCartData();
  }, []);
  return (
    <div>
      {Cart !== null&&Cart.HotelId!==null && (
        <div className="Order-Main-Container">
          <div className="Order-Hotel-Container">{Cart.HotelName}</div>
          <div className="Order-Time">
            <div className="Timer-Icon">
              <RiTimerFill />
            </div>
            <div> Delivery in 45-50 mins</div>
          </div>
          <div className="Order-Items-Div">
            <div className="Items-Added">ITEM(S) ADDED</div>

            <div className="Order-Items">
              {Cart.Items.map((items) => (
                <DataDisplay Name={Cart.HotelName} item={items} />
              ))}
            </div>
          </div>
          <AddItem HotelId={Cart.HotelId} />
          <div className="Order-Items-Div">
            <OrderBillDetails BillData={Cart.BillDetails} />
          </div>
          <CancellationPolicy />
          <button className="Order-Button" onClick={CartSubmit}>
            Order
          </button>
        </div>
      )}
      {
        (Cart==null||Cart.HotelId==null)&&<div className="Empty-Cart">
          Your Cart is Empty
          </div>
      }
    </div>
  );
}
export default Cart;
