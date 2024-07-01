import React, { useContext, useState } from "react";
import "./Address.css";
import ClientContext from "../../../../store/AuthClient";
import { GoPlusCircle } from "react-icons/go";
import MapContainer from "../main";
import { AiFillCaretRight } from "react-icons/ai";
const Address = () => {
  const [AddAddressDiv, SetAddressDiv] = useState(false);
  const SetAddressVisibility = () => {
    console.log("bfd");
    SetAddressDiv(false);
  };
  const clients = useContext(ClientContext);
  console.log(clients)
  return (
    <>
      <div className="address-main">
        <h2>My address</h2>
        <div></div>
        <div className="address-container">
          <button
            className="Address-box"
            onClick={() => {
              SetAddressDiv(true);
            }}
          >
            <div className="Add-Address-Box">
              <GoPlusCircle
                style={{ color: "red", height: "1.5rem", width: "1.5rem" }}
              />
              <div>Add address</div>
            </div>
          </button>
          {clients.Address.map((item, index) => (
            <div className="Address-box" key={index}>
              <div className="Address-Place">{item.Type}</div>
              <div className="full-Address">{item.AddressLine1} {item.AddressLine2}</div>
              <div className="Edit-Delete">
                <button className="edit-div">
                  Edit <AiFillCaretRight />
                </button>
                <button className="edit">Delete </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {AddAddressDiv && <MapContainer func={SetAddressVisibility} />}
    </>
  );
};

export default Address;
