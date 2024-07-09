import React, { useState, useContext, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Address.css";
import { GoPlusCircle } from "react-icons/go";
import ClientContext from "../../../../store/AuthClient";
import User from "../../UserProfile/main";
import MapContainer from "../main";
import { AiFillCaretRight } from "react-icons/ai";
import AddressEditForm from "./addresseditform";
import {
  AddressList,
  DeleteAddress,
} from "../../../../reduxtool/reduxActions/AddressActions";

const Address = () => {
  const ClientCtx = useContext(ClientContext);
  const Cid = ClientCtx.ClientId;
  const [listOfAddress, setListOfAddress] = useState(ClientCtx.Address || []);
  console.log(`Address user id: ${Cid}`);
  const [AddAddressDiv, SetAddressDiv] = useState(false);

  const SetAddressVisibility = () => {
    console.log("SetAddressVisibility called");
    SetAddressDiv(false);
  };

  const dispatch = useDispatch();
  const Addressdata = useSelector((state) => state.Addressdata);
  const { error, loading, address } = Addressdata;

  useEffect(() => {
    console.log("useEffect block: address.js");
    setListOfAddress(ClientCtx.Address);
  }, [ClientCtx.Address]);

  const AddressDeleteHandler = async ({ Cid, Aid }) => {
    console.log(`address id deletion: ${Aid}`);
    dispatch(DeleteAddress({ Cid, Aid }));
    console.log("address deleted front end side");
    setListOfAddress(ClientCtx.Address.filter((address) => address.Aid !== Aid));
  };

  return (
    <>
      <div className="address-main">
        <h2>My address</h2>
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

          {listOfAddress && listOfAddress.map((x) => (
            <div className="Address-box" key={x._id}>
              <div className="Address-Place">{x.Type}</div>
              <div className="full-Address">{x.Address}</div>
              <div className="Edit-Delete">
                <button className="edit-div">
                  Edit <AiFillCaretRight />
                </button>
                <button
                  className="edit"
                  onClick={() =>
                    AddressDeleteHandler({
                      Cid: ClientCtx.ClientId,
                      Aid: x.Aid,
                    })
                  }
                >
                  Delete
                </button>
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
