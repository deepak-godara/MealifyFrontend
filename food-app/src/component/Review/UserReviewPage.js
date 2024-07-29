import React, { useContext, useEffect, useState } from "react";
import UserReview from "./UserReview";
import { useDispatch, useSelector } from "react-redux";
import { GetUserReviews } from "../../reduxtool/reduxActions/reviewAction";
import ClientContext from "../../store/AuthClient";
import Loader from "react-js-loader";
const UserReviewPage = () => {
  const ctx = useContext(ClientContext);
  console.log("Client is:", ctx.ClientId);
  const id = ctx.ClientId;
  const [PageNumber, SetPageNumber] = useState(0);
  const PageSize = 5;
  const dispatch = useDispatch();
  const Reviews = useSelector((state) => state.ReviewUser);
  const { review, error, loading, loading2 } = Reviews;

  const GetMoreReview = () => {
    const count = review.length / 5;
    dispatch(GetUserReviews(id, count, PageSize));
  };
  useEffect(() => {
    dispatch(GetUserReviews(id, 0, PageSize));
    console.log("Fetched review data is:", review);
  }, [dispatch, id]);

  return (
    <div className="mainReviewPage">
      <div className="myreview">My Reviews</div>
      <div>
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
        ) : !review || review.length === 0 ? (
          <p className="noreview">No reviews for you yet</p>
        ) : (
          review.map((item) => (
            <UserReview
              key={item.review._id}
              Review={item.review}
              Hotel={item.hoteldata}
            />
          ))
        )}
        {loading2 && (
          <div className="Spinner-Class3">
            <Loader
              type="spinner-cub"
              color="rgb(77, 89, 102)"
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
    </div>
  );
};

export default UserReviewPage;
