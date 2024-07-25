import React, { useState } from "react";
import CompleteAddress from "./CompleteAddress";
import AddLocation from "./AddLocation";
import ModalPortal from "../../UI/ModalPortal";
const MapContainer = (props) => {
  // const
  // console.log(props.func);
  const [OpenAddressForm, SetAddressForm] = useState(true);
  const ChangeFormVisibility = () => {
    console.log('hii')
    SetAddressForm(!OpenAddressForm);
    props.func()
  };
  const [LocationAdded, setLocationAdded] = useState(false);
  const [LocationName, SetLocationName] = useState(null);
  const [Coordinates, SetCoordinates] = useState(null);
  const SetLocationAdd = () => {
    setLocationAdded(!LocationAdded);
  };
  const AddCoordinates = (clickedLocation) => {
    SetCoordinates({ lat: clickedLocation.lat, lng: clickedLocation.lng });
  };
  return (
    <ModalPortal onClose={ChangeFormVisibility}>
      {OpenAddressForm && (
        <div className="Address-Container" >
          <div className="Address-Box">
            <AddLocation func={SetLocationName} AddCoorFunc={AddCoordinates} />
            <CompleteAddress
              Location={LocationAdded}
              LocName={LocationName}
              func={SetLocationAdd}
              Coordinates={Coordinates}
              CloseFunc={ChangeFormVisibility}
            />
          </div>
        </div>
      )}
    </ModalPortal>
  );
};

export default MapContainer;
