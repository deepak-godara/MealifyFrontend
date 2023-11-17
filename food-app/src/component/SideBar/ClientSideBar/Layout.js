import React from 'react'
import { ClientArray } from './ClientSideArray';
import SideBar from '../CommonSideBar/SideBar';
function Layout() {
  return (
    <SideBar SideBarArray={ClientArray}/>
  )
}

export default Layout