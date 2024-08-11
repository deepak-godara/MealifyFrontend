
import React, { useEffect, useContext} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GetOwnerActiveOrders} from '../../../reduxtool/reduxActions/OrdersActions';
import './OwnerActiveOrders.css';
import { useSocket } from '../../../store/SocketContext';
import UserOrder from '../../Orders/UserOrders/UserOrder';
import UseScrollToTop from '../../UI/UseScroll';
import OwnerContext from '../../../store/AuthOwner';
import Loader from "react-js-loader"
const OwnerDeliverdOrder = () => {
  const socket = useSocket();
  UseScrollToTop();
  const dispatch = useDispatch();
  const DeliveredOrderdata = useSelector((state) => state.UserOrdersdata);
  const { loading, error, Order } = DeliveredOrderdata;
  // let Order = DeliveredOrder;
  const ownerctx = useContext(OwnerContext)
  const hotelOwnerId = ownerctx.OwnerHotelId;
  useEffect(() => {
    dispatch(GetOwnerActiveOrders({id :hotelOwnerId}));
  }, [dispatch , hotelOwnerId]);



  useEffect(()=>{
    if(socket){
      socket.on("DeliveryConfirmed" , ({orderId , status}) =>{
         console.log(" order deleiverd by owner  : " , orderId , status);
      })
      dispatch(GetOwnerActiveOrders({id :hotelOwnerId}))
    }
  } , [dispatch , hotelOwnerId, socket])
  
  return (
    <>
    {loading && (
          <div className="Spinner-Class3" style={{marginTop:"25vh"}}>
            <Loader
              type="spinner-cub"
              color="red"
              // style={{ position:"absolute", top:"2.9rem"}}

              // top="2.9rem"
              bgColor="rgb(77, 89, 102)"
              // title={"spinner-cub"}
              size={50}
            ></Loader>
          </div>
        )}
        {!loading&&
      <div className='Order-Main-Containers'>
          {Order && Order.length > 0 ? (
            Order.map((item, index) => (
              (item.OrderStatus === "delivered" &&  hotelOwnerId ===  item.HotelId)?
              (<UserOrder key={index} OrderData={item} />) : ""
            ))
          ) : (
            <p>No past orders available</p>
          )}
        </div>
}
    </>
  );
}

export default OwnerDeliverdOrder;
