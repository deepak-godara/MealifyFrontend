import React,{useState,useEffect} from 'react'
import './CategoryData.css'
import CartDisplay from '../../Cart/CartDisplay';
import CategoryDisplay from './CategoryDisplay';
function CategoryData(props) {
  return (
    <div className='Food-Category-Display'>
        {props.menu.map(item=><CategoryDisplay key={item.Name} item={item.Name}></CategoryDisplay>)}
    </div>
  )
}

export default CategoryData