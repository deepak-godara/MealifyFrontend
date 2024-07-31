import React from 'react'
import { Outlet } from 'react-router-dom';
import Footer from '../mainpageUi/footer';
import OwnerHeader from '../HeaderLayout/OwnerHeader'
function OwnerLayout2() {
  return (
    <div className="Layout-Div">
    <div className="Header-Div">
      <div className="Nav-header">
        <div className="Mealify">Mealify</div>
        <OwnerHeader />
      </div>
    </div>
    <div className="Body-Container">
        <Outlet />
    </div>
    <div className="Footer-Div" > <Footer/> </div>
  </div>
  )
}

export default OwnerLayout2;