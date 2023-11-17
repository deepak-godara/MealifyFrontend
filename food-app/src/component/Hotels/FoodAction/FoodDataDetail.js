import React from "react";
import FoodType from "../../Owner/HotelDetails/FoodType";
import FoodActionOptions from "./FoodActionOptions";
import DataDisplay from "./DataDisplay";
import "./FoodDataDetail.css";
function HotelFoodDataDetail(props) {
  console.log(props.Name);
  return (
    <div className="Food-Category" id={props.item.Name}>
      <div className="Food-Category-Name">{props.item.Name}</div>
      {props.item.items.map((ite) => (
        <DataDisplay item={ite} func={props.func} Name={props.Name} />
      ))}
      <div className="Food-Line"></div>
    </div>
  );
}

export default HotelFoodDataDetail;
