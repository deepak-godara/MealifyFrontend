import React, { useState, useEffect } from "react";
import { IoIosNotifications } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";
import { useSelect } from "downshift";
import "./Notification.css";
import { useSocket } from "../../../store/SocketContext";
function Notifications() {
  const Socket = useSocket();
  const [Notifications, SetNotifications] = useState([
  ]);
  const [isOpens, SetisOpen] = useState(1);
  const NotificationAction = () => {};
  useEffect(() => {
    // console.log(Socket)
    if (Socket) {
      console.log('hii')
      Socket.on("NewOrderReceived", ({message ,OrderId ,Order,Total,UserId}) => {
        console.log(message+" sdvdv "+OrderId)
       
        SetNotifications([...Notifications, {message:message,OrderId:OrderId,Total:Total,UserId:UserId}]);
      });
    }
  }, [Socket,Notifications]);
  const { isOpen, getItemProps, getMenuProps, getToggleButtonProps } =
    useSelect({
      items: Notifications,
    });
  return (
    <div>
      <button
        {...getToggleButtonProps({onClick:()=>{
            if(SetisOpen>0)
            {
                SetisOpen((PrevSetisOpen)=>PrevSetisOpen-1)
            }
        }})}
        // onClick={isOpens ? NotificationAction : () => {}}
        className="Notification"
      >
        <IoIosNotifications style={{ height: "2.5rem", width: "2.5rem", color:isOpens>0?"red":"grey" }} />
        <IoMdArrowDropdown style={{ height: "2.5rem", width: "2.5rem" }} />
      </button>
      {isOpen&&
      <div {...getMenuProps()} className="Notification-DropDown" style={{}}>
        {isOpen &&
          Notifications.map((item, index) => 
            <div
              {...getItemProps({item, index})}
              className="Notification-Message"
            >
              {item.message}
            </div>
          )}
      </div>
}
    </div>
  );
}

export default Notifications;
