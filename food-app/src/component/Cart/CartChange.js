import React from 'react'
import ModalPortal from '../UI/ModalPortal'
import './CartChange.css'
function CartChange(props) {
  // console.log('cartchange');
  // console.log(props.onClose)
  return (
    <ModalPortal onClose={props.onClose}>
    <div className='Cart-Warning-Div'>
        <div className='Display-Cart-Change-Content'>Do you Want to delete the Item from Previous Hotel</div>
        <div className='Cart-Options'>
            <button className='Cart-Options-Button' onClick={()=>{props.onClose('yes')}}>Change </button>
            <button className='Cart-Options-Button' onClick={()=>{props.onClose('no')}}>Prevent</button>
        </div>
        </div>
        </ModalPortal>
  )
}

export default CartChange