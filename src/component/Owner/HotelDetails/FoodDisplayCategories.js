import React, { useState, useContext } from "react";
import "./FoodDisplayCategories.css";
import ClientContext from "../../../store/AuthClient";
import OwnerContext from "../../../store/AuthOwner";
import { Ports } from "../../../BackendApi/Url";
import HotelFoodDataDetail from "../../Hotels/FoodAction/FoodDataDetail";
import CartChange from "../../Cart/CartChange";
import AddNewCategories from "./AddNewCategories";
function FoodDisplayCategories(props) {
  const clientctx = useContext(ClientContext);
  const OwnerCtx = useContext(OwnerContext);
  const [ItemData, SetItemData] = useState({});
  const [OpenCategory, SetCategory] = useState(false);
  const [Confirmation, SetConfirmation] = useState(false);
  const [Error, SetError] = useState(false);
  const onSubFunc = (data) => {
    SetItemData(data);
    async function SetCartData() {
      const Data = await fetch(
        `${Ports}/${clientctx.ClientId}?allow=false`,
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
      {(props.menu===null||props.menu.length===0)&&<div  className="Empty-Cart">menu is empty</div>}
      {(props.menu!==null||props.menu.length!==0)&&
      <div className="Display-Food-Item-Categories">
        {props.menu.map((items) => (
          <HotelFoodDataDetail
            key={items.Name}
            func={onSubFunc}
            item={items}
            CategoryName={items.Name}
            Name={props.Name}
            AddItem={props.AddItem}
          ></HotelFoodDataDetail>
        ))}
        {OwnerCtx.isAuth && (
          <>
            <button
              onClick={() => {
                SetCategory(true);
              }}
              style={{ background: "#4d5966" ,padding:"0.5rem" }}
            >
              Add New Category
            </button>
            {OpenCategory && <AddNewCategories func={SetCategory} />}
          </>
        )}
      </div>
}
    </>
  );
}

export default FoodDisplayCategories;
