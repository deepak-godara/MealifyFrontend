import React, { useContext, useEffect, useState } from 'react';
import './review.css';
import { GetOwnerReviews } from '../../reduxtool/reduxActions/reviewAction';
import { useDispatch, useSelector } from 'react-redux';
import OwnerContext from '../../store/AuthOwner';
import ReviewPage from './Review';

const ReviewRender = () => {
  const ctx = useContext(OwnerContext);
  const dispatch = useDispatch();
  const [hotelId, setHotelId] = useState(null);

  useEffect(() => {
    if (ctx.OwnerHotelId) {
      setHotelId(ctx.OwnerHotelId);
    }
  }, [ctx.OwnerHotelId]);

  const data = useSelector(state => state.ReviewOwner);
  const { review, loading, error } = data;

  useEffect(() => {
    if (hotelId) {
      console.log("Dispatching GetOwnerReviews with hotelId:", hotelId);
      dispatch(GetOwnerReviews({ id: hotelId }));
    }
  }, [dispatch, hotelId]);

  return (
    <>
      <div className='mainReviewPage'>
        <p className='myreview'>My Reviews</p>
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>{error}</p>
        ) : review.length === 0 ? (
          <p className='noreview'>No reviews for you yet</p>
        ) : (
          review.map((item) => (
            <ReviewPage key={item.review._id} Review={item.review} user={item.user} />
          ))
        )}
      </div>
    </>
  );
}

export default ReviewRender;
