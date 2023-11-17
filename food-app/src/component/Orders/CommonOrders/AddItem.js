import React from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import "./Orders.css";
import { NavLink } from "react-router-dom";
function AddItem(props) {
  return (
    <NavLink to={`/${props.HotelId}`} className="Add-Cart-Item">
      <div className="Add-Cart-Item-1">
        <AiOutlinePlusCircle style={{ height: "1.5rem", width: "1.5rem" }} />
        <div className="">Add More Items</div>
      </div>
      <MdOutlineKeyboardArrowRight
        style={{ height: "1.5rem", width: "1.5rem" }}
      />
    </NavLink>
  );
}

export default AddItem;
