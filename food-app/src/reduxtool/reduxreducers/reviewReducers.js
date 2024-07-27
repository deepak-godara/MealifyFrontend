import { REVIEW_SAVEDATA_SUCCESS , REVIEW_SAVEDATA_REQEST, REVIEW_SAVEDATA_FAILS,
   REVIEW_OWNERDATA_REQUEST, REVIEW_OWNERDATA_FAILS, REVIEW_OWNERDATA_SUCCESS , REVIEW_USERDATA_FAILS, REVIEW_USERDATA_REQUEST,REVIEW_USERDATA_SUCCESS} from "../constants/reviewConstants";
import {}  from "../constants/reviewConstants"
export const reviewSaveReducer = (state = { data: {} }, action) => {
    switch (action.type) {
      case REVIEW_SAVEDATA_REQEST:
        return { ...state, loading: true };
      case REVIEW_SAVEDATA_SUCCESS:
        return { loading: false, data: action.payload };
      case REVIEW_SAVEDATA_FAILS:
        return { loading: false, data: action.payload };
      default:
        return state;
    }
  };

const initialState = {
  loading: false,
  review: [],
  error: null,
  owner:{},
};

export const reviewOwnerdataReducer = (state = initialState, action) => {
  switch (action.type) {
    case REVIEW_OWNERDATA_REQUEST:
      return { ...state, loading: true, error: null };
    case REVIEW_OWNERDATA_SUCCESS:
      return { loading: false, review: action.payload, error: null };
    case REVIEW_OWNERDATA_FAILS:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
const initialState1 = {
  review: [],
  error: null,
  loading: false,
};

export const reviewuserdataReducer = (state = initialState1, action) => {
  switch (action.type) {
    case REVIEW_USERDATA_REQUEST:
      return { ...state, loading: true };
    case REVIEW_USERDATA_SUCCESS:
      return { ...state, loading: false, review: action.payload };
    case REVIEW_USERDATA_FAILS:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

