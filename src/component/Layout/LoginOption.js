import React, { useState, useEffect } from "react";
import Login from "../../projectRoutes/ClientLogin";
import OwnerLogins from "../../projectRoutes/OwnerLogin";
import "./LoginOption.css";
function LoginOption(props) {
  const [OwnerLogin, SetOwnerLogin] = useState(false);
  const [UserLogin, SetUserLogin] = useState(false);
  const OwnerLoginChange = () => {
    SetOwnerLogin(!OwnerLogin);
  };
  const UserLoginChange = () => {
    console.log("user-Login");
    SetUserLogin(!UserLogin);
  };
  const BlursLogin = () => {
    props.BlurFunc();
  };
  useEffect(() => {
    document.addEventListener("mouseup", function (e) {
      var container = document.getElementById("container");
      var container2 = document.getElementById("Login-SingUp-Form");

      if (
        container !== null &&
        !container.contains(e.target) &&
        !(container2 !== null && container2.contains(e.target))
      ) {
        props.BlurFunc();
      }
    });
  });
  return (
    <div className="login-options-div" id="container">
      <div onClick={UserLoginChange}>User Login</div>
      {OwnerLogin && <OwnerLogins OnClose={OwnerLoginChange}></OwnerLogins>}
      <div onClick={OwnerLoginChange}>Owner Login</div>
      {UserLogin && <Login OnClose={UserLoginChange}></Login>}
    </div>
  );
}

export default LoginOption;
