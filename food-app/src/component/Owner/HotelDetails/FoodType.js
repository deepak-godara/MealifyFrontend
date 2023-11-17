import React from 'react'
import VegLogo from '../../../assests/VegLogo.png'
import NonVegLogo from '../../../assests/NonVeg.png'
import './FoodType.css'
function FoodType(props) {
  console.log(props.types);
  return (
      <>
      <div className='Food-Type-Logo'>
      {props.types==='Veg'&&<img src={VegLogo}></img>}
      {props.types!=='Veg'&&<img src={NonVegLogo}></img>}
      </div>
      </>
  )
}

export default FoodType