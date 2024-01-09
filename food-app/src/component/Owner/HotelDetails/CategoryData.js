import React,{useState,useEffect} from 'react'
import './CategoryData.css'
import CartDisplay from '../../Cart/CartDisplay';
import CategoryDisplay from './CategoryDisplay';
import AddNewCategories from './AddNewCategories';
function CategoryData(props) {
  const [AddCategoryDiv,SetCategoryDiv]=useState(false)
  return (
    <div className='Food-Category-Display'>
        {props.menu.map(item=><CategoryDisplay key={item.Name} item={item.Name}></CategoryDisplay>)}
        <button onClick={()=>{SetCategoryDiv(true)}}>Add Category</button>
        {AddCategoryDiv&&
         <AddNewCategories OnClose={()=>{SetCategoryDiv(false)}}/>
        }
    </div>
  )
}

export default CategoryData