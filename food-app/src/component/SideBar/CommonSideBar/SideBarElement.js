import React from "react";
import { NavLink } from "react-router-dom";
import "./SideBarElement.css";
function SideBarElement(props) {
  console.log(props.link)
  return (
    <NavLink to={props.link} className="Nav-Link">
      {({ isActive }) => {
        return (
          <div className={isActive ? " Link-Div LinkDiv2" : "Link-Div"}>
            <props.Icon
              style={{
                height: "1.25rem",
                width: "1.25rem",
                color:"rgb(133,133,133)",
                minHeight: "1.125rem",
                minWidth: "1.125rem",
              }}
            />
            <div className="Link-Element">{props.name}</div>
          </div>
        );
      }}
    </NavLink>
  );
}

export default SideBarElement;
