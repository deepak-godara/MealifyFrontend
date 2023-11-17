import React ,{useContext}from 'react'
import './CartDisplay.css'
import CartItemDisplay from './CartItemDisplay'
import ModalPortal from '../UI/ModalPortal'
import CartContext from '../../store/CartContext'

function CartDisplay( props) {
    
    
    const CardCtx=useContext(CartContext);
    console.log(typeof(CardCtx.item));
    const itemlength=CardCtx.item.length>0;
   
        const OnRemove=(Id)=>
        {
            console.log('jii');
        CardCtx.RemoveItem(Id)
    };
    const OnAdd =(item)=>{ 
            const list={
                id:item.id,
             name:item.name,
             amount:1,
            price:item.price,
       }
            CardCtx.AddItem(list)};
            const Amount=CardCtx.TotalAmount<0?0:CardCtx.TotalAmount;
  return (
    
    <ModalPortal OnClose={props.OnClose}>
        <div className='Card-item-block'>
            <div className='Card-Display'>
            {
            CardCtx.item.map((items)=>
                 <CartItemDisplay   item={items}
                  onAdd={OnAdd.bind(null,items)}
                  OnRemove={OnRemove.bind(null,items.id)}/>
            )}
            </div>
            <div className='Item-Amount'>
                <div>Total Amount</div>
                <div>${Amount}</div>
            </div>
            <div className='Cart-Clicking-Option'>
                <button onClick={props.OnClose}>
                    Cancel
                </button>
                {itemlength&&<button>
                    Order
                </button>}
            </div>
        </div>
    </ModalPortal>
  )
}

export default CartDisplay