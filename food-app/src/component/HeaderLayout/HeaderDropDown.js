import React from 'react'
import { NavLink } from 'react-router-dom'
function HeaderDropDown(props) {
  return (
    <NavLink to={props.link} className="DropDown-Div">
     {
        ({isActive})=>{
            return(
                <div className='DropDown-Element'>
                 {props.name}
                </div>
            )
        }
     }
    </NavLink>
  )
}

export default HeaderDropDown