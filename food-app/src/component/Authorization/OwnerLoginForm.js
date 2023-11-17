import React,{useContext} from 'react'
import OwnerContext from '../../store/AuthOwner';
import ClientAuthorization from './ClientAuthorization';
function OwnerLoginForm() {
    const ownercontext=useContext(OwnerContext);
    console.log(ownercontext);
  return (
    <ClientAuthorization loginlink='http://localhost:4000/owner/login' transferlink="/owner/" localeData="owner" onSubFunc={ownercontext.addOwner}></ClientAuthorization>
  )
}

export default OwnerLoginForm