import React,{Fragment,UseState} from 'react'
import AuthOwnerProvider from '../store/AuthOwnerProvider'
import HeaderLayout from '../component/HeaderLayout/HeaderLayout';
import OwnerHotels from '../component/Owner/OwnerHeader/OwnerHotels/OwnerHotels'
import AuthClientProvider from '../store/AuthClientProvider';
import { Outlet } from 'react-router-dom';
function OwnerMainPage() {
  return (
    <Fragment>
    <OwnerHotels>
    </OwnerHotels>  
<Outlet/>
</Fragment>
  )
}

export default OwnerMainPage