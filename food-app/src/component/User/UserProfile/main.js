import React, { useState } from "react";
import "./User.css";

function User() {
  const [UserName, SetUserName] = useState("");
  const [UserPhone, SetPhone] = useState();
  const [UserGmail, SetGmail] = useState();
  const [Dob, SetDob] = useState();
  return (
    <form className="User-Profile-Form">
      <div className="Update-Profile">Update Profile</div>
      <div className="User-Data-Box">
        <div className="User-Data">
          <label className="User-Data-Label">Name</label>
          <input
            className="User-Data-Input"
            type="text"
            value={UserName}
            onChange={(e) => {
              SetUserName(e.target.value);
            }}
          ></input>
        </div>
        <div className="User-Data">
          <label className="User-Data-Label">Phone</label>
          <input
            className="User-Data-Input"
            type="text"
            pattern="[0-9]{10}"
            value={UserPhone}
            onChange={(e) => {
              SetPhone(e.target.value);
            }}
          ></input>
        </div>
        <div className="User-Data">
          <label className="User-Data-Label">Gmail</label>
          <input
            className="User-Data-Input"
            type="Gmail"
            value={UserGmail}
            onChange={(e) => {
              SetGmail(e.target.value);
            }}
          ></input>
        </div>
        <div className="User-Data">
          <label className="User-Data-Label">Date-Of-Birth</label>
          <input
            className="User-Data-Input"
            type="Date"
            value={Dob}
            onChange={(e) => {
              SetDob(e.target.value);
            }}
          ></input>
        </div>
        <div className="User-Data">
          <label className="User-Data-Label">Gender</label>
          <input className="User-Data-Input"></input>
        </div>
      </div>
      <button className="User-Data-Button">Submit</button>
    </form>
  );
}

export default User;
