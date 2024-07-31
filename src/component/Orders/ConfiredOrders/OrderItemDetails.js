import React from "react";
import FoodType from "../../Owner/HotelDetails/FoodType";
import "./ConfirmedOrders.css";
function OrderItemDetails(props) {
  const OrderData = props.item;
console.log(props.item)
  return (
    <div className="flex1 Ord-Item-Div  ">
      <div className="Ord-ItemDet-2 Under-Shadow">Your Order</div>
        {OrderData.map((item) => (
          <div className="Ord-Item flex2 Under-Shadow">
            <div className="Ord-Block-1 flex1">
              <div className="Ord-Block-1-1 flex3">
                <FoodType types={item.FoodType} />
                <div className="Ord-Item-Name">{item.Name}</div>
              </div>
              <div className="Ord-Block-1-2">
                {item.Quantity} x ₹{item.Price}
              </div>
            </div>
            <div className="Ord-Block-2">₹{item.Total}</div>
          </div>
        ))}
      
    </div>
  );
}

export default OrderItemDetails;
