import React from 'react'
import './review.css'
const StarDisplay = ({rating}) => {
    const validStars  =   Math.max(0 , Math.min(5,  parseFloat(rating) || 0));
    const fullStars =  Math.floor(validStars);
    const   halfStars = validStars%1 !=0 ? 1:0;
   const emptyStar =   5 - validStars-halfStars
   return(
     <>
     <span>
      <div className='stars'>
       {Array(fullStars).fill(null).map((_, i) => (
         <span key={`full-${i}`} className='star full'>★</span>
       ))}
       {halfStars ? <span className='star half'>★</span> : null}
       {Array(emptyStar).fill(null).map((_, i) => (
         <span key={`empty-${i}`} className='star empty'>★</span>
       ))}
     </div>
     </span>
     </>
   );

 }

export default StarDisplay
    
 
