import React from "react";
import OrderBillData from "./OrderBillData";
function OrderTotal(props) {
  return (
    <div className="Ord-Total-Div flex1">
      <OrderBillData Name="Item Total" Amount={props.ItemTotal}/>
      <OrderBillData Name="Taxes" Amount={props.tax} />
      <OrderBillData Name="Delivery" Amount={props.delivery} />
      <div className="Ord-Total flex2  Under-Shadow1 Under-Shadow">
        <div>Grand Total</div>
        <div>{props.total}</div>
      </div>
    </div>
  );
}

export default OrderTotal;
