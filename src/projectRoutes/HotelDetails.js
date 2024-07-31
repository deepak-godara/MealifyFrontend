import React,{Fragment} from 'react'
import { useEffect } from "react";
import ViewHotelDetails from '../component/Owner/HotelDetails/ViewHotelDetails'
import UseScrollToTop from '../component/UI/UseScroll';
function OwnerHotelDetails() {
  UseScrollToTop();
  return (
    <Fragment>
  <ViewHotelDetails></ViewHotelDetails>
    </Fragment>
  )
}

export default OwnerHotelDetails