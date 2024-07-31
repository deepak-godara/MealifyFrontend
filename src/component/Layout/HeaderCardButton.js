import React ,{useContext}from 'react'
import Cart from'../Cart/Cart'
import CartContext from '../../store/CartContext'
import './HeaderCardButton.css'
function HearderCardButton(props) {
  const CardCtx=useContext(CartContext);
 
  return (
    
    <button className='Header-Cart-Button'>
        <span className='Header-Icon-Button'><Cart/></span>
        <span onClick={props.OnOpen}>Your Cart</span>
        <span className='Header-Badge-Button bump'>{CardCtx.Quantity}</span>
        </button>
  )
}

export default HearderCardButton