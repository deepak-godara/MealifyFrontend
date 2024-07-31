import React,{useContext,useState} from 'react'
import ClientContext from '../../store/AuthClient';
import ClientAuthorization from './ClientAuthorization';
import { Ports } from "../../BackendApi/Url";
import {} from 'react-router-dom'
function ClientLoginForm(props) {
const clientContext=useContext(ClientContext);
    const [loginlink]=useState(`${Ports}/client/login`);
    const[localeData]=useState('client');
  return (
    <ClientAuthorization loginlink={loginlink} transferlink="" localeData={localeData} onSubFunc={clientContext.addClient} />
  )
}

export default ClientLoginForm