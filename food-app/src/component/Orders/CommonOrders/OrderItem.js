import React from "react";

function OrderItem(props) {
  const Count = props.item.Quantity * props.item.ItemPrice;
  return (
    <tr>
      <td>{props.item.ItemName}</td>
      <td>{props.item.Quantity}</td>
      <td>{props.item.ItemPrice}</td>
      <td>₹ {Count}</td>
    </tr>
  );
}

export default OrderItem;
