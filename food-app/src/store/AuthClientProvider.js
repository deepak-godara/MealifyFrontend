import React, { useReducer, useEffect, useState } from "react";
import ClientContext from "./AuthClient";
import { GetUser } from "../BackendApi/GetUser";
import io from "socket.io-client";
const IntialState = {
  isAuth: false,
  ClientUserName: "",
  ClientEmail: "",
  ClientId: 0,
  ClientDob: 0,
  Gender: null,
  Socket: null,
  ForeGroundImage: null,
  BackGroundImage: null,
};
const AddClientReducer = (state = IntialState, action) => {
  console.log(action.item._id);
  const newState = { ...state };
  if (action.type === "login") {
    newState.isAuth = true;
    newState.ClientId = action.item._id;

    newState.ClientEmail = action.item.Email;
    newState.ClientUserName = action.item.UserName;
    if (action.item.DOB) newState.ClientDob = action.item.DOB;
    if (action.item.Gender) newState.Gender = action.item.Gender;
    if (action.item.ForeGroundImage)
      newState.ForeGroundImage = action.item.ForeGroundImage;
    if (action.item.BackGroundImage)
      newState.BackGroundImage = action.item.BackGroundImage;
  } else if (action === "socket") {
    newState.Socket = action.item.socket;
    return newState;
  } else {
    newState.isAuth = false;
    newState.ClientId = "";
    newState.ClientEmail = "";
    newState.ClientUserName = "";
  }
  return newState;
};

function AuthClientProvider(props) {
  const [ClientData, SetClientData] = useReducer(AddClientReducer, IntialState);
  const addClient = (event) => {
    SetClientData({ type: "login", item: event });
  };
  const RemoveClient = (event) => {
    SetClientData({ type: "logout" });
  };
  const addSocket = (event) => {
    SetClientData({ action: "socket", item: event });
  };
  const ClientCtx = {
    isAuth: ClientData.isAuth,
    ClientId: ClientData.ClientId,
    ClientEmail: ClientData.ClientEmail,
    ClientUserName: ClientData.ClientUserName,
    ClientDob: ClientData.ClientDob,
    Gender: ClientData.Gender,
    Socket: ClientData.Socket,
    ForeGroundImage: ClientData.ForeGroundImage,
    BackGroundImage: ClientData.BackGroundImage,
    addClient: addClient,
    RemoveClient: RemoveClient,
    addSocket:addSocket
  };
  const [dataset, setData] = useState(false);
  // const socket = io("http://localhost:4000");
  useEffect(() => {
    async function fecthLoginStatus() {
      
      const userDatajson = localStorage.getItem("login-data");
      const userData = JSON.parse(userDatajson);
      if (userData && userData.user === "client") {
        GetUser(userData._id).then((Data) => {
          addClient(Data.User);
          // addSocket(socket);
          setData(true);
          
        });
      } else {
        // socket.disconnect();
        setData(true);
      }
    }
    fecthLoginStatus();
  }, []);
  if (dataset) {
    return (
      <ClientContext.Provider value={ClientCtx}>
        {props.children}
      </ClientContext.Provider>
    );
  }
}

export default AuthClientProvider;
