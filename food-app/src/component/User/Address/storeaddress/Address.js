import React, { useState, useContext } from "react";
import { useEffect } from "react";
// import { useParams } from 'react-router-dom';
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
  console.log(` Address  user id  : ${ClientCtx.ClientId}`);
  const [AddAddressDiv, SetAddressDiv] = useState(false);
  // const [addressData , setAddressData] = useState({})
  const SetAddressVisibility = () => {
    console.log("bfd");
    SetAddressDiv(false);
  };
  const dispatch = useDispatch();
  const Addressdata = useSelector((state) => state.Addressdata);
  const { error, loading, address } = Addressdata;
  useEffect(() => {
    dispatch(AddressList({ Cid }));
  }, [dispatch]);
  console.log(`address.js redux address  is : ${address}`);
  const AddressDeleteHandler = async ({ Cid, Aid}) => {
    console.log(`address   id  deletion : ${Aid}`);

    dispatch(DeleteAddress({ Cid, Aid }));
    console.log("address Deleted  front end side  ");
  };

  return (
    <>
      {" "}
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

          {address.map((x) => (
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
