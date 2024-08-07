import React, { useEffect, useState } from "react";
import "./MainPageLayout.css";
import MainPageCity from "./MainPageCity";
import { Ports } from "../../BackendApi/Url";
function MainPageLayout() {
  const [Location, SetLocation] = useState([]);
  useEffect(() => {
    async function getLocations() {
      const data = await fetch(`${Ports}/gethomepage`, {
        method: "GET",
      });
      const js = await data.json();
      if (js.status === "200") {
        SetLocation(js.locations);
      }
    }
  getLocations()}, []);
  return (
    <div className="City-Locater-Div">
      {Location.map((item) => (
        <MainPageCity  items={item}></MainPageCity>
      ))}
    </div>
  );
}

export default MainPageLayout;
