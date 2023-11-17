import React ,{useReducer,useEffect,useState}from 'react'
import OwnerContext from './AuthOwner';
const IntialState={
    isAuth:false,
    OwnerUserName:'',
    OwnerEmail:'',
    OwnerId:''
}
const AddOwnerReducer=(state=IntialState,action)=>
{
    const newState={...state};
    if(action.type==='login')
   { newState.isAuth=true;
    newState.OwnerId=action.item.Id;
    newState.OwnerEmail=action.item.Email
    newState.OwnerUserName=action.item.UserName}
    else{
      newState.isAuth=false;
    newState.OwnerId='';
    newState.OwnerEmail=''
    newState.OwnerUserName=''
    }
    return newState;
}

function AuthOwnerProvider(props) {
    const [OwnerData,SetOwnerData]=useReducer(AddOwnerReducer,IntialState);
    const addOwner=(event)=>{
           SetOwnerData({type:'login',item:event});
    }
    const removeOwner=(event)=>{
      SetOwnerData({type:'logout'})
    }
    const OwnerCtx={
        isAuth:OwnerData.isAuth,
        OwnerId:OwnerData.OwnerId,
        OwnerEmail:OwnerData.OwnerEmail,
        OwnerUserName:OwnerData.OwnerUserName,
        addOwner:addOwner,
        removeOwner:removeOwner
    }
    const[dataset,setData]=useState(false);
    useEffect(()=>{
      async  function fecthLoginStatus(){
      const  userDatajson=localStorage.getItem('owner-data');
      
      const userData=JSON.parse(userDatajson);
      if(userData)
      {
        addOwner(userData);
      }
      setData(!dataset);}
      fecthLoginStatus();

    },[])
  return (
    <OwnerContext.Provider value={OwnerCtx}>{props.children}</OwnerContext.Provider>
  )
}

export default AuthOwnerProvider