import { REVIEW_DATA_SUCCESS,REVIEW_DATA_FAILS, REVIEW_DATA_REQUEST, 
    REVIEW_SAVEDATA_SUCCESS, REVIEW_SAVEDATA_FAILS, REVIEW_SAVEDATA_REQEST } from "../constants/reviewConstants";
import axios from "axios";

 export const  saveReviewAction = ({HotelId, UserId, Rating, Review}) => async(dispatch) =>{
    try{
        dispatch({type :REVIEW_SAVEDATA_REQEST })
        const data = await  axios.post('http://localhost:4000/review/add' , {HotelId, UserId, Rating, Review})

        dispatch({type: REVIEW_SAVEDATA_SUCCESS , payload:data});
        console.log("review data saved successfully  from action side : ");
    }catch(error){
        dispatch({type:REVIEW_SAVEDATA_FAILS , payload:error})
    }
 }


