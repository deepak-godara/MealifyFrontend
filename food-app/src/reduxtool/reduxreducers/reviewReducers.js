import {
  REVIEW_SAVEDATA_SUCCESS,
  REVIEW_SAVEDATA_REQEST,
  REVIEW_SAVEDATA_FAILS,
  REVIEW_OWNERDATA_REQUEST,
  REVIEW_OWNERDATA_FAILS,
  REVIEW_OWNERDATA_SUCCESS,
  REVIEW_USERDATA_FAILS,
  REVIEW_USERDATA_REQUEST,
  REVIEW_USERDATA_SUCCESS,
} from "../constants/reviewConstants";
import {} from "../constants/reviewConstants";
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
  loading2: false,
  error: null,
  owner: {},
};

export const reviewOwnerdataReducer = (state = initialState, action) => {
  switch (action.type) {
    case REVIEW_OWNERDATA_REQUEST:
      if (action.datas === true)
        return { ...state, loading2: true, error: null };
      else return { ...state, loading: true,review:[], error: null };
    case REVIEW_OWNERDATA_SUCCESS:
      if (action.datas === true)
        return {
          loading2: false,
          review: [...state.review, ...action.payload],
          error: null,
        };
      else
        return {
          loading: false,
          review: [...state.review, ...action.payload],
          error: null,
        };
    case REVIEW_OWNERDATA_FAILS:
      if (action.data === true)
        return { loading2: false, error: action.payload };
      else return { loading: false, error: action.payload };
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
      if (action.datas ===true)
        return { ...state, loading2: true, error: null };
      else return { ...state, loading: true,review:[], error: null };
    case REVIEW_USERDATA_SUCCESS:
      if (action.datas === true)
        return {
          loading2: false,
          review: [...state.review, ...action.payload],
          error: null,
        };
      else
        return {
          loading: false,
          review: [...state.review, ...action.payload],
          error: null,
        };
    case REVIEW_USERDATA_FAILS:
      if (action.data === true)
        return { loading2: false, error: action.payload };
      else return { loading: false, error: action.payload };
    default:
      return state;
  }
};
