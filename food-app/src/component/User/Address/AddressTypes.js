import React from "react";

import "./AddressTypes.css";
function AddressTypes(props) {
  return (
    <div className="Address-Type-Box">
      {props.Addresses.map((item) => (
        <div
          onClick={() => {
            props.func(item.value);
          }}
          className={
            props.currentType === item.value
              ? "Address-Type-Data Box-Color"
              : "Address-Type-Data"
          }
        >
          {item.value}
        </div>
      ))}
    </div>
  );
}

export default AddressTypes;
