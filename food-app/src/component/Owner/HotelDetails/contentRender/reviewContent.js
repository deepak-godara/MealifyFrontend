import React from 'react'
import './ContentRender.css'
const ReviewContent = () => {
  return (
    <>
    <div className='first-row'>
        <img src='' alt='profilePhoto'/>
        <div>
            <p> name</p>
            <div>
                <p>0 followers</p>
                <p>0 following</p>
            </div>
        </div>
    </div>
    <div className='secondRow'>
        <div>
            <p> Rating *</p>
            <p> date *</p>
        </div>
        <div>
            <p> discription</p>
        </div>
    </div>
    </>
  )
}

export default ReviewContent