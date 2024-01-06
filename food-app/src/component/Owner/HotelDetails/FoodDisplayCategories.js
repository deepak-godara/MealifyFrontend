import React, { useState, useContext } from "react";
import "./FoodDisplayCategories.css";
import ClientContext from "../../../store/AuthClient";
import HotelFoodDataDetail from "../../Hotels/FoodAction/FoodDataDetail";
import CartChange from "../../Cart/CartChange";
import { useParams } from "react-router-dom";
function FoodDisplayCategories(props) {
  const Params = useParams();
  const clientctx = useContext(ClientContext);
  const [ItemData, SetItemData] = useState({});
  const [Confirmation, SetConfirmation] = useState(false);
  const [Error, SetError] = useState(false);
  const onSubFunc = (data) => {
    // data.preventDefault();
    console.log("submittingtocart");
    SetItemData(data);
    async function SetCartData() {
      const Data = await fetch(
        `http://localhost:4000/${clientctx.ClientId}?allow=false`,
        {
          method: "POST",
          body: JSON.stringify({
            Data: data,
          }),
          headers: { "Content-type": "application/json" },
        }
      );
      const data1 = await Data.json();
      if (data1.status === "203") {
        SetConfirmation(true);
      } else {
        SetError(true);
      }
    }
    SetCartData();
  };
  const ResubmitData = () => {
    async function ReSetCartData() {
      const Data = await fetch(
        `http://localhost:4000/${clientctx.ClientId}?allow=true`,
        {
          method: "POST",
          body: JSON.stringify({
            Data: ItemData,
          }),
          headers: { "Content-type": "application/json" },
        }
      );
      const data = await Data.json();
      if (data.status === "203") {
        console.log("addde food-item to cart");
      } else {
        SetError(true);
      }
    }
    ReSetCartData();
  };
  const onClose = (data) => {
    console.log("dsfdv");
    console.log(data);
    SetConfirmation(false);
    if (data === "yes") {
      ResubmitData();
    }
  };
  return (
    <>
      {Confirmation && (
        <CartChange onClose={onClose} ChangeHotel={ResubmitData}></CartChange>
      )}
      {Error && <div></div>}
      <div className="Display-Food-Item-Categories">
        {props.menu.map((items) => (
          <HotelFoodDataDetail
            key={items.Name}
            func={onSubFunc}
            item={items}
            Name={props.Name}
          ></HotelFoodDataDetail>
        ))}
      </div>
    </>
  );
}

export default FoodDisplayCategories;
