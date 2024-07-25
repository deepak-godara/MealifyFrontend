import React, { useContext, useState } from "react";
import DataDisplay from "./DataDisplay";
import "./FoodDataDetail.css";
import AddNewDish from "../../Owner/HotelDetails/AddNewDish";
import OwnerContext from "../../../store/AuthOwner";
function HotelFoodDataDetail(props) {
  const OwnerCtx = useContext(OwnerContext);
  const [OpenAdddishDiv, SetAdddishDiv] = useState(false);
  return (
    <>
      <div className="Food-Category" id={props.item.Name}>
        <div className="Food-Category-Name">{props.item.Name}</div>
        {props.item.items.map((ite) => (
          <DataDisplay item={ite} func={props.func} Name={props.Name}  CategoryName={props.CategoryName}/>
        ))}
        {OwnerCtx.isAuth && (
          <button
            onClick={() => {
              SetAdddishDiv(true);
            }}
            style={{background:"#4d5966"}}
          >
            Add Dish
          </button>
        )}
        <div className="Food-Line"></div>
      </div>
      {OpenAdddishDiv && (
        <AddNewDish
          Category={props.item.Name}
          AddItem={props.AddItem}
          OnClose={() => {
            SetAdddishDiv(false);
          }}
        />
      )}
    </>
  );
}

export default HotelFoodDataDetail;
