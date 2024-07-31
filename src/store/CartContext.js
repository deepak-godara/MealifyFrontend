import React from 'react'

const CartContext =React.createContext({
    item:[],
    TotalAmount:0,
    AddItem:()=>{},
    RemoveItem:()=>{},
    Quantity:0,
})
export default CartContext