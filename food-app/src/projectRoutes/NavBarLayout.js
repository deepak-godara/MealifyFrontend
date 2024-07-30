
import React,{Fragment} from 'react'
import AuthOwnerProvider from '../store/AuthOwnerProvider'
import HotelContextProvider from '../store/HotelContextProvider';
import HeaderLayout from '../component/HeaderLayout/HeaderLayout';
import AuthClientProvider from '../store/AuthClientProvider';
import UseScrollToTop from '../component/UI/UseScroll';
import { Outlet } from 'react-router-dom';
function NavBarLayout() {
  return (
    <Fragment>
      <AuthClientProvider>
<AuthOwnerProvider>
  <HotelContextProvider>
    <HeaderLayout></HeaderLayout>
<Outlet/>
</HotelContextProvider>
</AuthOwnerProvider>
</AuthClientProvider>  
</Fragment>
  )
}

export default NavBarLayout