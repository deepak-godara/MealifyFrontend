import React from 'react'


function CategoryDisplay(props) {
    const func=(event)=>{
        const getdiv=document.getElementById(event.id);
        if(getdiv);
        const divtop=getdiv.offsetTop;
        const winheight=window.innerHeight;
        const cpositon=window.scrollY;
       const  distanceToScroll=divtop-cpositon -305+ winheight;
        window.scrollBy({
            top: distanceToScroll,
            left: 0,
            behavior:'instant'
          });
    }
  return (
    <div onClick={()=>{func({id:props.item})}} style={{cursor:"pointer"}}>{props.item}</div>
  )
}

export default CategoryDisplay