import React from 'react'

function HotelInput(props) {
  return (
    <div className={props.className}>
        <label className="Add-Hotel-Label">{props.Label}</label>
        <input
          className="Add-Hotel-Input"
          name={props.Name}
          placeholder={props.placeholder}
          value={props.value}
          onChange={(event) => {
            props.SetHotelData({
              type: event.target.name,
              val: event.target.value === "" ? undefined : event.target.value,
            });
          }}
        ></input>
        </div>
  )
}

export default HotelInput