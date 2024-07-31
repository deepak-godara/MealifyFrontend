import React, { useContext, useEffect, useState } from "react";
import { OrderData } from "./OrderData";
import UserOrder from "./UserOrder";
import "./UserOrder.css";
import Loader from "react-js-loader";
import Activeorder from "./Activeorder";
import UseScrollToTop from "../../UI/UseScroll";
import { useDispatch, useSelector } from "react-redux";
import { GetActiveOrders } from "../../../reduxtool/reduxActions/OrdersActions";
import { useSocket } from "../../../store/SocketContext";
import ClientContext from "../../../store/AuthClient";
// import StatusDisplay from './statusDisplay';

import Modal from "../../Review/modal";
import Reviewform from "../../Review/Reviewform";

const Ordersss = () => {
  const socket = useSocket();
  UseScrollToTop();
  console.log("user socket is :", socket);
  const dispatch = useDispatch();
  const activeOrderdata = useSelector((state) => state.ActiveOrderdata);
  const { loading, error, Order } = activeOrderdata;
  const userctx = useContext(ClientContext);
  const clientId = userctx.ClientId;
  console.log("main.js Client id is:", clientId);
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [id, setId] = useState("");

  const handleClose = () => {
    setShowReviewForm(false);
    dispatch(GetActiveOrders());
  };

  useEffect(() => {
    dispatch(GetActiveOrders());
    if (socket) {
      socket.on("DeliveryConfirmed", ({ status, orderId, HotelName }) => {
        setId(orderId);
        setShowReviewForm(true);
      });
    }
  }, [dispatch, socket]);

  return (
    <>
      <div className="mainOrderpage">
        <div>
          <h3>Active Orders</h3>
        </div>
        {loading && (
          <div className="Spinner-Class3">
            <Loader
              type="spinner-cub"
              color="red"
              // style={{ position:"absolute", top:"2.9rem"}}

              // top="2.9rem"
              bgColor="rgb(77, 89, 102)"
              // title={"spinner-cub"}
              size={50}
            ></Loader>
          </div>
        )}
        {!loading && (
          <div className="ActiveOrderClass">
            {Order &&
              Order.map(
                (item, index) =>
                  item.OrderStatus !== "delivered" &&
                  item.UserId === clientId && (
                    <Activeorder key={index} item={item} socket={socket} />
                  )
              )}
          </div>
        )}
        <div className="PastOrders">
          <h3>Past Orders</h3>
        </div>
        {loading && (
          <div className="Spinner-Class3">
            <Loader
              type="spinner-cub"
              color="red"
              // style={{ position:"absolute", top:"2.9rem"}}

              // top="2.9rem"
              bgColor="rgb(77, 89, 102)"
              // title={"spinner-cub"}
              size={50}
            ></Loader>
          </div>
        )}
        {!loading && (
          <div className="Order-Main-Containers">
            {Order && Order.length > 0 ? (
              Order.map(
                (item, index) =>
                  item.OrderStatus === "delivered" &&
                  item.UserId === clientId && (
                    <UserOrder key={index} OrderData={item} />
                  )
              )
            ) : (
              <p>No past orders available</p>
            )}
          </div>
        )}

        <Modal isVisible={showReviewForm} onClose={handleClose}>
          <Reviewform OrderId={id} onClose={handleClose} />
        </Modal>
      </div>
    </>
  );
};

export default Ordersss;
