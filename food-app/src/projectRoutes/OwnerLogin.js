import React,{useState} from 'react'
import ModalPortal from '../component/UI/ModalPortal';
import OwnerLoginForm from '../component/Authorization/OwnerLoginForm';
import OwnerSignUpForm from '../component/Authorization/OwnerSignUpForm';
import './Login.css'
// import ModalPortal from '../component/UI/ModalPortal';
function OwnerLogin(props) {
  console.log('owner');
const [Login,SetLogin]=useState(true);
const ChangeOptions=()=>{
    SetLogin(!Login);
}
  return (
    <ModalPortal onClose={props.OnClose}>
        <div className='static-login-options'>
        <div className='Login-Color' id='Login-SingUp-Form'>
        {Login&&<div className='Current-Login-Options'>Login</div>}
    {!Login&&<div  className='Current-Login-Options'>SignUp</div>}
   
    {Login&&<OwnerLoginForm ChangeLogin={ChangeOptions}/>}
    {!Login&&<OwnerSignUpForm ChangeLogin={ChangeOptions}/>}
    {Login&&<div className='Login-SignUp-Options'>
      <span>New to our Website?</span>
      <span  onClick={ChangeOptions}>SignUp</span>
      </div>}
      {!Login&&<div  className='Login-SignUp-Options'>
      <span>Already have Account?</span>
      <span  onClick={ChangeOptions}>Login</span>
      </div>}
    </div>
    </div>
    </ModalPortal>
  )
}

export default OwnerLogin