import React, { useContext, useEffect, useState } from "react";
import { OrderData } from "./OrderData";
import { AddReview } from "../../../BackendApi/AddReview";
import UserOrder from "./UserOrder";
import Loader from "react-js-loader";
import "./UserOrder.css";
import Activeorder from "./Activeorder";
import { useDispatch, useSelector } from "react-redux";
import { GetActiveOrders } from "../../../reduxtool/reduxActions/OrdersActions";
import { useSocket } from "../../../store/SocketContext";
import ClientContext from "../../../store/AuthClient";
import StatusDisplay from "./statusDisplay";

const Ordersss = () => {
  const socket = useSocket();
  const dispatch = useDispatch();
  const activeOrderdata = useSelector((state) => state.ActiveOrderdata);
  const { loading, error, Order,Active,Past } = activeOrderdata;
  const userctx = useContext(ClientContext);
  const clientId = userctx.ClientId;
  console.log("main.js Client id is:", clientId);

  const [status, setStatus] = useState("");
  const [id, setId] = useState("");
  const [statusDisplay, setStatusDisplay] = useState(false);
  const [name, setName] = useState("");

  useEffect(() => {
    async function GetOrder(){
      dispatch( GetActiveOrders());
    if (socket) {
      socket.on(
        "DeliveryConfirmed",
        async ({ status, orderId, HotelName, HotelId, ClientId }) => {
          setStatusDisplay(true);
          setId(orderId);
          setStatus(status);
          setName(HotelName);
          // if(ClientId===userctx.ClientId)
          // await AddReview();
          // // await AddReview(HotelId,ClientId,4,"Very good food and on time ordrer")
          dispatch(GetActiveOrders());
        }
      );
    }
  }
    GetOrder()
    //   if (socket) {
    //     socket.on("changeStatusUserside", ({ status, ownerid, userId, orderId , Name }) => {
    //         setStatusDisplay(true);
    //         setId(orderId);
    //         setStatus(status);
    //         setName(Name);
    //         dispatch(GetActiveOrders());
    //     });
    //   }
  }, [dispatch, socket]);

  return (
    <>
      <div className="mainOrderpage">
        <div>
          <h3>Active Orders</h3>
        </div>
        {loading && (
          <div className="Spinner-Class3">
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
        {!loading && (
          <div className="ActiveOrderClass">
            {Order && !Active?
              Order.map(
                (item, index) =>
                  item.OrderStatus !== "delivered" &&
                  item.UserId === clientId && (
                    <Activeorder key={index} item={item} socket={socket} />
                  )
              ):<div>   <p className="No-Hotels">No Active orders available</p></div>}
          </div>
        )}

        <div className="PastOrders">
          <h3>Past Orders</h3>
        </div>
        {loading && (
          <div className="Spinner-Class3">
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
        {!loading && (
          <div className="Order-Main-Containers">
            {Order && !Past? (
              Order.map(
                (item, index) =>
                  item.OrderStatus === "delivered" &&
                  item.UserId === clientId && (
                    <UserOrder key={index} OrderData={item} />
                  )
              )
            ) : (
              <p className="No-Hotels">No past orders available</p>
            )}
          </div>
        )}
      </div>

      {/* {Order && Order.map((item , index)=>{
        if(item._id === id)(statusDisplay&& <StatusDisplay Status={status} OrderId={id} Name={name} onClose={() => setStatusDisplay(false)} />)
      })} */}
    </>
  );
};

export default Ordersss;
