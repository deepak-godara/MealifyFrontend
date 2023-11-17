import React, { useState } from "react";
import axios from "axios";
import PlacesAutocomplete from "react-places-autocomplete";
import "./LocationInput.css";
const LocationInput = (props) => {
  console.log(props);
  const [address, setAddress] = useState("");

  const handleSelect = async (selectedAddress) => {
    setAddress(selectedAddress);
    props.func(selectedAddress);
  };

  return (
    <PlacesAutocomplete
      value={address}
      onChange={setAddress}
      onSelect={handleSelect}
      searchOptions={{
        // types: ['establishment'], // Limit results to businesses and places
        componentRestrictions: { country: "IN" }, // Restrict to India
      }} // Limit results to geocode (i.e., addresses)
      // Pass your Google API key here
      googleCallbackName="initAutocomplete"
      googleMapsApiKey="AIzaSyCu1pHsemJ5XMhOE36gG9e77EE1VTb1QUM"
    >
      {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
        <div className="Location-Div">
          <input
            {...getInputProps({
              placeholder: "Enter hotel Address",
              className: "location-input",
            })}
          />
          <div className="autocomplete-dropdown-container">
            {loading && <div>Loading...</div>}
            <div className="DropDown-Location">
              {suggestions.map((suggestion) => {
                const className = suggestion.active
                  ? "suggestion-item-active"
                  : "suggestion-item";
                return (
                  <div {...getSuggestionItemProps(suggestion, { className })}>
                    {suggestion.description}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </PlacesAutocomplete>
  );
};

export default LocationInput;
