import React, { useState } from "react";
import "./SearchFormInput.css";
import PlacesAutocomplete from "react-places-autocomplete";
function SearchFormInput(props) {
  const [SearchAddress, SetSearchAddress] = useState("");
  const SearchAddressChange = async (data) => {
    SetSearchAddress(data);
    props.func(data);
  };
  return (
    <PlacesAutocomplete
      value={SearchAddress}
      onChange={SetSearchAddress}
      onSelect={SearchAddressChange}
      searchOptions={{
        componentRestrictions: { country: "IN" },
      }}
      googleCallbackName="initAutocomplete"
      googleMapsApiKey="AIzaSyCu1pHsemJ5XMhOE36gG9e77EE1VTb1QUM"
    >
      {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
        <div className="Search-Location-Div">
          <input
            {...getInputProps({
              placeholder: "Enter Location",
              className: "Search-location-Input",
            })}
          />
          <div className="autocomplete-Search-dropdown-container">
            {loading && <div>Loading...</div>}
            <div className="Search-DropDown-Location">
              {suggestions.map((suggestion) => {
                return (
                  <div
                    {...getSuggestionItemProps(suggestion, {
                      className: "Hover-List",
                    })}
                  >
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
}

export default SearchFormInput;
