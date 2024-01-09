import React, { useContext,useState } from "react";
import FoodType from "../../Owner/HotelDetails/FoodType";
import FoodActionOptions from "./FoodActionOptions";
import DataDisplay from "./DataDisplay";
import OwnerAddHotelPage from "../../../projectRoutes/OwnerAddHotel";
import "./FoodDataDetail.css";
import AddNewDish from "../../Owner/HotelDetails/AddNewDish";
import OwnerContext from "../../../store/AuthOwner";
import OwnerAddDish from "../../../projectRoutes/OwnerAddDish";
function HotelFoodDataDetail(props) {
  const OwnerCtx=useContext(OwnerContext)
  const [OpenAdddishDiv,SetAdddishDiv]=useState(false)
  // console.log(props.Name);
  // console.log(OwnerCtx)
  return (
    <>
    <div className="Food-Category" id={props.item.Name}>
      <div className="Food-Category-Name">{props.item.Name}</div>
      {props.item.items.map((ite) => (
        <DataDisplay item={ite} func={props.func} Name={props.Name} />
      ))}
      {
        OwnerCtx.isAuth&&
      
      <button onClick={()=>{SetAdddishDiv(true)}}>Add Dish</button>}
      <div className="Food-Line"></div>
    </div>
    {OpenAdddishDiv&&
      <AddNewDish  Category={props.item.Name} OnClose={()=>{ console.log('svvs')
      SetAdddishDiv(false)}}/>
    }
    </>
  );
}

export default HotelFoodDataDetail;
