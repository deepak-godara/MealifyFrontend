import React, { useReducer, useState, useRef,useContext } from "react";
import "./Main.css";
import HotelInput from "./HotelInput";
import AddLocation from "../../User/Address/AddLocation";
import OwnerContext from "../../../store/AuthOwner";
import { AddHotel } from "../../../BackendApi/AddHotel";
const intialState = {
  HotelName: undefined,
  Fssai: undefined,
  PanCard: undefined,
  Address: undefined,
  City: undefined,
  Image: undefined,
  AddressData: undefined,
  Coordinates: undefined,
//   Categroy: undefined,
};
const HotelReducer = (state = intialState, action) => {
  const NewState = { ...state };
  console.log(action.type)
  if (action.type === "HotelName") NewState.HotelName = action.val;
  else if (action.type === "Fssai") NewState.Fssai = action.val;
  else if (action.type === "PanCard") NewState.PanCard = action.val;
  else if (action.type === "AddLine1") NewState.Address = action.val;
  else if (action.type === "AddLine2") NewState.City = action.val;
  else if (action.type === "Image") NewState.Image = action.val;
  else if (action.type === "Address") NewState.AddressData = action.val;
//   else if (action.type === "AddCat") NewState.Categroy = action.val;
  else {
    NewState.Coordinates = action.val;
  }
  return NewState;
};
function AddNewHotel() {
  const [HotelData, SetHotelData] = useReducer(HotelReducer, intialState);
  const [Image, SetImage] = useState("Add Hotel Image");
  const [isValid, SetVaild] = useState(true);
  const inputRef = useRef(null);
  const OwnerCtx=useContext(OwnerContext)
  const SetCoordinates = (location) => {
    SetHotelData({ type: "Coordinates", val: location });
  };
  const SetAddress = (val) => {
    SetHotelData({ type: "Address", val: val });
  };
  const SubmitHotelForm = async(event) => {
    SetVaild(true);
    console.log(HotelData)
    event.preventDefault();
    if (
      !HotelData.Address ||
      !HotelData.City ||
      !HotelData.Fssai ||
      !HotelData.HotelName ||
      !HotelData.PanCard||
      !HotelData.Image||
      !HotelData.Coordinates
    ) {
      SetVaild(false);
    } else {
       const res=await AddHotel(HotelData,OwnerCtx.OwnerId)
    }
  };
  const handleAddImageClick = () => {
    inputRef.current.click();
  };
  const handleFileChange = (event) => {
    const Image = event.target.files[0];
    if (Image) {
      SetImage(Image.name);
      const reader = new FileReader();
      reader.readAsDataURL(Image);
      reader.onload = () => {
        SetHotelData({ type: "Image", val: reader.result });
      };
    }
  };
  return (
    <form className="Add-Hotel-Form" onSubmit={SubmitHotelForm}>
      {!isValid && (
        <div className="Hotel-Form-Status">Please Fill All The Fields</div>
      )}
      <div className="Add-Hotel-Name">Add Restuarant Data</div>
      <HotelInput
        className="Add-Data-Div-1"
        Name="HotelName"
        value={HotelData.HotelName}
        placeholder="Add Hotel Name"
        SetHotelData={SetHotelData}
      />
      <div className="Add-Data-Div-2">
        <HotelInput
          className="Add-Data-Sub-Div"
          Name="PanCard"
          Label="Pancard"
          value={HotelData.PanCard}
          placeholder="Add PanCard"
          SetHotelData={SetHotelData}
        />
        <HotelInput
          className="Add-Data-Sub-Div"
          Label="Fssai"
          Name="Fssai"
          value={HotelData.Fssai}
          placeholder="Add Fssai"
          SetHotelData={SetHotelData}
        />
      </div>
      <div className="Add-Data-Div-2">
        <HotelInput
          className="Add-Data-Sub-Div"
          Label="Address"
          Name="AddLine1"
          value={HotelData.Address}
          placeholder="Add Address Line 1"
          SetHotelData={SetHotelData}
        />
        <HotelInput
          className="Add-Data-Sub-Div"
          Label="City"
          Name="AddLine2"
          value={HotelData.City}
          placeholder="Add Address Line 2"
          SetHotelData={SetHotelData}
        />
      </div>
      <div className="Add-Data-Div-1">
        <label className="Add-Hotel-Label">Hotel Image</label>
        <input
          className="Add-Hotel-Input"
          name="Image"
          placeholder={Image}
          readOnly
          onClick={handleAddImageClick}
        ></input>
        <input
          ref={inputRef}
          type="file"
          accept="image/*"
          style={{ display: "none" }}
          onChange={handleFileChange}
        />
      </div>
      <div className="Add-Location-Div">
        <AddLocation func={SetAddress} AddCoorFunc={SetCoordinates} />
      </div>
      <button type="submit" className="Hotel-Submit-Button">
        {" "}
        Add Hotel
      </button>
    </form>
  );
}

export default AddNewHotel;
