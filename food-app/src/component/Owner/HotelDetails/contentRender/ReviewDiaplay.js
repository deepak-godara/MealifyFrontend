import React, { useContext, useEffect, useState } from 'react';
import '../../../Review/review.css';
import { GetOwnerReviews } from '../../../../reduxtool/reduxActions/reviewAction';
import { useDispatch, useSelector } from 'react-redux';
import Loader from "react-js-loader"
import OwnerContext from '../../../../store/AuthOwner';
import ReviewContent from './reviewContent';

const ReviewDisplay = (props) => {
  const ctx = useContext(OwnerContext);
  const dispatch = useDispatch();
  const [hotelId, setHotelId] = useState(null);
  const PageSize = 5;
  useEffect(() => {
      setHotelId(props.id);
  }, [props.id]);

  const data = useSelector(state => state.ReviewOwner);
  const { review, loading, error,loading2 } = data;
  const GetMoreReview = () => {
    const count = review.length / 5;
    dispatch(GetOwnerReviews(hotelId, count, PageSize));
  };
  useEffect(() => {
    if (hotelId) {
      console.log("Dispatching GetOwnerReviews with hotelId:", hotelId);
      dispatch(GetOwnerReviews( hotelId,0,PageSize ));
    }
  }, [dispatch, hotelId]);

  return (
    <>
      <div className='mainReviewPage'>
        <p className='myreview'>My Reviews</p>
        {loading ? (
        <div className="Spinner-Class3" style={{ marginTop: "10vh" }}>
        <Loader
          type="spinner-cub"
          color="red"
          // style={{ position:"absolute", top:"2.9rem"}}

          // top="2.9rem"
          bgColor="rgb(77, 89, 102)"
          // title={"spinner-cub"}
          size={50}
        ></Loader>
      </div>
        ) : error ? (
          <p>{error}</p>
        ) : review.length === 0 ? (
          <p className='noreview'>No reviews for you yet</p>
        ) : (
          review.map((item) => (
            <ReviewContent key={item.review._id} Review={item.review} user={item.user} />
          ))
        )}
            {loading2 && (
          <div className="Spinner-Class3">
            <Loader
              type="spinner-cub"
              color="red"
              // style={{ position:"absolute", top:"2.9rem"}}

              // top="2.9rem"
              bgColor="rgb(77, 89, 102)"
              // title={"spinner-cub"}
              size={50}
            ></Loader>
          </div>
        )}
        <div className="User-Review-Button">
          {!loading&&!loading2&&review.length % PageSize === 0 && (
            <button
              className="User-Data-Button"
              onClick={() => {
                GetMoreReview();
              }}
            >
              Get More Reviews
            </button>
          )}
        </div>
      </div>
    </>
  );
}

export default ReviewDisplay;
