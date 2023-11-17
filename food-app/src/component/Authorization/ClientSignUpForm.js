import React,{useContext,useState} from 'react'
    import ClientSignUp from './ClientSignUp'
function ClientSignUpForm(props) {
    const[ClientSignUpData]=useState('http://localhost:4000/client/signup')
  return (
  <ClientSignUp loginlink={ClientSignUpData} onChangeLogin={props.ChangeLogin}></ClientSignUp>
  )
}

export default ClientSignUpForm