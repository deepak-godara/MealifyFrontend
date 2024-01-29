import React,{Fragment,useContext} from 'react'
import AuthClient from '../../store/AuthClient'
import './Header.css'
import {useState } from 'react'
import Logout from '../Authorization/Logout'
import LoginOption from '../Layout/LoginOption'
import SearchForm from '../SearchForm/SearchForm'
function Header(props) {
  const clientCtx=useContext(AuthClient);
  const [OptionDisplay,SetOptionDisplay]=useState(false);
  const LoginDisplay=()=>{
      SetOptionDisplay(!OptionDisplay);
  } 
  
  const SetBlurofLogin=()=>{
    setTimeout(()=>{
        SetOptionDisplay(false);
    },300)
}
  console.log(clientCtx.isAuth)
  return (
    <Fragment >
        <SearchForm/>
        <div >
           {!clientCtx.isAuth&&<div className='LoginNavlink' >
            <div onClick={LoginDisplay} >Login</div>
            {OptionDisplay&&<LoginOption BlurFunc={SetBlurofLogin}/>}
            </div>}
           {clientCtx.isAuth&&<Logout/>}
           </div>
    </Fragment>
  )
}

export default Header