import React,{useState} from 'react'
    import ClientSignUp from './ClientSignUp'
    import { Ports } from "../../BackendApi/Url";
function ClientSignUpForm(props) {
    const[ClientSignUpData]=useState(`${Ports}/client/signup`)
  return (
  <ClientSignUp loginlink={ClientSignUpData} onChangeLogin={props.ChangeLogin}></ClientSignUp>
  )
}

export default ClientSignUpForm