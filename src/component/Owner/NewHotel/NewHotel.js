import React, { useState } from "react";
import LocationInput from "./LocationInput";
import { useParams, useNavigate } from "react-router-dom";
import "./newhotel.css";
import { Ports } from "../../../BackendApi/Url";
function NewHotel() {
  const params = useParams();
  const Navigate = useNavigate();
  const [Hotelname, setHotelName] = useState("");
  const [City, SetCity] = useState("");
  const [Image, SetImage] = useState();
  const [PreviewSource, SetPreviewSource] = useState();
  const [Address, SetAddress] = useState("");
  const changeAddress = (data) => {
    SetAddress(data);
  };
  const [Submitdata, SetSubmitData] = useState("AddHotel");
  const ChangeHotelData = (event) => {
    if (event.target.name === "City") SetCity(event.target.value);
    else setHotelName(event.target.value);
  };
  const ChangeImageData = (event) => {
    const files = event.target.files[0];
    // SetImage(files.name)
    previewFile(files);
  };
  const previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      SetPreviewSource(reader.result);
    };
  };
  const SubmitHotelData = (event) => {
    event.preventDefault();
    console.log(PreviewSource);
    // async function addImage() {
    //   const js = fetch(`http://localhost:4000/image/upload`, {
    //     method: "POST",
    //     body: JSON.stringify({
    //       Image: PreviewSource,
    //     }),
    //     headers: { "Content-type": "application/json" },
    //   });
    // }
    // addImage();
    async function addHotel(){
      console.log('adfing');
      const data= await fetch(`${Ports}/owner/${params.id}/addhotel`,{
          method:"POST",
          body:JSON.stringify({
              name:Hotelname,
              image:PreviewSource,
              City:City,
              Address:Address,
          }),
          headers:{"Content-type":"application/json"}
      })
      const js=await data.json();
      if(js.status)
      {
        Navigate('/home/owner/'+params.id);
      }

    }
    addHotel();
  };
  return (
    <form className="add-hotel-form" onSubmit={SubmitHotelData}>
      <div className="add-hotel-div1">
        <div className="add-hotel-div">
          <label className="add-hotel-label">Name:</label>
          <input
            className="add-hotel-input"
            type="text"
            value={Hotelname}
            name="hotelname"
            onChange={ChangeHotelData}
          ></input>
        </div>
        <div className="add-hotel-div">
          <label className="add-hotel-label">City</label>
          <input
            className="add-hotel-input"
            type="text"
            value={City}
            name="City"
            onChange={ChangeHotelData}
          ></input>
        </div>
        <div className="add-hotel-div">
          <label className="add-hotel-label">Location</label>
          <LocationInput func={changeAddress}></LocationInput>
        </div>
        <div className="add-hotel-div">
          <label className="add-hotel-label">Image</label>
          <input
            className="add-hotel-input"
            type="file"
            value={Image}
            name="Image"
            onChange={ChangeImageData}
          ></input>
        </div>
      </div>
      <div className="add-hotel-button">
        <button type="submit">{Submitdata}</button>
      </div>
    </form>
  );
}

export default NewHotel;
