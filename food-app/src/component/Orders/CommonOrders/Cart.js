import React, { useContext, useEffect, useState } from "react";
import { RiTimerFill } from "react-icons/ri";
import CancellationPolicy from "./CancellationPolicy";
import OrderBillDetails from "./OrderBillDetails";
import DataDisplay from "../../Hotels/FoodAction/DataDisplay";
import "./Orders.css";
import { OrderData } from "./OrderDemo";
import AddItem from "./AddItem";
import { GetCart } from "../../../BackendApi/Cart";
import ClientContext from "../../../store/AuthClient";

const CartSubmit = () => {};
function Cart() {
  const [Cart, SetCart] = useState(null);
  const ClientCtx = useContext(ClientContext);
  useEffect(() => {
    async function GetCartData() {
      const Data = await GetCart(ClientCtx.ClientId);
      if (Data.status === "success") SetCart(Data.Cart);
    }
    GetCartData();
  }, []);
  return (
    <div>
      {Cart !== null && (
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
    </div>
  );
}
export default Cart;
