import { ADDRESS_FAIL,ADDRESS_REQUEST,ADDRESS_SUCCESS , ADDRESS_DELETE } from "../constants/addressConstants";
export const AddressReducer = (state = {address:[]}, action) => {
    switch (action.type) {
      case ADDRESS_REQUEST:
        return { loading: true , address:[] };
      case ADDRESS_SUCCESS:
        return { loading: false, address: action.payload };
        // console.log(`the address data is : ${action.payload}`)
      case ADDRESS_FAIL:
        return { loading: false, error: action.payload };
      case ADDRESS_DELETE:
        return {loading: false , address:action.payload}
      default:
        return state;
    }
  };

