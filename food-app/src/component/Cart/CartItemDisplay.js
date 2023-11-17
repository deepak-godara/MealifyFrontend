import React, {useContext} from 'react'
import './CartItemDisplay.css'
import CartContext from '../../store/CartContext'
function CartItemDisplay(props) {
    const CartCtx=useContext(CartContext)
  return (
    <div className='Cart-Item-Display'>
        <div className='Cart-Item-Name'>
            <div>
                {props.item.name}
            </div>
        <div className='Cart-Item-Detail'>
            <span>
            {props.item.price}
            </span>
            <span className='Item-Quantity'>
             x {props.item.amount}
            </span>
        </div>
        </div>
        <div  className='Cart-Button'>
            <button onClick={props.onAdd} >+</button>
            <button onClick={props.OnRemove}>-</button>
        </div>
    </div>
  )
}

export default CartItemDisplay