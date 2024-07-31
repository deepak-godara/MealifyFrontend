import React from "react";
import { TbReceipt } from "react-icons/tb";
import './OrderBill.css'
import { MdDeliveryDining } from "react-icons/md";
function OrderBillDetails(props) {
  return (
    
    <div className="BillData-Container">
      <div className="Bill-FirstBox">BILL SUMMARY</div>
      <div className="BillDetails-Container">
        <div className="B-Container1">
          <div className="Bill-Detail-Element">Subtotal</div>
          <div className="Bill-Detail-Element">₹{props.BillData.SubTotal}</div>
        </div>
        <div className="B-Container1">
          <div className="Bill-Data-Element">
            <TbReceipt className="Bill-Icons" />
            <div className="Bill-Data">GST</div>
          </div>
          <div className="Bill-Data">₹{props.BillData.GST}</div>
        </div>
        <div className="B-Container1">
          <div className="Bill-Data-Element">
            <MdDeliveryDining className="Bill-Icons" />
            <div className="Bill-Data">Delivery Partner Fee</div>
          </div>
          <div className="Bill-Data">₹{props.BillData.Delivery}</div>
        </div>
        <div className="B-Container1">
          <div className="Bill-Detail-Element">GrandTotal</div>
          <div className="Bill-Detail-Element">₹{props.BillData.Total}</div>
        </div>
      </div>
    </div>
  );
}

export default OrderBillDetails;
