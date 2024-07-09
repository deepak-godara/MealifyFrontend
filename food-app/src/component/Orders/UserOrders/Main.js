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

    useEffect(() => {
        dispatch(GetActiveOrders());
    }, [dispatch]);
     
  return (
    <>
    <div className='mainOrderpage'>

    <div><h3>Active Orders</h3></div>
      <div className='ActiveOrderClass'> 
      {Order && Order.map((item , index) => (
        //  socket={socket}
        <Activeorder key={index} item = {item}  socket= {socket}  />
      ))}
      </div>
    {/* <div className='ActiveOrderClass'> <Activeorder/></div> */}
    <div className='PastOrders'><h3>Past Orders</h3></div>
    <div className='Order-Main-Containers'>
        {OrderData && OrderData.map((item)=><UserOrder OrderData={item} />)}
    </div>

    </div>
    </>
  )
}




export default Orders;