import React, { useState } from "react";
import { orderList } from "./dummyOrderList";
// import {table}
import "./OrderList.css";
import MapOrderList from "./MapOrderList";
function OrderLists() {
  const [OrderList] = useState(orderList);
  return (
    <table className="Order-List-Container">
      <tr className=" Order-Header-Container">
        <th className="Order-Header-Item">Order No.</th>
        <th className="Order-Header-Item">Client Name</th>
        <th className="Order-Header-Item">Amount</th>
        <th className="Order-Header-Item">Action</th>
      </tr>
      {OrderList.map((item) => 
        <MapOrderList order={item} />
      )}
    </table>
  );
}

export default OrderLists;
