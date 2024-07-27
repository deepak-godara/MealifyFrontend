import React, { useEffect, useState } from "react";
import "./userReview.css";
import StarDisplay from "./starDisplay";

const UserReview = ({Review , Hotel}) => {

  const   [date , setDate] = useState('');

  const formatDate = (date) => {
    const year = new Date(date).getFullYear();
    const month = new Date(date).toLocaleString('en-US', { month: 'long' });
    const day = new Date(date).getDate();
    return `${year} ${month} ${day}`;
  };


useEffect(()=>{
    if(Review.Date){
       const   fdate =  formatDate(Review.Date.toString());
       setDate(fdate);
    }
}, [Review.Date]);



  return (
    <>
      <div className="mainContainer">
        <div className="hotelImage">
          <img
            src={Hotel.Image}
            alt="hotelImage"
          />
        </div>
        <div className="ContentBox">
          <div className="contentBoxChild" >
            <div className="content">
              <h3>{Hotel.Name}</h3>
              <p>{date}</p>
              <div className="star">
                 <p id="rate"> {Review.Rating}/5</p>
                  <p>{<StarDisplay  rating = {Review.Rating}/>}</p>
              </div>
            </div>
            <div className="buttons">
              {/* <button type="button">Update Review</button> */}
            </div>
          </div>
          <div className="discriptionBox">{Review.Review}</div>
        </div>
      </div>
    </>
  );
};

export default UserReview;
