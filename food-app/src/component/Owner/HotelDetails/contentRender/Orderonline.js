import React from 'react'
import './contentRender.css'
import CategoryData from '../CategoryData'
import FoodDisplayCategories from '../FoodDisplayCategories'
const Orderonline = (props) => {
  return (
    <>
     <div className="View-Hotel-Data-Category">
              <CategoryData menu={props.HotelMenu}></CategoryData>
              <FoodDisplayCategories
                menu={props.HotelMenu}
                Name={props.HotelData.name}
              ></FoodDisplayCategories>
            </div>
    </>
  )
}

export default Orderonline