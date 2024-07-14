import React, { useEffect } from 'react'
import { OrderData } from './OrderData'
import UserOrder from './UserOrder';
import './UserOrder.css'
import Activeorder from './Activeorder';
import {useDispatch , useSelector}  from 'react-redux'
import { GetActiveOrders } from '../../../reduxtool/reduxActions/OrdersActions';
import { useSocket } from '../../../store/SocketContext';
function Orders() {
  const socket = useSocket();
 if(socket)console.log("socekt id from order    mai.js i is :" , socket.id)
  if(socket){
    socket.on("changeStatusUserside" , ({status , ownerid, userId, orderId}) =>{
      console.log("confirmmessage and  order id is : " ,status, orderId );
      // Id=orderId
    })
  }
  
    const dispatch = useDispatch();
    const activeOrderdata = useSelector((state) => state.ActiveOrderdata);
    const { loading, error, Order } = activeOrderdata;
    console.log("Active order from  main order page is : " , Order);
    console.log(" orderdata is   main order page is : " , OrderData);

    useEffect(() => {
        dispatch(GetActiveOrders());
    }, [dispatch , socket]);
     
  return (
    <>
    <div className='mainOrderpage'>

    <div><h3>Active Orders</h3></div>
      <div className='ActiveOrderClass'> 
      {Order && Order.map((item , index) => (
        //  socket={socket}
        (item.OrderStatus === "delivered")?" ":
        (<Activeorder key={index} item = {item}  socket= {socket}  />)
      ))}
      </div>
 <div className='PastOrders'><h3>Past Orders</h3></div>
        <div className='Order-Main-Containers'>
          {Order && Order.length > 0 ? (
            Order.map((item, index) => (
              (item.OrderStatus === "delivered")?
              (<UserOrder key={index} OrderData={item} />) : ""
            ))
          ) : (
            <p>No past orders available</p>
          )}
        </div>

    </div>
    </>
  )
}

export default Orders;