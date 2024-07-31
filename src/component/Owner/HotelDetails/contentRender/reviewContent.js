import React from 'react'
import './contentRender.css'
import { FaStar } from "react-icons/fa";
import {useState , useEffect} from 'react'
const ReviewContent = (props) => {
    const review = props.Review;
    const user = props.user;

    const [date, setDate] = useState("");
  console.log(review);
  useEffect(() => {
    const formattedDate = formatDate("2024-07-26T10:00:00Z");
    setDate(formattedDate);
  }, []);

  const formatDate = (date) => {
    const year = new Date(date).getFullYear();
    const month = new Date(date).toLocaleString("en-US", { month: "long" });
    const day = new Date(date).getDate();
    return `${year} ${month} ${day}`;
  };

  return (
    <>
    <div className='main-review-Content'>
    <div className='firstRow'>
        <img src={user.profilePhoto} alt='profilePhoto'/>
        <div >
            <p className='user-name'> {user.name}</p>
            <div className='followers'>
                <p>0 followers , </p>
                <p>0 following</p>
            </div>
        </div>
    </div>
    <div className='secondRow'>
        <div className='followers'>
            <p><div className="Hotel-Rating-Div">
              <span>{review.Rating}</span>
              <FaStar className="star-color"></FaStar>
            </div></p>
            <p> date </p>
        </div>
        <div className='ReviewDiscription'>
            <p> {review.Review}</p>
        </div>
        <p className='disc'>0 Votes for helpful, 0 Comments , </p>
    </div>
    </div>
    </>
  )
}

export default ReviewContent