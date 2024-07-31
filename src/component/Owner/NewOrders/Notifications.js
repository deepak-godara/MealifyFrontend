import React, { useState, useEffect,useRef } from "react";
import { IoIosNotifications } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";
import "./Notification.css";
import { urls } from "../../../NotificationUrl/Url";
import { useSelect } from "downshift";
import { useSocket } from "../../../store/SocketContext";
import { NavLink } from "react-router-dom";

function Notifications() {
  const Socket = useSocket();
  const ref1 = useRef(null);
  const [notifications, setNotifications] = useState([
  ]);
  useEffect(() => {
    if (Socket) {
      Socket.on("Notification", ({ Message, Id }) => {
        setNotifications((prevNotifications) => [
          ...prevNotifications,
          { Message: Message, Id: urls[Id].link },
        ]);
      if(ref1.current!=null)
        ref1.current.click();
      });
    }
    // Cleanup function for socket listener
    return () => {
      if (Socket) {
        Socket.off("NewOrderReceived");
      }
    };
  }, [Socket]);
  const [Selected,SetSelected]=useState(null)
  const {
    isOpen,
    selectedItem,
    getToggleButtonProps,
    getMenuProps,
    getItemProps,
    closeMenu
  } = useSelect({
    items: notifications,
    onSelectedItemChange: ({ isOpen }) => {
      
      closeMenu()
      if (!isOpen) {
        console.log('Dropdown is closed');
        // You can call any function you want here when the dropdown closes
        setNotifications([]);
      }
      isOpen=false;
    },
  });
  return (
    // <div>
    //   <button
    //     onClick={() => {
    //       setIsOpen((prevIsOpen) => !prevIsOpen); // Toggle isOpen state
    //     }}
    //     className="Notification"
    //   >
    //     <IoIosNotifications style={{ height: "2.5rem", width: "2.5rem", color: isOpen ? "red" : "grey" }} />
    //     <IoMdArrowDropdown style={{ height: "2.5rem", width: "2.5rem" }} />
    //   </button>
    //   {isOpen && (
    //     <div className="Notification-DropDown" style={{}}>
    //       {notifications.map((item, index) => (
    //         <div className="Notification-Message" key={index}>
    //           {item.message}
    //         </div>
    //       ))}
    //     </div>
    //   )}
    // </div>
    <div>
      <button {...getToggleButtonProps()} ref={ref1} className="Notification">
        <IoIosNotifications
          style={{
            height: "2.5rem",
            width: "2.5rem",
            color: isOpen ? "rgb(77, 89, 102)" : "grey",
          }}
        />
        <IoMdArrowDropdown />
      </button>
      <div
        {...getMenuProps()}
        className="Notify-DropDown"
        style={{ padding: isOpen ? "1rem 0.5rem" : "0" }}
      >
        {isOpen && 
        <>
        {notifications.length==0&&<div className="DropDown-Elements">No new notifications</div>}
          {notifications.length>0&&
          <div className="Notification-DropDown">
            {notifications.map((item, index) => (
               <NavLink to={item.Id} className="Notification-Message"  {...getItemProps({ item, index })}
               key={index}>
               {
                  ({isActive})=>{
                      return(
                          <div className='DropDown-Elements'>
                           {item.Message}
                          </div>
                      )
                  }
               }
              </NavLink>
            ))}
          </div>}
          </>
        }
      </div>
    </div>
  );
}

export default Notifications;
