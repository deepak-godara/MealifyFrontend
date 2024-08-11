import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import { AddressReducer } from "./reduxreducers/addressReducer";
import { DeliveryconfirmationReducer, OwnerActiveOrderReducer, statusUpdateReducer , UserActiveOrderReducer } from "./reduxreducers/OrderReducers";
import { reviewOwnerdataReducer, reviewSaveReducer, reviewuserdataReducer } from "./reduxreducers/reviewReducers";

const initialState ={};
const reducers = combineReducers({
    Addressdata : AddressReducer,
    OwnerOrderdata:OwnerActiveOrderReducer,
    StatusUpdate:statusUpdateReducer,
    ReviewSaveReduce:reviewSaveReducer,
    UserOrdersdata :UserActiveOrderReducer,
    ReviewOwner:reviewOwnerdataReducer,
    ReviewUser:reviewuserdataReducer,
    DeliveryConfirmation :DeliveryconfirmationReducer,

});

const middleware = [thunk];

// Create the Redux store with initial state
const store = createStore( 
    reducers, 
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;