import React, { useContext, useEffect, useState } from "react";
import "./HotelDisplayHeader.css";
import Orderonline from "./contentRender/Orderonline";
import OwnerContext from "../../../store/AuthOwner";
import Photos from "./contentRender/Photos";
import Menu from "./contentRender/Menu";
const HotelDisplayHeader = (props) => {
  const [click, setClick] = useState("overview");
  const   ctx =  useContext(OwnerContext);
  useEffect(() => {
    console.log(click);
  }, [click]);

  return (
    <div className="Container-box">
      <div className="info-box">
        <button>*Direction</button>
        <button>*Bookmark</button>
        <button>*Share</button>
      </div>
      <div className="header-section">
        <div className="main-buttons">
          <button
            type="button"
            className={click === "overview" ? "clicked" : ""}
            onClick={() => setClick("overview")}
          >
            Overview
          </button>
          <button
            type="button"
            className={click === "OrderOnline" ? "clicked" : ""}
            onClick={() => setClick("OrderOnline")}
          >
            Order Online
          </button>
          <button
            type="button"
            className={click === "Reviews" ? "clicked" : ""}
            onClick={() => setClick("Reviews")}
          >
            Reviews
          </button>
          <button
            type="button"
            className={click === "Photos" ? "clicked" : ""}
            onClick={() => setClick("Photos")}
          >
            Photos
          </button>
          <button
            type="button"
            className={click === "Menu" ? "clicked" : ""}
            onClick={() => setClick("Menu")}
          >
            Menu
          </button>
        </div>
      </div>



      <div className="content-section">
        {click === "overview" && <div>Overview Content</div>}
        {click === "OrderOnline" && <div><Orderonline   HotelData = {props.HotelData} HotelMenu = {props.HotelMenu} /></div>}
        {click === "Reviews" && <div> Review data</div>}
        {click === "Photos" && <div><Photos/></div>}
        {click === "Menu" && <div><Menu/></div>}

      </div>

    </div>
  );
};

export default HotelDisplayHeader;
