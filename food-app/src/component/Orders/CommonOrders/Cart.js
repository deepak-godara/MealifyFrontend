import React, { useContext, useEffect, useState,useRef } from "react";
import { RiTimerFill } from "react-icons/ri";
import io from "socket.io-client";
import Loader from "react-js-loader";
import { GetDistance } from "../../../BackendApi/GetHotelDistance";
import CancellationPolicy from "./CancellationPolicy";
import OrderBillDetails from "./OrderBillDetails";
import DataDisplay from "../../Hotels/FoodAction/DataDisplay";
import "./Orders.css";
import AddItem from "./AddItem";
import { GetCart } from "../../../BackendApi/Cart";
import ClientContext from "../../../store/AuthClient";
import { useSocket } from "../../../store/SocketContext";
function CartValid(props){
  const divRef = useRef(null);
  console.log("CartValid")
  const [isDivVisible, setDivVisible] = useState(true);

  const handleClickOutside = (event) => {
    if (divRef.current && !divRef.current.contains(event.target)) {
      props.func();
    }
  };

  useEffect(() => {
    setTimeout(()=>{
      props.func();
    },1000)
  }, []);
  return (
    <div className="AddAdresss" ref={divRef}>
      <div>The hotel does not deliver to your location</div>
      <div>Please order from a different Hotel</div>
    </div>
  );
}
function Cart() {
  const [Cart, SetCart] = useState(null);
  const ClientCtx = useContext(ClientContext);
  const SocketCtx = useSocket();
  const [Valid, SetValid] = useState(true);
  const [Loading, SetLoading] = useState(true);
  const [Visible,SetVisible]=useState(false);
  const CartSubmit = (event) => {
    console.log("socket  fom cart is : ", SocketCtx);
    event.preventDefault();
    console.log(SocketCtx);

    if(!Valid)
    {
      SetVisible(true);
    return;
    }
    if (SocketCtx) {
      console.log(Cart);
      SocketCtx.emit("NewOrder", {
        id: Cart.HotelId,
        Cart: Cart,
        UserId: ClientCtx.ClientId,
      });
      // console.log("socket  from if condition  cart is : ",SocketCtx);
      // console.log("hotel from if condition  cart is : ",Cart.HotelId);
    }

    SetCart(null);
  };
  useEffect(() => {
    async function GetCartData() {
      SetLoading(true);
      const Data = await GetCart(ClientCtx.ClientId);
      if (Data.status === "success") {
        SetCart(Data.Cart);
        console.log(Data.Cart);
      }

      const Distance = await GetDistance(
        Data.Cart.HotelId,
        ClientCtx.CurrentActiveAddress.latitude.$numberDecimal,
        ClientCtx.CurrentActiveAddress.longitude.$numberDecimal
      );
      console.log(Distance+ "   dist")
      if (Distance.Distance/1000 > 10) {
        console.log("rfb")
        SetValid(false);
      }
      setTimeout(() => {
        SetLoading(false);
      }, 200);

      // console.log(ClientCtx.Socket)
      if (SocketCtx)
        SocketCtx.on("OrderConfirmationByHotel", ({ message, code }) => {
          console.log(message + " svsv " + code);
        });
    }
    GetCartData();
  }, []);
  return (
    <div style={{ width: "100%" }}>
      {Loading && (
        <div className="Spinner-Class2">
          {" "}
          <Loader
            type="spinner-cub"
            color="red"
            // style={{ position:"absolute", top:"2.9rem"}}

            // top="2.9rem"
            bgColor="red"
            // title={"spinner-cub"}
            size={50}
          ></Loader>
        </div>
      )}
      {!Loading && Cart !== null && Cart.HotelId !== null && (
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
      {Visible&&<div className="Hii"><CartValid func={()=>{SetVisible(false)}}/></div>}
      {!Loading && (Cart == null || Cart.HotelId == null) && (
        <div className="Empty-Cart">Your Cart is Empty</div>
      )}
    </div>
  );
}
export default Cart;
