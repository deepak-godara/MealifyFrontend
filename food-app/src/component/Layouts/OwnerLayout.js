import React from 'react'
import { Outlet } from 'react-router-dom';
import './ClientLayout.css'
import Layout from '../SideBar/OwnerSideBar/Layout';
import AuthOwnerProvider from '../../store/AuthOwnerProvider';
import HotelContextProvider from "../../store/HotelContextProvider";
import OwnerHeader from '../HeaderLayout/OwnerHeader';
function OwnerLayout() {
  return (
    <AuthOwnerProvider>
      <HotelContextProvider>
        <div className="Layout-Div">
          <div className="Header-Div">
            <div className="Nav-header">
              <div className="Mealify">Mealify</div>
              <OwnerHeader />
            </div>
          </div>
          <div className="Body-Container">
            <div className="SideBar-Container">
              <Layout />
            </div>
            <div className="Main-Body-Container">
              <Outlet />
            </div>
          </div>
        </div>
      </HotelContextProvider>
    </AuthOwnerProvider>
  )
}

export default OwnerLayout