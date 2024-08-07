import React, { useReducer, useEffect, useState } from "react";
import ClientContext from "./AuthClient";
import { GetUser } from "../BackendApi/GetUser";
const IntialState = {
  isAuth: false,
  ClientUserName: "",
  ClientEmail: "",
  ClientId: 0,
  ClientDob: 0,
  Address:[],
  CurrentActiveAddress:null,
  Gender: null,
  Socket: null,
  Orders:[],
  Review:0,
  ForeGroundImage: null,
  BackGroundImage: null,
};
const AddClientReducer = (state = IntialState, action) => {
  const newState = { ...state };
  if (action.type === "login") {
    newState.isAuth = true;
    newState.ClientId = action.item._id;

    newState.ClientEmail = action.item.Email;
    newState.ClientUserName = action.item.UserName;
    newState.Review=action.item.Review;
    if (action.item.DOB) newState.ClientDob = action.item.DOB;
    if (action.item.Gender) newState.Gender = action.item.Gender;
    if (action.item.ForeGroundImage)
      newState.ForeGroundImage = action.item.ForeGroundImage;
    if (action.item.BackGroundImage)
      newState.BackGroundImage = action.item.BackGroundImage;
    if(action.item.Address)
    newState.Address=action.item.Address;
  if(action.item.CurrentActiveAddress)
  {
    newState.CurrentActiveAddress=action.item.CurrentActiveAddress;
  }
  } else if (action === "socket") {
    newState.Socket = action.item.socket;
    return newState;
  } else {
    newState.isAuth = false;
    newState.ClientId = "";
    newState.ClientEmail = "";
    newState.ClientUserName = "";
    newState.Review=0
    newState.CurrentActiveAddress=null;
    
  }
  return newState;
};

function AuthClientProvider(props) {
  const [ClientData, SetClientData] = useReducer(AddClientReducer, IntialState);
  const addClient = (event) => {
    console.log(event)
    SetClientData({ type: "login", item: event });
  };
  const RemoveClient = (event) => {
    SetClientData({ type: "logout" });
    localStorage.removeItem("login-data");
  };
  const addSocket = (event) => {
    SetClientData({ action: "socket", item: event });

  };
  const ClientCtx = {
    isAuth: ClientData.isAuth,
    ClientId: ClientData.ClientId,
    Address:ClientData.Address,
    ClientEmail: ClientData.ClientEmail,
    Orders:ClientData.Orders,
    CurrentAddress:ClientData.CurrentAddress,
    ClientUserName: ClientData.ClientUserName,
    ClientDob: ClientData.ClientDob,
    Gender: ClientData.Gender,
    Socket: ClientData.Socket,
    Review:ClientData.Review,
    ForeGroundImage: ClientData.ForeGroundImage,
    BackGroundImage: ClientData.BackGroundImage,
    CurrentActiveAddress:ClientData.CurrentActiveAddress,
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
          console.log(Data.User)
          addClient(Data.User);
          // addSocket(socket);
          setTimeout(()=>{setData(true);},300)
          
          
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
