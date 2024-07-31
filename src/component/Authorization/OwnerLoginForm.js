import React,{useContext} from 'react'
import OwnerContext from '../../store/AuthOwner';
import { Ports } from "../../BackendApi/Url";
import ClientAuthorization from './ClientAuthorization';
function OwnerLoginForm() {
    const ownercontext=useContext(OwnerContext);
    console.log(ownercontext);
  return (
    <ClientAuthorization loginlink={`${Ports}/owner/login`} transferlink="/owner/" localeData="owner" onSubFunc={ownercontext.addOwner}></ClientAuthorization>
  )
}

export default OwnerLoginForm