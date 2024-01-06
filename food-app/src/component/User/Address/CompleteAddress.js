import React, { useState, useContext } from "react";
import { AddressTypeArray } from "./AddressType";
import AddressTypes from "./AddressTypes";
import ClientContext from "../../../store/AuthClient";
import { AddAddress } from "../../../BackendApi/Address";
import "./Address.css";
function CompleteAddress(props) {
  const ClientCtx = useContext(ClientContext);
  const [Line1, SetLine1] = useState(null);
  const [Line2, SetLine2] = useState(null);
  const [isValid, SetValid] = useState(false);
  const [AddressType, SetAddressType] = useState("Home");
  const AddressFunc = ({ val, type }) => {
    if (type === "Line1") {
      SetLine1(val);
    } else {
      SetLine2(val);
    }
    if (Line1 !== null && Line1 !== "" && Line2 !== null && Line2 !== "")
      SetValid(true);
    else SetValid(false);
  };
  const AddAddressType = (val) => {
    SetAddressType(val);
  };
  const SubmitAddressFunc = async (e) => {
    e.preventDefault();
    if (isValid) {
      const AddressData = {
        AddLine1: Line1,
        AddLine2: Line2,
        Address: props.LocName,
        Coordinates: props.Coordinates,
        Type: AddressType,
      };
      await AddAddress({ Address: AddressData, ClientId: ClientCtx.ClientId });
    }
  };
  return (
    <form className="User-Address-Form">
      {!props.Location && (
        <div className="Select-Address">Select Your Delivery Location</div>
      )}
      {props.Location && <div className="Select-Address">Enter Address</div>}

      <div className="Address-Data">
        <div className="Address-Name">Delivery Location</div>
        <div
          className="User-Data-Input"
          style={{ height: "50px", overflow: "hidden", paddingBottom: "1rem" }}
        >
          {props.LocName}
        </div>
      </div>
      {props.Location && (
        <div className="User-Data-Box">
          <div className="User-Data">
            <label className="User-Data-Label">
              Flat/ House no/ Floor/ Building *
            </label>
            <input
              className="User-Data-Input"
              type="text"
              value={Line1}
              onChange={(e) => {
                AddressFunc({ val: e.target.value, type: "Line1" });
              }}
            ></input>
          </div>
          <div className="User-Data">
            <label className="User-Data-Label">Area/ Sector/ Locality *</label>
            <input
              className="User-Data-Input"
              type="text"
              value={Line2}
              onChange={(e) => {
                AddressFunc({ val: e.target.value, type: "Line2" });
              }}
            ></input>
          </div>
        </div>
      )}
      {props.Location && (
        <AddressTypes
          Addresses={AddressTypeArray}
          currentType={AddressType}
          func={AddAddressType}
        />
      )}
      <div className="Address-Submit-Button">
        {!props.Location && (
          <button className="Add-Address" onClick={() => props.func()}>
            Select Address
          </button>
        )}
        {props.Location && (
          <button
            className={!isValid ? "Not-Add-Address" : "Add-Address"}
            onClick={SubmitAddressFunc}
          >
            Save and Proceed
          </button>
        )}
      </div>
    </form>
  );
}

export default CompleteAddress;
