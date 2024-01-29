
import React, { createContext, useContext, useEffect, useState } from 'react';
import io from 'socket.io-client';
import ClientContext from './AuthClient';
import OwnerContext from './AuthOwner';
const SocketContext = createContext();

export const useSocket = () => {
  return useContext(SocketContext);
};

export const SocketProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);
    const ClientCtx=useContext(ClientContext);
    const OwnerCtx=useContext(OwnerContext);
    const [isOpen,SetisOpen]=useState(false)
    const newSocket = io('http://localhost:4000');
    useEffect(() => {
      if (ClientCtx.isAuth ) {
        setSocket(newSocket);
        SetisOpen(true);
        newSocket.emit("join", { id:ClientCtx.ClientId,User:"User" });
        console.log(newSocket);
      }
      if ( OwnerCtx.isAuth) {
        setSocket(newSocket);
        SetisOpen(true);
        newSocket.emit("join", { id:OwnerCtx.OwnerId,User:"Owner" });
        console.log(newSocket);
      }
      // Cleanup on unmount or page refresh
      const cleanup = () => {
        if(ClientCtx.isAuth)
        newSocket.emit("disconnec",{id:ClientCtx.ClientId});
      if(OwnerCtx.isAuth)
      newSocket.emit("disconnec",{id:OwnerContext.OwnerId});
        // Additional cleanup if needed
      };
  
      // Add event listener for beforeunload
      window.addEventListener('beforeunload', cleanup);
  
      // return () => {
      //   // Remove the event listener on component unmount
      //   window.removeEventListener('beforeunload', cleanup);
      //   cleanup();
      // };
    }, [ClientCtx.isAuth, OwnerCtx.isAuth]);
  
  return (
   
    <SocketContext.Provider value={socket}>
      {children}
    </SocketContext.Provider>
  );
};