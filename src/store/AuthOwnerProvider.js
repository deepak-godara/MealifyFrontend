import React, { useReducer, useEffect, useState } from "react";
import OwnerContext from "./AuthOwner";
import { GetOwner } from "../BackendApi/GetOwner";
const IntialState = {
  isAuth: false,
  OwnerUserName: "",
  OwnerEmail: "",
  Socket: null,
  HotelId: undefined,
  OwnerId: "",
};
const AddOwnerReducer = (state = IntialState, action) => {
  const newState = { ...state };
  if (action.type === "login") {
    newState.isAuth = true;
    newState.OwnerId = action.item._id;
    newState.OwnerEmail = action.item.Email;
    newState.OwnerUserName = action.item.UserName;
    newState.HotelId = action.item.HotelId;
  } else if (action === "socket") {
    newState.Socket = action.item.socket;
    return newState;
  } else {
    newState.isAuth = false;
    newState.OwnerId = "";
    newState.OwnerEmail = "";
    newState.OwnerUserName = "";
    newState.HotelId = undefined;
  }
  return newState;
};

function AuthOwnerProvider(props) {
  const [OwnerData, SetOwnerData] = useReducer(AddOwnerReducer, IntialState);
  const addOwner = (event) => {
    SetOwnerData({ type: "login", item: event });
  };
  const removeOwner = (event) => {
    SetOwnerData({ type: "logout" });
    localStorage.removeItem("login-data")
  };
  const addSocket = (event) => {
    SetOwnerData({ action: "socket", item: event });
  };
  const OwnerCtx = {
    isAuth: OwnerData.isAuth,
    OwnerId: OwnerData.OwnerId,
    OwnerEmail: OwnerData.OwnerEmail,
    OwnerUserName: OwnerData.OwnerUserName,
    OwnerHotelId:OwnerData.HotelId,
    addOwner: addOwner,
    removeOwner: removeOwner,
    addSocket: addSocket,
  };
  const [dataset, setData] = useState(false);
  // const socket = io("http://localhost:4000");
  useEffect(() => {
    async function fecthLoginStatus() {
      const userDatajson = localStorage.getItem("login-data");
      const userData = JSON.parse(userDatajson);
      if (userData && userData.user === "owner") {
        
        const Data= await GetOwner(userData._id);
        if(Data.User)
        addOwner(Data.User);
        // addSocket(socket);
        setData(!dataset);
      } else {
        // socket.disconnect();
        setData(!dataset);
      }
    }
    fecthLoginStatus();
  }, []);
  if(dataset)
  {
  return (
    <OwnerContext.Provider value={OwnerCtx}>
      {props.children}
    </OwnerContext.Provider>
  );
  }
}

export default AuthOwnerProvider;
