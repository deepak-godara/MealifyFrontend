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
    // if(SocketCtx) SocketCtx.emit("check", {message: "cart is connected:"});
  }, [SocketCtx]);
  const CartSubmit = (event) => {
    console.log("socket  fom cart is : ",SocketCtx);
    event.preventDefault();
    if(SocketCtx)
  {  
    console.log(Cart);
    SocketCtx.emit("NewOrder", { id:Cart.HotelId, Cart: Cart,UserId:ClientCtx.ClientId });
  // console.log("socket  from if condition  cart is : ",SocketCtx);
  // console.log("hotel from if condition  cart is : ",Cart.HotelId);
}
  // if(SocketCtx){
  //   SocketCtx.on("rejectionbyHotel" , (message)=>{
  //        console.log(message);
  //   })
  // }
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
      if(SocketCtx)
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
              {Cart.Items.map((item, index) => (
               <DataDisplay key={index} Name={Cart.HotelName} item={item} />
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
