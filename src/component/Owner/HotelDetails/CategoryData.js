import React from 'react'
import './CategoryData.css'
import CategoryDisplay from './CategoryDisplay';
function CategoryData(props) {
  console.log("catogory data is " , props.menu);
  return (
    <div className='Food-Category-Display'>
      {(props.menu!==null||props.menu.length!==0)&& 
        props.menu.map(item=><CategoryDisplay key={item.Name} item={item.Name}></CategoryDisplay>)
      }
      {(props.menu===null||props.menu.length===0)&&<div>No category to display</div>}
    </div>
  )
}

export default CategoryData