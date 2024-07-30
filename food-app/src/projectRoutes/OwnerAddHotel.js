import React,{Fragment} from 'react'
import { useEffect } from "react";
import NewHotel from '../component/Owner/NewHotel/NewHotel'
import UseScrollToTop from '../component/UI/UseScroll';
function OwnerAddHotelPage() {
  useEffect(()=>{UseScrollToTop()},[])
  return (
    <Fragment>
   <NewHotel></NewHotel>
    </Fragment>

  )
}

export default OwnerAddHotelPage