import React from "react";
import "./HotelInfoDetails.css";
import { FaStar } from "react-icons/fa";
import HotelDisplayHeader from "./HotelDisplayHeader";
function HotelInfoDisplay(props) {
  return (
    <>
      <div className="Hotel-Data-Image">
        <img src={props.HotelData.image} alt="Hotel Display"></img>
      </div>
      <div className="Hotel-Data-div">
        <div className="Hotel-Data-Name">
          <div>{props.HotelData.name}</div>
          <div className="Hotel-Rating-Display">
            <div className="Hotel-Rating-Div">
              <span>{props.HotelData.Rating}</span>
              <FaStar className="star-color"></FaStar>
            </div>
            <div className="Number-Of-Rating">
              <div>0</div>
              <div className="Rating-Type">Dining Reviews</div>
            </div>
          </div>
        </div>
        <div className="Hotel-Data-Category">
          {props.HotelData.Categories.length === 0 && (
            <div>No category to Display</div>
          )}
          {props.HotelData.Categories.map((item) => (
            <div key={item}>{item}</div>
          ))}
        </div>
        <div>{props.HotelData.address}</div>
        <div> <HotelDisplayHeader  HotelData = {props.HotelData} HotelMenu = {props.HotelMenu}/></div>
        {/* <div className="Info-Separation-Line"></div> */}
      </div>
    </>
  );
}

export default HotelInfoDisplay;
