import React, { useContext, useState } from "react";
import ClientContext from "../../../store/AuthClient";
import OwnerContext from "../../../store/AuthOwner";
import { useParams } from "react-router-dom";
import "./FoodActionOptions.css";
function FoodActionOptions(props) {
  const Params = useParams();
  const clientctx = useContext(ClientContext);
  const ownerCtx = useContext(OwnerContext);
  const [itemCount, SetItemCount] = useState(1);
  const SetCountFunc = (event) => {
    SetItemCount(event.target.value);
  };
  const FoddDeleteFunc = (event) => {
    event.preventDefault();
    async function DeleteFoodItem() {
      const data = await fetch(
        `http://localhost:4000/${ownerCtx.OwnerHotelId}/deleteitem`,
        {
          method: "POST",
          body: JSON.stringify({
            foodname: props.item,
            foodcategory: props.CategoryName,
          }),
          headers: { "Content-type": "application/json" },
        }
      );
      const js = await data.json();
      if (js.status === "200") {
        window.location.reload();
      }
    }
    DeleteFoodItem();
  };
  const SubmittoCart = (event) => {
    event.preventDefault();
    const data = {
      HotelName: props.Name,
      HotelId:Params.hotelid,
      Quantity: itemCount,
      type:props.type,
      Price: props.Price,
      FoodName: props.item,
    };
    props.func(data);
  };
  return (
    <>
      {clientctx.isAuth && (
        <form className="FoodItem-Form" onSubmit={SubmittoCart}>
          <input
            type="number"
            value={itemCount}
            onChange={SetCountFunc}
          ></input>
          <button type="submit" style={{background:"rgb(230, 235, 240)"}}>ADD</button>
        </form>
      )}
      {ownerCtx.isAuth && (
        <form className="FoodItem-Form" onSubmit={FoddDeleteFunc}>
          <button type="submit" style={{background:"rgb(230, 235, 240)"}}>Delete</button>
        </form>
      )}
    </>
  );
}

export default FoodActionOptions;
