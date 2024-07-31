import React, { useContext, useEffect, useState } from "react";
import "./AddNewDish.css";
import ModalPortal from "../../UI/ModalPortal";
import OwnerContext from "../../../store/AuthOwner";
import { Ports } from "../../../BackendApi/Url";
function AddNewDish(props) {
  const OwnerCtx=useContext(OwnerContext)
  const [FoodName, SetFoodName] = useState("");
  const [FoodPrice, SetFoodPrice] = useState("");
  const [FoodCategory, SetFoodCategory] = useState("");
  const [FoodType, SetFoodType] = useState("Veg");
  const [FoodDescription, SetFoodDesscription] = useState("");
  const handleFoodFormChange = (event) => {
    if (event.target.name === "foodname") SetFoodName(event.target.value);
    else if (event.target.name === "foodprice")
      SetFoodPrice(event.target.value);
    else if (event.target.name === "food") SetFoodCategory(event.target.value);
    else if (event.target.name === "fooddescription")
      SetFoodDesscription(event.target.value);
    else SetFoodType(event.target.value);
  };
  useEffect(()=>{
    SetFoodCategory(props.Category)
  },[])
  const handleFoodFormSubmit = (event) => {
    event.preventDefault();
    async function FoodDataSubmit() {
      const data = await fetch(
        `${Ports}/${OwnerCtx.OwnerHotelId}/adddish`,
        {
          method: "POST",
          body: JSON.stringify({
            foodname: FoodName,
            foodprice: FoodPrice,
            foodcategory: FoodCategory,
            foodtype: FoodType,
            fooddescription: FoodDescription,
          }),
          headers: { "Content-type": "application/json" },
        }
      );
      const js = await data.json();
      if (js.status === "200") {
        window.location.reload();
      }
    }
    FoodDataSubmit();
  };
  return (
    <ModalPortal onClose={props.OnClose}>
    <form className="Add-Dish-Form" onSubmit={handleFoodFormSubmit}>
      <div className="Add-Dish-div">
        <div className="Add-Dish-div1">
          <label> Food Name</label>
          <input 
            type="text"
            value={FoodName}
            name="foodname"
            onChange={handleFoodFormChange}
          ></input>
        </div>
        <div className="Add-Dish-div1">
          <label> Price</label>
          <input
            type="text"
            value={FoodPrice}
            name="foodprice"
            onChange={handleFoodFormChange}
          ></input>
        </div>
        <div className="Add-Dish-div1">
          <label> Description</label>
          <input
            type="text"
            value={FoodDescription}
            name="fooddescription"
            onChange={handleFoodFormChange}
          ></input>
        </div>
        <div className="Add-Dish-div1">
          <label> Category</label>
          <input
            type="text"
            value={FoodCategory}
            name="food"
            readOnly
          ></input>
        </div>
        <div className="Add-Dish-div1">
          <label>Type</label>
          <select value={FoodType} name="type" onChange={handleFoodFormChange}>
            <option value="Veg">Veg</option>
            <option value="NonVeg">NonVeg</option>
          </select>
        </div>
      </div>
      <div className="Add-Dish-button">
        <button type="submit">Add Dish</button>
      </div>
      <div className="Add-Dish-button">
        <button onClick={()=>{props.OnClose()}}>Cancel Dish</button>
      </div>
    </form>
    </ModalPortal>
  );
}

export default AddNewDish;
