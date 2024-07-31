import React, { useContext, useState, useEffect } from "react";
import { useParams, useLocation} from "react-router-dom";
import "./ClientHeader.css";
import { useSelect } from "downshift";
import { IoMdArrowDropdown } from "react-icons/io";
import Logout from "../Authorization/Logout";
import "./HeaderDropDown.css";
import OwnerContext from "../../store/AuthOwner";
import Notifications from "../Owner/NewOrders/Notifications";
import HeaderDropDown from "./HeaderDropDown";
import { OwnerHeaderArray } from "./OwnerHeaderDropDown";
function OwnerHeader(props) {
  const OwnerCtx = useContext(OwnerContext);
  console.log(OwnerCtx);

  const {
    isOpen,
    getToggleButtonProps,
    getItemProps,
    getMenuProps,
    closeMenu
  } = useSelect({
    items: OwnerHeaderArray,
    onSelectedItemChange: ({ selectedItem }) => {
      if (selectedItem) {
        closeMenu() 
      }
    },
  });
  return (
    <>
    
      <div className="Client-DropDown-Main">
        <Notifications/>
        <button {...getToggleButtonProps()} className="Client-Profile">
          <img src="df" alt="not available" />
          <div className="Client-Name">{OwnerCtx.OwnerUserName}</div>
          <IoMdArrowDropdown />
          <div
          {...getMenuProps()}
          className="Client-DropDown"
          style={{ padding: isOpen ? "1rem" : "0" }}
        >
          {isOpen && (
            <div className="Header-DropDown">
              {OwnerHeaderArray.map((item, index) => (
                <div {...getItemProps({ item, index })}>
                  <HeaderDropDown link={item.link} name={item.name} />
                </div>
              ))}
              <div onClick={OwnerCtx.removeOwner} className="Logout-Div" >Logout</div>
            </div>
          )}
        </div>
        </button>
       
      </div>
    </>
  );
}

export default OwnerHeader;
