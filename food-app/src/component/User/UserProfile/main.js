import React, { useEffect, useState, useRef, useContext } from "react";
import "./User.css";
import AddIImage from "./AddIImage";
import Pizza from "../../../assests/pizza.jpg";
import Meals from "../../../assests/meals.jpg";
import ClientContext from "../../../store/AuthClient";
import { TiCameraOutline } from "react-icons/ti";
import { GetUser } from "../../../BackendApi/GetUser";
import { UploadPersonalImage } from "../../../BackendApi/UploadPersonalmage";
import { UploadBackImage } from "../../../BackendApi/UploadUserBackImage";
import { UpdateProfile } from "../../../BackendApi/UpdateProfile";
import ModalPortal from "../../UI/ModalPortal";
function User() {
  const clientCtx = useContext(ClientContext);
  const [isOpen1, SetisOpen1] = useState(false);
  const [isOpen2, SetisOpen2] = useState(false);
  const [Image1, SetImage1] = useState(Meals);
  const [Image2, SetImage2] = useState(Pizza);
  const [UserName, SetUserName] = useState("");
  const [Dob, SetDob] = useState("11-9-2021");
  const [PhoneNo, SetPhoneNo] = useState(null);
  const [Gender, SetGender] = useState("male");
  const [Email, SetEmail] = useState(null);
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const CloseDiv1 = () => {
    SetisOpen1(false);
  };
  const CloseDiv2 = () => {
    SetisOpen2(false);
  };
  const AddImage1 = async (val) => {
    SetImage1(val);
    await UploadBackImage({ Image: val, ClientId: clientCtx.ClientId });
  };
  const AddImage2 = async (val) => {
    SetImage2(val);
    await UploadPersonalImage({ Image: val, ClientId: clientCtx.ClientId });
  };
  useEffect(() => {
    if (ref1.current) {
      ref1.current.childRef = ref1;
    }
  }, []);
  const getUserDatas = async () => {
    const Datas = await GetUser(clientCtx.ClientId);
    //  console.log(Datas);
    const Data = Datas.User;
    if (Datas.status === "success") {
      if (Data.ForeGroundImage !== null) SetImage1(Data.ForeGroundImage);
      if (Data.BackGroundImage !== null) SetImage2(Data.BackGroundImage);
      if (Data.PhoneNo !== null) SetPhoneNo(Data.PhoneNo);
      if (Data.UserName !== null) SetUserName(Data.UserName);
      if (Data.Gender !== null) SetGender(Data.Gender);
      if (Data.Email !== null) SetEmail(Data.Email);
      if (Data.DOB !== null) {
        const isoDate = Data.DOB.toString();
        const onlyDate = isoDate.split("T")[0];
        SetDob(onlyDate);
      }
    }
  };
  useEffect(() => {
    getUserDatas();
  }, []);
  const SubmitData = (e) => {
    e.preventDefault();
    const isoDate = Dob.toString();
    const onlyDate = isoDate.split("T")[0];
    const Profile = {
      UserName: UserName,
      DOB: onlyDate,
      PhoneNo: PhoneNo,
      Gender: Gender,
    };
    UpdateProfile({ Profile: Profile, ClientId: clientCtx.ClientId });
  };
  return (
    <ModalPortal>
      <div className="User-Profile-Container">
        <div className="Update-Profile">Edit Profile</div>
        <div className=" User-Image-Container">
          <div className="Image-Container1">
            <img className="User-Image1" src={Image1} alt="not available"></img>
            <div
              className="User-Icon-Color2"
              ref={ref1}
              onClick={() => {
                SetisOpen1(true);
              }}
            >
              <TiCameraOutline className="User-Icon" />
              {isOpen1 && (
                <AddIImage ref={ref1} func={CloseDiv1} AddImage={AddImage1} />
              )}
            </div>
          </div>
          <div className="Image-Container2">
            <img className="User-Image2" src={Image2} alt="not available"></img>
            <div
              className="User-Icon-Color"
              ref={ref2}
              onClick={() => {
                SetisOpen2(true);
              }}
            >
              <TiCameraOutline className="User-Icon" />
              {isOpen2 && (
                <AddIImage ref={ref2} func={CloseDiv2} AddImage={AddImage2} />
              )}
            </div>
          </div>
        </div>
        <form className="User-Profile-Form">
          <div className="User-Data-Box">
            <div className="User-Data">
              <label className="User-Data-Label">{UserName}</label>
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
              <div className="User-Data-Input"> {PhoneNo}</div>
            </div>
            <div className="User-Data">
              <label className="User-Data-Label">Gmail</label>
              <div className="User-Data-Input">{Email}</div>
            </div>
            <div className="User-Data">
              <label className="User-Data-Label">Date-Of-Birth</label>
              <input
                className="User-Data-Input"
                type="date"
                value={Dob}
                placeholder={Dob}
                onChange={(e) => {
                  SetDob(e.target.value);
                }}
              ></input>
            </div>
            <div className="User-Data">
              <label className="User-Data-Label">Gender</label>
              <input
                className="User-Data-Input"
                type="text"
                value={Gender}
                onChange={(e) => {
                  SetGender(e.target.value);
                }}
              ></input>
            </div>
          </div>
          <div className="User-Profile-Button-Div">
            <button className="User-Data-Button" onClick={SubmitData}>
              Update
            </button>
            <button className="User-Cancel-Button">Cancel</button>
          </div>
        </form>
      </div>
    </ModalPortal>
  );
}

export default User;
