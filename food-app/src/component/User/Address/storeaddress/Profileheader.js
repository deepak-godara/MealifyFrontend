import React from 'react'
import './Profileheader.css'
import Address from './Address'
const Profileheader = () => {
  return (
    <>
     <container class="max-width">
        <div class="review overlay">
            <div class="review-header">
                <div class="Left-review-header">
                    <div class="email-logo">
                        <p class="name-word">A</p>
                    </div>
                    <div class="full-name">
                        <p class="name">Anurag Singh</p>
                        <p class="location"><span class="material-symbols-outlined">
                            location_on
                            </span> Indore</p>
                    </div>
                </div>
                <div class="right-review-header"> 
                        <button class="edit-button"> <span class="material-symbols-outlined">edit_square</span> &nbsp;Edit Profile</button>
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
    <div className='address'>
    <Address/>
    </div>
    </container>
    </>
  )
}

export default Profileheader