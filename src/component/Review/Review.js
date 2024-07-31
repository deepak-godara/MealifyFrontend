import React, { useEffect, useState } from "react";
import "./review.css";

const ReviewPage = (props) => {
  // const { review = {}, user = {} } = props;
  const review = props.Review;
  const user = props.user;
  const [date, setDate] = useState("");
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

  const renderStars = (rating) => {
    const validRating = Math.max(0, Math.min(5, parseFloat(rating) || 0));
    const fullStars = Math.floor(validRating);
    const halfStars = validRating % 1 !== 0 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStars;

    return (
      <div className="stars">
        {Array(fullStars)
          .fill(null)
          .map((_, i) => (
            <span key={`full-${i}`} className="star full">
              ★
            </span>
          ))}
        {halfStars ? <span className="star half">★</span> : null}
        {Array(emptyStars)
          .fill(null)
          .map((_, i) => (
            <span key={`empty-${i}`} className="star empty">
              ★
            </span>
          ))}
      </div>
    );
  };

  return (
    <>
      <div className="main-box">
        <div className="head-section">
          <div className="left">
            <div className="image">
              <img src={user.profilePhoto} alt="Profile Photo" />
            </div>
            <div className="name">
              <p>{user.name}</p>
              <p>{date}</p>
            </div>
          </div>
          <div className="right">
            <p className="rate">Rating</p>
            <div className="rating">
              <p>{review.Rating ?? "N/A"}/5</p>
              <div className="stars">{renderStars(review.Rating)}</div>
            </div>
          </div>
        </div>
        <div className="description_box">{review.Review}</div>
      </div>
    </>
  );
};

export default ReviewPage;
