import React, { useContext, useState } from "react";
import "./AddNewCategories.css";
import OwnerContext from "../../../store/AuthOwner";
import ModalPortal from "../../UI/ModalPortal";
function AddNewCategories(props) {
  const OwnerCtx=useContext(OwnerContext);
  const [FoodCategory, SetFoodCategory] = useState("");
  const handleCategoryFormChange = (event) => {
    SetFoodCategory(event.target.value);
  };
  const handleFoodFormSubmit = (event) => {
    event.preventDefault();
    async function FoodCategorySubmit() {
      const data = await fetch(
        `http://localhost:4000/${OwnerCtx.OwnerHotelId}/addcategory`,
        {
          method: "POST",
          body: JSON.stringify({
            category: FoodCategory,
          }),
          headers: { "Content-type": "application/json" },
        }
      );

      const js = await data.json();
      if (js.status === "200") {
        props.func(false);
      }
    }
    FoodCategorySubmit();
  };
  return (
    <ModalPortal onClose={props.OnClose}>
      <form className="Add-Category-Form" onSubmit={handleFoodFormSubmit}>
        <div className="Add-Category-div">
          <div className="Add-Category-div1">
            <label> Food Category</label>
            <input
              type="text"
              value={FoodCategory}
              name="foodname"
              onChange={handleCategoryFormChange}
            ></input>
          </div>
        </div>
        <div className="Add-Category-button">
          <button type="submit">Add Dish</button>
        </div>
      </form>
    </ModalPortal>
  );
}

export default AddNewCategories;
