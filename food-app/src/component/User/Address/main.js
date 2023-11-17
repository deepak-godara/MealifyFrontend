import React, { useState, useRef } from "react";
import CompleteAddress from "./CompleteAddress";
import AddLocation from "./AddLocation";
import ModalPortal from "../../UI/ModalPortal";
const MapContainer = () => {
// const 
const[OpenAddressForm,SetAddressForm]=useState(true)
const ChangeFormVisibility=()=>{
   SetAddressForm(!OpenAddressForm);
}
const [LocationAdded,setLocationAdded]=useState(false);
const [LocationName,SetLocationName]=useState(null);
const SetLocationAdd=()=>{
  setLocationAdded(!LocationAdded);
}
  return (
    
    <ModalPortal onClose={ChangeFormVisibility}>
      {OpenAddressForm&&
      <div className="Address-Container">
    <div className="Address-Box">
     <AddLocation func={SetLocationName}/>
     <CompleteAddress Location={LocationAdded} LocName={LocationName} func={SetLocationAdd}/>
    </div>
    </div>}
    </ModalPortal>
    
  );
};

export default MapContainer;
