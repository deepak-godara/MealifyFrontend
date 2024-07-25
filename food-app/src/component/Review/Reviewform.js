import React, { useState } from 'react';
import './reviewform.css';

export const Reviewform = () => {
  const [rating, setRating] = useState(0);
  const [description, setDescription] = useState('');

  const handleRating = (newRating) => {
    setRating(newRating);
  };

  const handleDescription = (event) => {
    setDescription(event.target.value);
  };

  const handleReviewLater = () => {
    // Implement your review later logic here

    console.log('Review Later clicked');
  };

  const handleSubmit = () => {
    // Implement your submit logic here
    console.log('Rating:', rating);
    console.log('Description:', description);
  };

  return (
    <div className='main-box'>
      <div className='form'>
        <div className='rateUs'>Rate Us</div>
        <div className='star-rating'>
          {[...Array(5)].map((_, index) => (
            <span
              key={index}
              className={`star ${index < rating ? 'filled' : ''}`}
              onClick={() => handleRating(index + 1)}
            >
              &#9733;
            </span>
          ))}
        </div>
        <textarea
          className='description'
          value={description}
          onChange={handleDescription}
          placeholder='Write your review here...'
        />
        <div className='buttons'>
          <button className='review-later' onClick={handleReviewLater}>Review Later</button>
          <button className='submit' onClick={handleSubmit}>Submit</button>
        </div>
      </div>
    </div>
  );
};
