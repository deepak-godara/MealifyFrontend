import React ,{useReducer,useEffect, useState}from 'react'
import ClientContext from './AuthClient';
const IntialState={
    isAuth:false,
    ClientUserName:'',
    ClientEmail:'',
    ClientId:0
}
const AddClientReducer=(state=IntialState,action)=>
{
console.log(action.item._id)
    const newState={...state};
    if(action.type==='login')
    {newState.isAuth=true;
    newState.ClientId=action.item._id;
    
    newState.ClientEmail=action.item.Email;
    newState.ClientUserName=action.item.UserName;}
    else
    {
      newState.isAuth=false;
      newState.ClientId='';
    newState.ClientEmail='';
    newState.ClientUserName='';
    }
    console.log(newState.ClientId);
    return newState;
}

function AuthClientProvider(props) {
    const [ClientData,SetClientData]=useReducer(AddClientReducer,IntialState);
    const addClient=(event)=>{
           SetClientData({type:'login',item:event});
    }
    const RemoveClient=(event)=>{
      SetClientData({type:'logout'});
    }
    const ClientCtx={
        isAuth:ClientData.isAuth,
        ClientId:ClientData.ClientId,
        ClientEmail:ClientData.ClientEmail,
        ClientU:ClientData.ClientUserName,
        addClient:addClient,
        RemoveClient:RemoveClient
    }
    const[dataset,setData]=useState(false);
    useEffect(()=>{
      async  function fecthLoginStatus(){
      const  userDatajson=localStorage.getItem('login-data');
      const userData=JSON.parse(userDatajson);
      if(userData)
      {
        addClient(userData);
      }
      setData(!dataset);
    }
      fecthLoginStatus();

    },[])
    if(dataset)
  {return (
    <ClientContext.Provider value={ClientCtx}>{props.children}</ClientContext.Provider>
  )}
}

export default AuthClientProvider