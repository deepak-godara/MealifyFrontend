import React, { useEffect, useState } from "react";
import ModalPortal from "../component/UI/ModalPortal";
import ClientSignUpForm from "../component/Authorization/ClientSignUpForm";
import ClientLoginForm from "../component/Authorization/ClientLoginForm";
import UseScrollToTop from "../component/UI/UseScroll";
import "./Login.css";
function Login(props) {
  console.log(props);
  const [Login, SetLogin] = useState(true);
  const ChangeOptions = () => {
    SetLogin(!Login);
  };
 UseScrollToTop();
  return (
    <ModalPortal onClose={props.OnClose}>
      <div className="static-login-options">
        <div className="Login-Color" id="Login-SingUp-Form">
          {Login && <div className="Current-Login-Options">Login</div>}
          {!Login && <div className="Current-Login-Options">SignUp</div>}
          {Login && <ClientLoginForm ChangeLogin={ChangeOptions} />}
          {!Login && <ClientSignUpForm ChangeLogin={ChangeOptions} />}

          {Login && (
            <div className="Login-SignUp-Options">
              <span>New to our Website?</span>
              <span onClick={ChangeOptions}>SignUp</span>
            </div>
          )}
          {!Login && (
            <div className="Login-SignUp-Options">
              <span>Already have Account?</span>
              <span onClick={ChangeOptions}>Login</span>
            </div>
          )}
        </div>
      </div>
    </ModalPortal>
  );
}

export default Login;
