import React, { Fragment, useContext } from "react";
import "./ClientHeader.css";
import { useSelect } from "downshift";
import SearchForm from "../SearchForm/SearchForm";
import ClientContext from "../../store/AuthClient";
import { ClientHeaderArray } from "../Layouts/ClientHeaderArray";
import { IoMdArrowDropdown } from "react-icons/io";
import HeaderDropDown from "./HeaderDropDown";
import Notifications from "../Owner/NewOrders/Notifications";
import "./HeaderDropDown.css";
function ClientHeader(props) {
  const clientCtx = useContext(ClientContext);

  const {
    isOpen,
    selectedItem,
    getToggleButtonProps,
    getMenuProps,
    getItemProps,
  } = useSelect({
    items: ClientHeaderArray,
  });
  return (
    <Fragment>
      <SearchForm></SearchForm>
      
      <div className="Client-Header-Block">
      <Notifications/>
        <button {...getToggleButtonProps()} className="Client-Profile">
          <img src={clientCtx.ForeGroundImage} alt="not avaialable" />
          <div className="Client-Name">{clientCtx.ClientUserName}</div>
          <IoMdArrowDropdown />
        </button>
        <div
          {...getMenuProps()}
          className="Client-DropDown"
          style={{ padding: isOpen ? "1rem" : "0" }}
        >
          {isOpen && (
            <div className="Header-DropDown">
              {ClientHeaderArray.map((item, index) => (
                <div {...getItemProps({ item, index })}>
                  <HeaderDropDown link={item.link} name={item.name} />
                </div>
              ))}
              <div onClick={()=>{clientCtx.RemoveClient()}} className="Logout-Div">
                Logout
              </div>
            </div>
          )}
        </div>
      </div>
    </Fragment>
  );
}

export default ClientHeader;
