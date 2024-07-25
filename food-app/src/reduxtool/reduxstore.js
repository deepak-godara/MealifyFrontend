import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import { AddressReducer } from "./reduxreducers/addressReducer";
import { ActiveOrderReducer, statusUpdateReducer } from "./reduxreducers/OrderReducers";

const initialState ={};
const reducers = combineReducers({
    Addressdata : AddressReducer,
    ActiveOrderdata:ActiveOrderReducer,
    StatusUpdate:statusUpdateReducer,
    // revieSave:reviewReducers
});

const middleware = [thunk];

// Create the Redux store with initial state
const store = createStore( 
    reducers, 
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;