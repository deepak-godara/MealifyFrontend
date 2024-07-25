import { REVIEW_SAVEDATA_SUCCESS , REVIEW_SAVEDATA_REQEST, REVIEW_SAVEDATA_FAILS } from "../constants/reviewConstants";

export const  reviewSaveReducer =  (state = {data :{}} , action) =>{
    switch(action.type){
        case REVIEW_SAVEDATA_REQEST:
            return {loading: true  , data :{}}
        case REVIEW_SAVEDATA_SUCCESS:
            return {loading:false , data : action.payload}
        case REVIEW_SAVEDATA_FAILS:
            return {loading:false , data:action.payload}
    }
}