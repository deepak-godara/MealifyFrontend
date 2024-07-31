import React from 'react'
import { OwnerArray } from './OwnerSideBarArray';
import SideBar from '../CommonSideBar/SideBar';
function Layout() {
  return (
    <SideBar SideBarArray={OwnerArray}/>
  )
}

export default Layout