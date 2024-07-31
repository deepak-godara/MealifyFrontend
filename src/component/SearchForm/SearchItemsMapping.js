import React from "react";
import "./SearchItemMapping.css";
function SearchItemsMapping(props) {
  const SubmitItemData = () => {
    props.SearchFunc(props);
  };
  return (
    <div className="Search-Data-Div" onClick={SubmitItemData}>
      <div className="Search-Item-Name">{props.items.Name}</div>
      <div className="Search-Item-Type">{props.items.type}</div>
    </div>
  );
}

export default SearchItemsMapping;
