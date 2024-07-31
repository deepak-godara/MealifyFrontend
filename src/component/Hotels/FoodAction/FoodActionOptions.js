import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import ClientContext from "../../../store/AuthClient";
import OwnerContext from "../../../store/AuthOwner";
import { useParams } from "react-router-dom";
import { Ports } from "../../../BackendApi/Url";
import "./FoodActionOptions.css";
function Notify() {
  return (
    <div className="AddAdresss">
      <div>Directing you to address HomePage</div>
      <div>Please add address to proceed</div>
    </div>
  );
}
function FoodActionOptions(props) {
  const Params = useParams();
  const clientctx = useContext(ClientContext);
  const ownerCtx = useContext(OwnerContext);
  const Navigate = useNavigate();
  const[Divertae,SetDivarte]=useState(false);
  const [itemCount, SetItemCount] = useState(1);
  const SetCountFunc = (event) => {
    SetItemCount(event.target.value);
  };
  const FoddDeleteFunc = (event) => {
    event.preventDefault();
    async function DeleteFoodItem() {
      const data = await fetch(
        `${Ports}/${ownerCtx.OwnerHotelId}/deleteitem`,
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
    if (!clientctx.CurrentActiveAddress) {
      
        SetDivarte(true);
        setTimeout(()=>{
          Navigate("/user/address");
        },400)
      
      
    } else {
      const data = {
        HotelName: props.Name,
        HotelId: Params.hotelid,
        Quantity: itemCount,
        type: props.type,
        Price: props.Price,
        FoodName: props.item,
      };
      props.func(data);
    }
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
          <button type="submit" style={{ backgroundColor: "#4d5966",cursor:"pointer" }}>
            ADD
          </button>
        </form>
      )}
      {ownerCtx.isAuth && (
        <form className="FoodItem-Form" onSubmit={FoddDeleteFunc}>
          <button type="submit" style={{ backgroundColor: "#4d5966",cursor:"pointer"  }}>
            Delete
          </button>
        </form>
      )}
      {Divertae&&<Notify/>}
    </>
  );
}

export default FoodActionOptions;
