import React ,{useState}from 'react'


function CategoryDisplay(props) {
    const func=(event)=>{
        const getdiv=document.getElementById(event.id);
        if(getdiv);
        const divtop=getdiv.offsetTop;
        const winheight=window.innerHeight;
        const cpositon=window.scrollY;
       const  distanceToScroll=divtop-cpositon -265+ winheight;
        window.scrollBy({
            top: distanceToScroll,
            left: 0,
            behavior:'instant'
          });
    }
  return (
    <div onClick={()=>{func({id:props.item})}}>{props.item}</div>
  )
}

export default CategoryDisplay