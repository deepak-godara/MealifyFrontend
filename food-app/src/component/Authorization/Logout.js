import React ,{useContext}from 'react'
import {useNavigate} from 'react-router-dom'
import ClientContext from '../../store/AuthClient';
import OwnerContext from '../../store/AuthOwner';
import './Logout.css'
function Logout(props) {
    const navigate=useNavigate();
const ClientCtx=useContext(ClientContext);
const OwnerCtx=useContext(OwnerContext);
    const getLoggedOut=()=>{
     localStorage.removeItem("login-data");

     if(ClientCtx.isAuthClient)
ClientCtx.RemoveClient();
else{
 OwnerCtx.removeOwner();
}
console.log('loggedOut');
     navigate('/');
    }
  return (
    <button  className='logout-button' onClick={getLoggedOut}>LogOut</button>
  )
}

export default Logout