import React ,{useReducer}from 'react'
import CartContext from './CartContext'
const InitialState={
  HotelName:'',
  HotelId:'',
 item:[],
 TotalAmount:0,
 Quantity:0,
}
const CartReducer=(state,action)=>
{
    if (action.type === 'ADD') {
        const updatedTotalAmount =
          state.TotalAmount + action.val.price * action.val.amount;
          const quanti=state.Quantity+action.val.amount;
        const existingCartItemIndex = state.item.findIndex(
          (item) => item.id === action.val.id
        );
        const existingCartItem = state.item[existingCartItemIndex];
        let updatedItems;
    
        if (existingCartItem) {
          const updatedItem = {
            ...existingCartItem,
            amount: existingCartItem.amount + action.val.amount,
          };
          updatedItems = [...state.item];
          updatedItems[existingCartItemIndex] = updatedItem;
        } else {
          updatedItems = state.item.concat(action.val);
        }
        return {
          item: updatedItems,
          TotalAmount: updatedTotalAmount,
          Quantity:quanti,
        };
      }
      if(action.type==='REMOVE')
      {
        const existingCartItemIndex = state.item.findIndex(
        (item) => item.id === action.val
      );
      const existingItem = state.item[existingCartItemIndex];
    
      const updatedTotalAmount = (state.TotalAmount=== existingItem.price)?0:state.TotalAmount - existingItem.price;
      console.log(updatedTotalAmount);
      let updatedItems;
      let quanti;
      if (existingItem.amount === 1) {
        updatedItems = state.item.filter(item => item.id !== action.val);
     
      } else {
        const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
        updatedItems = [...state.item];
        updatedItems[existingCartItemIndex] = updatedItem;
      }
      quanti=state.Quantity-1;
      return {
        item: updatedItems,
        TotalAmount: updatedTotalAmount,
        Quantity:quanti
      };
    }     
           
    return InitialState;
}
function CartContextProvider(props) {
    const [CartContent,SetCartContent]=useReducer(CartReducer,InitialState);
    const AddItem=(item)=>
    {
        SetCartContent({type:"ADD",val:item});
    }
    const RemoveItem=(item)=>
    {
        SetCartContent({type:'REMOVE',val:item});
    }
    const CardCtx={
      item:CartContent.item,
      TotalAmount:CartContent.TotalAmount,
      AddItem:AddItem,
      RemoveItem:RemoveItem,
      Quantity:CartContent.Quantity,
    }
  return (
    <CartContext.Provider value={CardCtx}>{props.children}</CartContext.Provider>
  )
}

export default CartContextProvider