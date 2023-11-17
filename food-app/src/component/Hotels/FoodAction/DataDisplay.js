import React from "react";
import FoodType from "../../Owner/HotelDetails/FoodType";
import "./FoodDataDetail.css";
import FoodActionOptions from "./FoodActionOptions";
function DataDisplay(props) {
  return (
    <div
      className="Food-Data-Display"
      key={props.item.Name + props.item.Description}
    >
      <FoodType types={props.item.FoodType}></FoodType>
      <div className="Food-Data-Info">
        <div className="Food-Name">{props.item.Name}</div>
        <div className="Food-Price">₹{props.item.Price}</div>
        <div className="Food-Price">{props.item.Description}</div>
      </div>
      <FoodActionOptions
        func={props.func}
        item={props.item.Name}
        type={props.item.FoodType}
        Price={props.item.Price}
        Name={props.Name}
      ></FoodActionOptions>
    </div>
  );
}

export default DataDisplay;
