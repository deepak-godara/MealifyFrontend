import React, { useEffect, useState } from "react";
import "./HotelDisplayHeader.css";
import Orderonline from "./contentRender/Orderonline";
import Photos from "./contentRender/Photos";
import Menu from "./contentRender/Menu";
import ReviewDisplay from "./contentRender/ReviewDiaplay";
const HotelDisplayHeader = (props) => {
  const [click, setClick] = useState("overview");
 console.log("hotel data is auhsd c  : " , props.HotelData.id)
  useEffect(() => {
    console.log(click);
  }, [click]);

  return (
    <div className="Container-box">
      <div style={{position:"sticky",top:"6rem",background:"white",zIndex:"4000"}}>
      <div className="info-box">
        <button>Direction</button>
        <button>Bookmark</button>
        <button>Share</button>
      </div>
      <div className="header-section">
        <div className="main-buttons">
          <button
            type="button"
            className={click === "overview" ? "active" : ""}
            onClick={() => setClick("overview")}
          >
            Overview
          </button>
          <button
            type="button"
            className={click === "OrderOnline" ? "active" : ""}
            onClick={() => setClick("OrderOnline")}
          >
            Order Online
          </button>
          <button
            type="button"
            className={click === "Reviews" ? "active" : ""}
            onClick={() => setClick("Reviews")}
          >
            Reviews
          </button>
          <button
            type="button"
            className={click === "Photos" ? "active" : ""}
            onClick={() => setClick("Photos")}
          >
            Photos
          </button>
          <button
            type="button"
            className={click === "Menu" ? "active" : ""}
            onClick={() => setClick("Menu")}
          >
            Menu
          </button>
        </div>
      </div>
      </div>

      <div className="content-section">
        {click === "overview" && <div><Menu /></div>}
        {click === "OrderOnline" && <div><Orderonline HotelData={props.HotelData} HotelMenu={props.HotelMenu} /></div>}
        {click === "Reviews" && <div><ReviewDisplay  id = {props.HotelData.id} /></div>}
        {click === "Photos" && <div><Photos HotelData={props.HotelData} /></div>}
        {click === "Menu" && <div><Menu /></div>}
      </div>
    </div>
  );
};

export default HotelDisplayHeader;
