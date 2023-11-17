import React,{useContext,useState} from 'react'
import ClientContext from '../../store/AuthClient';
import ClientAuthorization from './ClientAuthorization';
import {} from 'react-router-dom'
function ClientLoginForm(props) {
const clientContext=useContext(ClientContext);
console.log(clientContext);
    const [loginlink,Setloginlink]=useState("http://localhost:4000/client/login");
    const[localeData,SetLocaleData]=useState('client');
  return (
    <ClientAuthorization loginlink={loginlink} transferlink="" localeData={localeData} onSubFunc={clientContext.addClient} />
  )
}

export default ClientLoginForm