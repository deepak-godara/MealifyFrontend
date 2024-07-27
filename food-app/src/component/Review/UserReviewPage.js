import React, { useContext, useEffect } from 'react';
import UserReview from './UserReview';
import { useDispatch, useSelector } from 'react-redux';
import { GetUserReviews } from '../../reduxtool/reduxActions/reviewAction';
import ClientContext from '../../store/AuthClient';

const UserReviewPage = () => {
  const ctx = useContext(ClientContext);
  console.log("Client is:", ctx.ClientId);
  const id = ctx.ClientId;
  const dispatch = useDispatch();
  const Reviews = useSelector((state) => state.ReviewUser);
  const { review, error, loading } = Reviews;

  useEffect(() => {
    dispatch(GetUserReviews({ id }));
    console.log("Fetched review data is:", review);
  }, [dispatch, id]);

  return (
    <div className='mainReviewPage'>
      <div className='myreview'>My Reviews</div>
        <div>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : !review || review.length === 0 ? (
        <p className='noreview'>No reviews for you yet</p>
      ) : (
        review.map((item) => (
          <UserReview key={item.review._id} Review={item.review} Hotel={item.hoteldata} />
        ))
      )}
      </div>
    </div>
  );
};

export default UserReviewPage;
