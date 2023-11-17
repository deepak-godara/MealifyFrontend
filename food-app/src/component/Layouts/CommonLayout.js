import React from "react";
import { Outlet } from "react-router-dom";
import "./HeaderLayout.css";
import Header from "../HeaderLayout/Header";
import AuthClientProvider from "../../store/AuthClientProvider";
import HotelContextProvider from "../../store/HotelContextProvider";
function CommonLayout() {
  return (
    <AuthClientProvider>
      <HotelContextProvider>
        <div className="Layout-Div">
          <div className="Header-Div">
            <div className="Nav-header">
              <div className="Mealify">Mealify</div>
              <Header />
            </div>
          </div>
          <div className="Body-Container">
            <div className="Main-Body-Container">
              <Outlet />
            </div>
          </div>
        </div>
      </HotelContextProvider>
    </AuthClientProvider>
  );
}

export default CommonLayout;
