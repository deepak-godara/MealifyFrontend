import React,{useContext} from 'react'
import HotelContext from '../../store/HotelsContext'
import'./HotelsPageMapping.css'
import HotelInfoDisplay from './HotelInfoDisplay'
function HotelsPageMapping(props) {
  const HotelCtx=useContext(HotelContext);
  console.log(HotelCtx)
  return (
    <div className='Hotel-Mapper-Div'>
      {HotelCtx.Hotels.length===0?<div className='No-Hotel-To'> There are no hotels to display</div>:
        HotelCtx.Hotels.map(ite=><HotelInfoDisplay info={ite} pagelink='/home/hotels'/>)}
    </div>
  )
}

export default HotelsPageMapping