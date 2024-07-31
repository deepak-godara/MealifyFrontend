import React,{useContext,useState} from 'react'
    import ClientSignUp from './ClientSignUp'
import { Ports } from "../../BackendApi/Url";
function OwnerSignUpForm(props) {
  console.log(props);
  console.log('advsfbdgn');
    const[ClientSignUpData]=useState(`${Ports}/owner/signup`)
  return (
  <ClientSignUp loginlink={ClientSignUpData} onChangeLogin={props.ChangeLogin}></ClientSignUp>
  )
}

export default OwnerSignUpForm