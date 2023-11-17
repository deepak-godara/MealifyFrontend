import React, { useState } from 'react'

function UseName(func) {
    const [Detail,SetDetail]=useState('');
    const [isTouched,SetisTouched]=useState(false);
    let isVaild=Validate(func);
    let hasError=!isVaild&&!isTouched;
    const valueChangeHandler=(event)=>
    {
         SetDetail(event.target.value);
    }
    const valueBlurHandler=()=>
    {
        SetisTouched(true)
    }
  return {
    Detail,
    hasError,
    valueChangeHandler,
    valueBlurHandler
  }
}

export default UseName