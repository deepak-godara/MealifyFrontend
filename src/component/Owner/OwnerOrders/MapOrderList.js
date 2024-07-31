import React from "react";
import './MapOrder.css'
function MapOrderList(props) {
  return (
    <tr className="Order-Detail-Container1">
      <td className="Order-Item1">{props.order.orderId}</td>
      <td className="Order-Item1">{props.order.ClientName}</td>
      <td className="Order-Item1">{props.order.Cost}</td>
      <td className="Order-Item1"><button className="Order-View-Button">View</button></td>
    </tr>
  );
}

export default MapOrderList;
