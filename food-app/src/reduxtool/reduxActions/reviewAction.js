import { REVIEW_DATA_SUCCESS,REVIEW_DATA_FAILS, REVIEW_DATA_REQUEST, 
    REVIEW_SAVEDATA_SUCCESS, REVIEW_SAVEDATA_FAILS, REVIEW_SAVEDATA_REQEST, 
    REVIEW_OWNERDATA_REQUEST,
    REVIEW_OWNERDATA_SUCCESS,
    REVIEW_OWNERDATA_FAILS , REVIEW_USERDATA_FAILS, REVIEW_USERDATA_REQUEST,REVIEW_USERDATA_SUCCESS} from "../constants/reviewConstants";
import axios from "axios";

 export const  saveReviewAction = ({OrderId, Rating, Review}) => async(dispatch) =>{
    try{
        dispatch({type :REVIEW_SAVEDATA_REQEST })
        const {data} = await  axios.post('http://localhost:4000/review/add' , {OrderId, Rating, Review})
        dispatch({type: REVIEW_SAVEDATA_SUCCESS , payload:data});
        console.log("review data saved successfully  from action side : ");
    }catch(error){
        dispatch({type:REVIEW_SAVEDATA_FAILS , payload:error})
    }
 }

 export const GetOwnerReviews = ({ id }) => async (dispatch) => {
    dispatch({ type: REVIEW_OWNERDATA_REQUEST });
    try {
      console.log("Hotel id is", id);
      const { data } = await axios.get(`http://localhost:4000/${id}/owner/review`);
      dispatch({ type: REVIEW_OWNERDATA_SUCCESS, payload: data });
      console.log(data);
      console.log("Owner review data fetched successfully by action");
    } catch (error) {
      console.log("Error fetching owner reviews:", error);
      dispatch({ type: REVIEW_OWNERDATA_FAILS, payload: error });
    }
  };
  
  
 export  const GetUserReviews =({id})=> async(dispatch)=>{
    dispatch({type:REVIEW_USERDATA_REQUEST})
    try {
        const {data} =  await  axios.get(`http://localhost:4000/${id}/user/review`);
        dispatch({type:REVIEW_USERDATA_SUCCESS , payload: data});
        console.log(" user  review data fetched  successfully by action " , data)
    } catch (error) {
        dispatch({type : REVIEW_USERDATA_FAILS , payload:error})
    }
    
 }


