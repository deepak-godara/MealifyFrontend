import React from 'react'

const OwnerContext =React.createContext({
    isAuthOwner:false,
    OwnerId:'',
    OwnerUserName:'',
    OwnerEmail:'',
    SetOwner:()=>{},
})
export default OwnerContext