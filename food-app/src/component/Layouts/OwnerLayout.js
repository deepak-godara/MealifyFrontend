import React from 'react'
import { Outlet, Link } from 'react-router-dom';
import './ClientLayout.css'
import Layout from '../SideBar/OwnerSideBar/Layout';
import OwnerHeader from '../HeaderLayout/OwnerHeader';
import Footer from '../mainpageUi/footer';
// import NewOrder from '../Owner/OwnerOrders/Main';
// import OwnerActiveOrders from '../Owner/OwnerOrders/OwnerActiveOrders';
function OwnerLayout() {
  return (
        <div className="Layout-Div">
          <div className="Header-Div">
            <div className="Nav-header">
              <div className="Mealify">Mealify</div>
              <OwnerHeader />
            </div>    
          </div>
          <div className="Body-Container">
            <div className="Side-Bar-Container">
              <Layout />
            </div>
            <div className="Main-Body-Container">
            <Outlet/>
            </div>
          </div>
          <div className="Footer-Div" > <Footer/> </div>
        </div>
  )
}

export default OwnerLayout