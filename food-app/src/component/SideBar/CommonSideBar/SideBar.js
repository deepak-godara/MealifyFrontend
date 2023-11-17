import React from "react";
import SideBarElement from "./SideBarElement";
import './SideBar.css'
function SideBar(props) {
  return (
    <div className="Side-Bar-Div">
      {props.SideBarArray.map((item, index) => (
        <SideBarElement link={item.link} name={item.name}  Icon={item.Icon}/>
      ))}
    </div>
  );
}

export default SideBar;
