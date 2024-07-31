// Reviewform.js
import React, { useState } from 'react';
import './reviewform.css';
import { useDispatch, useSelector } from 'react-redux';
import { saveReviewAction } from '../../reduxtool/reduxActions/reviewAction';

const Reviewform = ({  OrderId , onClose }) => {
  const dispatch = useDispatch()
  const [rating, setRating] = useState(0);
  const [description, setDescription] = useState('');
const reveiw =  useSelector(state => state.ReviewSaveReduce);
  const handleRating = (newRating) => {
    setRating(newRating);
  };

  const handleDescription = (event) => {
    setDescription(event.target.value);
  };

  const handleReviewLater = () => {
    console.log('Review Later clicked');
    onClose();
  };

  const handleSubmit = () => {
    dispatch(saveReviewAction({OrderId: OrderId , Rating:rating , Review:description}))
    console.log('Rating:', rating);
    console.log('Description:', description);
    onClose();
  };

  // useEffect(()=>{

  // }, )

  return (
    <div className='box1'>
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

export default Reviewform;
