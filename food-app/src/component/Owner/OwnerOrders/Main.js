import React, { useContext, useEffect, useState } from "react";
import { useSocket } from "../../../store/SocketContext";
import OrderLists from "./OrderLists";
import OwnerContext from "../../../store/AuthOwner";
import { getNewOrder } from "../../../BackendApi/GetNewOrders";

function NewOrder() {
  const OwnerCtx=useContext(OwnerContext)
  const SocketCtx = useSocket();
  const [NewOrder, SetNewOrder] = useState([]);
  const DeleteOrder=(orderId)=>{
        const NewOrderArray=NewOrder.filter((item)=>item.OrderId!==orderId)
        SetNewOrder(NewOrderArray);
  }
  async function GetNewOrders(){
       const Data=await  getNewOrder(OwnerCtx.OwnerHotelId);
       if(Data.status==='200')
       {
        console.log(Data.Orders)
        SetNewOrder(Data.Orders);
       }
  }
  useEffect(()=>{
         GetNewOrders();
  },[])
  useEffect(() => {
    if (SocketCtx) {
      SocketCtx.on(
        "NewOrderReceived",
        ({ message, OrderId, Order, UserId } , acknowledgment) => {
            console.log("order in  Ownerorders is " , Order)
          SetNewOrder([Order, ...NewOrder]);
          acknowledgment(true);
        }
      );
    }
  }, [SocketCtx,NewOrder]);
  return (
    <div className="New-Order-Main-Container">
      {NewOrder.length > 0 && (
        <div className="Order-List-Container">
          {NewOrder.map((item, index) => (
            <OrderLists Order={item}  DeleteFunction={DeleteOrder} />
          ))}
        </div>
      )}
      {NewOrder.length === 0 && <div className="No-New-Order"> No new Orders for you</div>}
    </div>
  );
}

export default NewOrder;
