import React, { useState, useContext } from "react";
import { AddressTypeArray } from "./AddressType";
import AddressTypes from "./AddressTypes";
import Loader from "react-js-loader"
import ClientContext from "../../../store/AuthClient";
import { AddAddress } from "../../../BackendApi/Address";

import "./Address.css";
function CompleteAddress(props) {
  const ClientCtx = useContext(ClientContext);
  const [Line1, SetLine1] = useState(null);
  const [Line2, SetLine2] = useState(null);
  const [isValid, SetValid] = useState(false);
  const [Loading,SetLoading]=useState(false);
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
      SetLoading(true);
      const AddressData = {
        AddLine1: Line1,
        AddLine2: Line2,
        Address: props.LocName,
        Coordinates: props.Coordinates,
        Type: AddressType,
      };
      const Data= await AddAddress({ Address: AddressData, ClientId: ClientCtx.ClientId });
      console.log(Data);
      if(Data.status===true)
      {
        console.log("ji");
        ClientCtx.addClient(Data.Address);
        props.CloseFunc();
      }
      SetLoading(false);
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
          style={{ height: "50px", overflow: "hidden", paddingBottom: "0rem" }}
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
          <>
          {!Loading&&
          <button
            className={!isValid ? "Not-Add-Address" : "Add-Address"}
            onClick={SubmitAddressFunc}
          >
            Save and Proceed
          </button>}
           {Loading&&<div className="Spinner-Class3"> <Loader
            type="spinner-cub"
            color="rgb(77, 89, 102)"
            // style={{ position:"absolute", top:"2.9rem"}}
           
            // top="2.9rem"
            bgColor="rgb(77, 89, 102)"
            // title={"spinner-cub"}
            size={50}
          ></Loader></div>}
        </>)}
      </div>
    </form>
  );
}

export default CompleteAddress;
