import React, { useRef, useState, useEffect } from "react";
import { GoogleMap, Marker,} from "@react-google-maps/api";
import "./Address.css";
function AddLocation(props) {
  const [mapCenter, setMapCenter] = useState({
    lat: 37.774929,
    lng: -122.419416,
  }); // Default center
  const [cursorPosition, setCursorPosition] = useState(null);
  const mapRef = useRef();
  const handleGetLocationName = async (clickedLocation) => {
    try {
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${clickedLocation.lat},${clickedLocation.lng}&key=AIzaSyCu1pHsemJ5XMhOE36gG9e77EE1VTb1QUM`
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      // console.log(`location is : ${data}`);
      if (data.results.length > 0) {
        const address = data.results[0].formatted_address;
        props.func(address);
      }
    } catch (error) {
      console.error("Error fetching location name:", error);
    }
  };
  useEffect(() => {
    const getLocation = async() => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          const { latitude, longitude } = position.coords;
          const clickedLocation = {
            lat: latitude,
            lng: longitude,
          };
          setMapCenter({ lat: latitude, lng: longitude });
          setCursorPosition({ lat: latitude, lng: longitude });
          handleGetLocationName(clickedLocation);
          props.AddCoorFunc(clickedLocation);
        });
      }
      else {
        console.log("Geolocation is not supported by this browser.");
      }
    };

   getLocation();
  },[]);

  const onMapClick = async (event) => {
    const clickedLocation = {
      lat: event.latLng.lat(),
      lng: event.latLng.lng(),
    };
    console.log(clickedLocation)
    handleGetLocationName(clickedLocation);
    setMapCenter(clickedLocation);
    setCursorPosition(clickedLocation);
    props.AddCoorFunc(clickedLocation);
  };

  const mapOptions = {
    disableDefaultUI: true,
    zoomControl: true,
  };

  return (
    <div className="Map-Box">
      <GoogleMap
        mapContainerStyle={{
          width: "100%",
          height: "90%",
          borderRadius:"12px",
        }}
        center={mapCenter}
        zoom={14}
        options={mapOptions}
        onClick={onMapClick}
        onLoad={(map) => (mapRef.current = map)}
      >
        {cursorPosition && <Marker position={cursorPosition} />}
        {/* {cursorPosition && (
          <InfoWindow
            position={cursorPosition}
            // onCloseClick={handleCloseInfoWindow}
          >
            <div className="Location-Message-Box">
            Your Order will be deliverd here
            </div>
          </InfoWindow>
        )} */}
      </GoogleMap>
    </div>
  );
}

export default AddLocation;
