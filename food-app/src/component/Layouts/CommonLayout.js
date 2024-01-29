import React from "react";
import { Outlet } from "react-router-dom";
import "./HeaderLayout.css";
import "./ClientLayout.css"
import HeaderLayout from "../HeaderLayout/HeaderLayout";
function CommonLayout() {
  return (
        <div className="Layout-Div">
          <div className="Header-Div">
              <HeaderLayout />
          </div>
          <div className="Common-Body-Container">
            <div className="Common-Main-Body-Container">
              <Outlet />
            </div>
          </div>
        </div>
  );
}

export default CommonLayout;
