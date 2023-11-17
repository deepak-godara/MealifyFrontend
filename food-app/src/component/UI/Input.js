import React from 'react'
import './Input.css'
function Input(props) {
  return (
    <div className='input-box'>
        <label>{props.label}</label>
        <input type={props.type} min={props.min} max={props.max}  value={props.value} onChange={props.changequantity}></input>
    </div>
  )
}

export default Input