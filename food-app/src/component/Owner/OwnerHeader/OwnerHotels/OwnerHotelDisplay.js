import React from 'react'
import { useNavigate,useParams } from 'react-router-dom';
import './OwnerHotelDisplay.css'
function OwnerHotelDisplay(props) {
  console.log('yes');
  console.log(props)
  const Navigate=useNavigate();
  const Params=useParams();
  const HotelSubmition=(req,res,next)=>{
  Navigate(`/owner/${Params.id}/${props.HotelData._id}`);
  }
  return (
    <div className='Owner-Hotel-Display-Main-Div'>
      <div className='Owner-Hotel-Display-Image'>
        <img src={props.HotelData.Image}></img>
      </div>
      <div className='Owner-Hotel-Display'>
        <div className='Hotel-Name'>
        {props.HotelData.Name}
        </div>
        <div className='Hotel-Type'>
          <div>
              Veg
          </div>
          <div>
            Non veg
          </div>
        </div>
        </div>
        <button className='Submit-Hotel-Button' onClick={HotelSubmition}></button>
    </div>
  )
}

export default OwnerHotelDisplay