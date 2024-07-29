import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import "./HeaderLayout.css";
import Footer from "../mainpageUi/footer";
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
        <div className="Side-Bar-Container">
          <Layout />
        </div>
        <div className="Main-Body-Container">
          <Outlet />
        </div>
      </div>
      <div className="Footer-Div" > <Footer/> </div>
    </div>
  );
}

export default ClientLayout;
