import React, { createContext, useContext, useEffect, useState } from "react";
import io from "socket.io-client";
import ClientContext from "./AuthClient";
import OwnerContext from "./AuthOwner";
const SocketContext = createContext();

export const useSocket = () => {
  return useContext(SocketContext);
};

export const SocketProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);
  const ClientCtx = useContext(ClientContext);
  const OwnerCtx = useContext(OwnerContext);
  const [isOpen, SetisOpen] = useState(false);

  const newSocket = io("https://mealifybackend1.onrender.com");
  useEffect(() => {
    if (ClientCtx.isAuth) {
      console.log("client socket");
      setSocket(newSocket);
      SetisOpen(true);
      newSocket.emit("join", { id: ClientCtx.ClientId, User: "User" });
    SetisOpen(false)
    }
    if (OwnerCtx.isAuth) {
      console.log("owner socket");
      setSocket(newSocket);
      SetisOpen(true);
      newSocket.emit("join", { id: OwnerCtx.OwnerId, User: "Owner" });
      console.log(newSocket);
       SetisOpen(false);
    }
  }, []);

  return (
    <>
    {isOpen?<></>:
    <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>}
    </>
  );
};

// import React, { createContext, useContext, useEffect, useState } from "react";
// import io from "socket.io-client";
// import ClientContext from "./AuthClient";
// import OwnerContext from "./AuthOwner";

// const SocketContext = createContext();

// export const useSocket = () => {
//   return useContext(SocketContext);
// };

// export const SocketProvider = ({ children }) => {
//   const [socket, setSocket] = useState(null);
//   const ClientCtx = useContext(ClientContext);
//   const OwnerCtx = useContext(OwnerContext);
//   const [isOpen, SetisOpen] = useState(false);

//   useEffect(() => {
//     let newSocket;
//     if (ClientCtx.isAuth && !socket) {
//       console.log("client socket");
//       newSocket = io("http://localhost:4000");
//       setSocket(newSocket);
//       SetisOpen(true);
//       newSocket.emit("join", { id: ClientCtx.ClientId, User: "User" });
//       console.log(newSocket);
//     }

//     if (OwnerCtx.isAuth && !socket) {
//       console.log("owner socket");
//       newSocket = io("http://localhost:4000");
//       setSocket(newSocket);
//       SetisOpen(true);
//       newSocket.emit("join", { id: OwnerCtx.OwnerId, User: "Owner" });
//       console.log(newSocket);
//     }

//     const cleanup = () => {
//       if (newSocket) {
//         if (ClientCtx.isAuth) {
//           newSocket.emit("customDisconnect", { id: ClientCtx.ClientId });
//         }
//         if (OwnerCtx.isAuth) {
//           newSocket.emit("customDisconnect", { id: OwnerCtx.OwnerId });
//         }
//         newSocket.close();
//         setSocket(null);
//       }
//     };

//     window.addEventListener('beforeunload', cleanup);

//     return () => {
//       window.removeEventListener('beforeunload', cleanup);
//       cleanup();
//     };
//   }, [ClientCtx.isAuth, OwnerCtx.isAuth]);

//   return (
//     <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
//   );
// };
