import React from 'react'

const ClientContext =React.createContext({
    isAuthClient:false,
    ClientId:'',
    ClientUserName:'',
    ClientEmail:'',
  SetClient:()=>{}
})
export default ClientContext