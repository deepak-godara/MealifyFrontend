// import React, { useState, useEffect } from "react";
// import { IoIosNotifications } from "react-icons/io";
// import { IoMdArrowDropdown } from "react-icons/io";
// import { useSelect } from "downshift";
// import "./Notification.css";
// import { useSocket } from "../../../store/SocketContext";
// function Notifications() {

//   const Socket = useSocket();
//   const [Notifications, SetNotifications] = useState([]);
//   const [isOpens, SetisOpen] = useState(1);
//   const NotificationAction = () => {};
//   useEffect(() => {
//     // console.log(Socket)
//     if (Socket) {
//       console.log('hii')
//       Socket.on("NewOrderReceived", ({message ,OrderId ,Order,Total,UserId}) => {
//         console.log(message+" sdvdv "+OrderId)
       
//         SetNotifications([...Notifications, {message:message,OrderId:OrderId,Total:Total,UserId:UserId}]);
//       });
//     }
//   }, [Socket,Notifications]);
//   const { isOpen, getItemProps, getMenuProps, getToggleButtonProps } =
//     useSelect({
//       items: Notifications,
//     });
//   return (
//     <div>
//       <button
//         {...getToggleButtonProps({onClick:()=>{
//             if(SetisOpen>0)
//             {
//                 SetisOpen((PrevSetisOpen)=>PrevSetisOpen-1)
//             }
//         }})}
//         // onClick={isOpens ? NotificationAction : () => {}}
//         className="Notification"
//       >
//         <IoIosNotifications style={{ height: "2.5rem", width: "2.5rem", color:isOpens>0?"red":"grey" }} />
//         <IoMdArrowDropdown style={{ height: "2.5rem", width: "2.5rem" }} />
//       </button>
//       {isOpen&&
//       <div {...getMenuProps()} className="Notification-DropDown" style={{ color: 'black' }}>        
//         {isOpen &&
//           Notifications.map((item, index) => 
//             <div
//               {...getItemProps({item, index})}
//               className="Notification-Message"
//             >
//               {item.message}
//             </div>
//           )}
//       </div>
// }
//     </div>
//   );
// }

// export default Notifications;
import React, { useState, useEffect } from "react";
import { IoIosNotifications } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";
import "./Notification.css";
import { useSocket } from "../../../store/SocketContext";

function Notifications() {
  const Socket = useSocket();
  const [notifications, setNotifications] = useState([]);
  const [isOpen, setIsOpen] = useState(false); // Changed isOpen state variable
  const notificationAction = () => {}; // Unused function

  useEffect(() => {
    if (Socket) {
      Socket.on("NewOrderReceived", ({ message, OrderId, Order, Total, UserId }) => {
        console.log(message + " sdvdv " + OrderId);
        setNotifications((prevNotifications) => [
          ...prevNotifications,
          { message: message, OrderId: OrderId, Total: Total, UserId: UserId },
        ]);
        // Automatically open the dropdown when a new order is received
        setIsOpen(true);
      });
    }
    // Cleanup function for socket listener
    return () => {
      if (Socket) {
        Socket.off("NewOrderReceived");
      }
    };
  }, [Socket]);

  return (
    <div>
      <button
        onClick={() => {
          setIsOpen((prevIsOpen) => !prevIsOpen); // Toggle isOpen state
        }}
        className="Notification"
      >
        <IoIosNotifications style={{ height: "2.5rem", width: "2.5rem", color: isOpen ? "red" : "grey" }} />
        <IoMdArrowDropdown style={{ height: "2.5rem", width: "2.5rem" }} />
      </button>
      {isOpen && (
        <div className="Notification-DropDown" style={{}}>
          {notifications.map((item, index) => (
            <div className="Notification-Message" key={index}>
              {item.message}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Notifications;

