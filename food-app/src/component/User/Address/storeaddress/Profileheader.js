import React, { useContext, useState } from 'react'
import './Profileheader.css'
import { FiEdit } from "react-icons/fi";
import ClientContext from '../../../../store/AuthClient';
import User from '../../UserProfile/main';
import { IoLocationOutline } from "react-icons/io5";
const Profileheader = () => {
    const ClientCtx=useContext(ClientContext);
    const [OpenProfileDiv,SetProfileDiv]=useState(false);
    const ChangeProfileDivVisibility=()=>{
        SetProfileDiv(!OpenProfileDiv)
    }
  return (
    <>
        <div class="review overlay">
            <img src={ClientCtx.ForeGroundImage} alt="not available"/>
            <div class="review-header">
                <div class="Left-review-header">
                    <div class="email-logo">
                        <img  className="name-word"src={ClientCtx.BackGroundImage} alt="not available"/>
                    </div>
                    <div class="full-name">
                        <p class="name">{ClientCtx.ClientUserName}</p>
                        <p class="location">
                           <IoLocationOutline style={{color:"white"}}/>
                            Indore</p>
                    </div>
                </div>
                <div class="right-review-header"> 
                        <button class="edit-button" onClick={ChangeProfileDivVisibility}><FiEdit style={{color:"white", height:"1rem", width:"1rem",paddingBottom:"0.2rem"}}/> <div>Edit Profile</div></button>
                    <div class="details">
                        <div class="data">
                            <p>0</p>
                            <p>Reviews</p>
                        </div>
                        <div class="data">
                            <p>0</p>
                            <p>Photos</p>
                        </div>
                        <div class="data">
                            <p>0</p>
                            <p>Followers</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {
            OpenProfileDiv&&
            <User func={ChangeProfileDivVisibility}/>
        }
    </>
  )
}

export default Profileheader