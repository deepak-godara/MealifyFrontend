import React, { useState } from "react";
import "./MainPageCity.css";
import { useLocation, useNavigate } from "react-router-dom";
function MainPageCity(props) {
  const [name, setName] = useState(">");
  const location = useLocation();
  const path = location.pathname;
  const Navigate = useNavigate();
  const SubmitLocationData = (event) => {
    event.preventDefault();
    console.log(path);
    console.log(props.items._id);
    console.log(`${path}${props.items.location}`);
    if (path === "/") Navigate(`${path}location/${props.items.Location}`);
    else {
      Navigate(`${path}/location/${props.items.Location}`);
    }
  };
  return (
    <form className="Location-Name-Div" onSubmit={SubmitLocationData}>
      <div>{props.items.Location} Restaurants</div>
      <div>{name}</div>
      <button className="Hotel-Locaton-Getter" type="submit"></button>
    </form>
  );
}

export default MainPageCity;
