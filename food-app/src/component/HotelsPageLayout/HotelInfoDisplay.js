import React,{useContext,useState, useEffect} from "react";
import { FaStar } from "react-icons/fa";
import {getDistance} from "geolib"
import ClientContext from "../../store/AuthClient";
import { useNavigate } from "react-router-dom";
import "./HotelInfoDisplay.css";
function HotelInfoDisplay(props) {
  const Navigate = useNavigate();
  console.log(props)
  const ClientCtx=useContext(ClientContext);
  const [Deliver,SetDeliver]=useState(true);
  console.log(ClientCtx.CurrentActiveAddress.latitude)
  const Distance=getDistance(
    { latitude:ClientCtx.CurrentActiveAddress.latitude.$numberDecimal,longitude:ClientCtx.CurrentActiveAddress.longitude.$numberDecimal},{
      latitude:props.info.Coordinates.Latitude,longitude:props.info.Coordinates.Longitude}

  )
  useEffect(()=>{ 
    if(ClientCtx.CurrentActiveAddress)
    {
      const Distance=getDistance(
        { latitude:ClientCtx.CurrentActiveAddress.latitude.$numberDecimal,longitude:ClientCtx.CurrentActiveAddress.longitude.$numberDecimal},{
          latitude:props.info.Coordinates.Latitude,longitude:props.info.Coordinates.Longitude}
    
      )
      if(Distance/1000>10.0)
      {
        SetDeliver(false);
      }
    }
  },[])
  const HotelSubmition = (req, res, next) => {
    Navigate(`${props.info._id}`);
  };
  return (
    <div className="Hotel-Display-Main-Div">
      <div className="Hotel-Display-Image">
        <img src={props.info.Image} alt="not available"></img>
      </div>
      <div className="HotelData-Display-One">
        <div className="Hotel-Name">{props.info.Name}</div>
        <div className="Hotel-Data-Display">
          <div>{props.info.Rating.$numberDecimal}</div>
          <FaStar className="star-color"></FaStar>
        </div>
      </div>
      <div className="Hotel-Type">
        <div className="Hotel-Categories">
          {props.info.Category.map((item) => (
            <div>{item}</div>
          ))}
        </div>
        <div>₹100 for one</div>
        </div>
        {!Deliver&&<div className="Hotel-Deliver"> Hotel does not deliver to your  location</div>}
      <button className="Submit-Hotel-Button" onClick={HotelSubmition}></button>
    </div>
  );
}

export default HotelInfoDisplay;
