import React from "react";
import { Outlet } from "react-router-dom";
import "./HeaderLayout.css";
import ClientHeader from "../HeaderLayout/ClientHeader";
import Layout from "../SideBar/ClientSideBar/Layout";
import "./ClientLayout.css";
import Profileheader from "../User/Address/storeaddress/Profileheader";
function ClientLayout() {
  return (
    <div className="Layout-Div">
      <div className="Header-Div">
        <div className="Nav-header">
          <div className="Mealify">Mealify</div>
          <ClientHeader />
        </div>
      </div>
      <Profileheader />
      <div className="Body-Container">
        <div className="SideBar-Container">
          <Layout />
        </div>
        <div className="Main-Body-Container">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default ClientLayout;
