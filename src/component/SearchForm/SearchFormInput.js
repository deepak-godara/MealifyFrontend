import React, { useState } from "react";
import "./SearchFormInput.css";
import PlacesAutocomplete from "react-places-autocomplete";
import Loader from "react-js-loader";
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
            {loading ? (
              <div
                className="Spinner-Class3"
                style={{
                  height: "5rem",
                  width: "150%",
                  borderRadius: "12px",
                  backgroundColor: "white",
                  pading:"0rem",
                  boxShadow:"0px 0px 10px 0px grey"
                }}
              >
                <Loader
                  type="spinner-cub"
                  color="red"
                  // style={{ position:"absolute", top:"2.9rem"}}

                  // top="2.9rem"
                  bgColor="rgb(77, 89, 102)"
                  // title={"spinner-cub"}
                  size={50}
                ></Loader>
              </div>
            ):
            <div className="Search-DropDown-Location" stylde>
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
            </div>}
          </div>
        </div>
      )}
    </PlacesAutocomplete>
  );
}

export default SearchFormInput;
