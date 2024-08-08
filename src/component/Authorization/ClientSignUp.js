import React, { useReducer, useState} from "react";
import "./ClientAuthorization.css";
import Loader from "react-js-loader"
// import Client from '../../../../backend/models/client'
const InitialState = {
  UserName: "UserName",
  Password: "Password",
  ConfirmPassword: "ConfirmPassword",
  Email: "Email",
};
const InitialError = {
  err: "false",
  message: "Error Ocuured",
};
const ClientSignReducer = (state = InitialState, action) => {
  const NewState = { ...state };
  if (action.type === "addUserName") NewState.UserName = action.val;
  else if (action.type === "addPassword") NewState.Password = action.val;
  else if (action.type === "addEmail") NewState.Email = action.val;
  else if (action.type === "addConfirmPassword") NewState.ConfirmPassword = action.val;
  else if (action.type === "initalEmail") {
    if (NewState.Email === "") NewState.Email = "Email";
    else if (NewState.Email === "Email") NewState.Email = "";
  } else if (action.type === "initalUserName") {
    if (NewState.UserName === "") NewState.UserName = "UserName";
    else if (NewState.UserName === "UserName") NewState.UserName = "";
  } else if (action.type === "initalPassword") {
    if (NewState.Password === "") NewState.Password = "Password";
    else if (NewState.Password === "Password") NewState.Password = "";
  } else if (action.type === "initalConfirmPassword") {
    if (NewState.ConfirmPassword === "")
      NewState.ConfirmPassword = "ConfirmPassword";
    else if (NewState.ConfirmPassword === "ConfirmPassword")
      NewState.ConfirmPassword = "";
  }
  return NewState;
};

const errorClientLogin = (state = InitialError, action) => {
  const NewState = { ...state };
  if (action.type === "SetError") {
    console.log("ewfrebtnfhfgbf");
    NewState.message = action.val;
    NewState.err = "true";
  } else {
    NewState.message = "";
    NewState.err = "false";
  }
  return NewState;
};
function ClientSignUp(props) {
  const [ClientSignData, SetClientSignData] = useReducer(
    ClientSignReducer,
    InitialState
  );
  const [Loading,SetLoading]=useState(false);
  const [ErrorData, SetErrorData] = useReducer(errorClientLogin, InitialError);
  const ClientChange = (event) => {
    SetClientSignData({ type: event.target.name, val: event.target.value });
    if (ErrorData.err === "true") SetErrorData({ type: "noerror" });
  };
  const ClientBlurFocus = (event) => {
    if (event.target.name === "addUserName")
      SetClientSignData({ type: "initalUserName" });
    else if (event.target.name === "addPassword")
      SetClientSignData({ type: "initalPassword" });
    else if (event.target.name === "addConfirmPassword")
      SetClientSignData({ type: "initalConfirmPassword" });
    else SetClientSignData({ type: "initalEmail" });
    if (ErrorData.err === "true") SetErrorData({ type: "noerror" });
  };
  const ClientDataSubmit = (event) => {
    event.preventDefault();
    async function fetchClient() {
      SetLoading(true);
      const data = await fetch(props.loginlink, {
        method: "POST",
        body: JSON.stringify({
          username: ClientSignData.UserName,
          password: ClientSignData.Password,
          confirmpassword: ClientSignData.ConfirmPassword,
          email: ClientSignData.Email,
        }),
        headers: { "Content-type": "application/json" },
      });
      // console.log(data);
      const js = await data.json();
      if (js.status === "200") props.onChangeLogin();
      else if (js.status === "202")
        SetErrorData({ type: "SetError", val: js.message });
      SetLoading(false);
    }

    fetchClient();
  };
  return (
    <form className="add-client1-form" onSubmit={ClientDataSubmit}>
      {ErrorData.err === "true" && (
        <div className="login-error-options">{ErrorData.message}</div>
      )}
      {!Loading&&<>
      <div className="add-client1-div">
        <label className="add-client1-label">UserName:</label>
        <input
          className="add-client1-input"
          type="text"
          value={ClientSignData.UserName}
          name="addUserName"
          onChange={ClientChange}
          onFocus={ClientBlurFocus}
          onBlur={ClientBlurFocus}
        ></input>
      </div>
      <div className="add-client1-div">
        <label className="add-client1-label">Email:</label>
        <input
          className="add-client1-input"
          type="email"
          value={ClientSignData.Email}
          name="addEmail"
          onChange={ClientChange}
          onFocus={ClientBlurFocus}
          onBlur={ClientBlurFocus}
        ></input>
      </div>
      <div className="add-client1-div">
        <label className="add-client1-label">Password:</label>
        <input
          className="add-client1-input"
          type="password"
          value={ClientSignData.Password}
          name="addPassword"
          onChange={ClientChange}
          onFocus={ClientBlurFocus}
          onBlur={ClientBlurFocus}
        ></input>
      </div>
      <div className="add-client1-div">
        <label className="add-client1-label">ConfirmPassword:</label>
        <input
          className="add-client1-input"
          type="password"
          value={ClientSignData.ConfirmPassword}
          name="addConfirmPassword"
          onChange={ClientChange}
          onFocus={ClientBlurFocus}
          onBlur={ClientBlurFocus}
        ></input>
      </div>
      <button className="add-client1-button">SignUp</button></>
}
      
    </form>
  );
}

export default ClientSignUp;
