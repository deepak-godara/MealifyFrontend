import React ,{useState} from 'react'
import './AddNewCategories.css'
import { useParams,useNavigate } from 'react-router-dom';
function AddNewCategories() {
  const Params=useParams();
  const Navigate=useNavigate();
  const [FoodCategory,SetFoodCategory]=useState('');
const handleCategoryFormChange=(event)=>{
  SetFoodCategory(event.target.value);
}
const handleFoodFormSubmit=(event)=>{
event.preventDefault();
 async function FoodCategorySubmit(){
   const data= await fetch(`http://localhost:4000/${Params.hotelid}/addcategory`,{
      method:'POST',
      body:JSON.stringify({
          category:FoodCategory
              }),  
   headers:{"Content-type":"application/json"},
   })
 
 const js= await data.json();
 if(js.status==='200')
 {
  Navigate(`/owner/${Params.id}/${Params.hotelid}`)
 }
}
FoodCategorySubmit();
}
return (
  <form className='Add-Category-Form' onSubmit={handleFoodFormSubmit}>
      <div className='Add-Category-div'>
          <div className='Add-Category-div1'>
              <label> Food Category</label>
              <input type='text' value={FoodCategory} name='foodname' onChange={handleCategoryFormChange}></input>
              </div>
              
      </div>
      <div className='Add-Category-button'>
          <button type='submit'>Add Dish</button>
      </div>
  </form>
)
}

export default AddNewCategories