import { ACTIVE_ORDER_REQUEST, ACTIVE_ORDER_FAIL, ACTIVE_ORDER_SUCCESS } from "../constants/OrderConstants";
import { STATUS_UPDATE_FAIL,STATUS_UPDATE_REQUEST,STATUS_UPDATE_SUCCESS } from "../constants/OrderConstants";
export const ActiveOrderReducer = (state = { Order: [] }, action) => {
    switch(action.type) { 
        case ACTIVE_ORDER_REQUEST:
            return { loading: true, Order: [] };
        case ACTIVE_ORDER_SUCCESS:
            let count=0;
            for( let  i=0;i<action.payload.length;i++)
            {
                console.log(action.payload[i].OrderStatus)
                if(action.payload[i].OrderStatus=="delivered")
                {
                    
                    count++;
                }
            }
            console.log(count)
            console.log(action.payload.length)
            return { loading: false, Order: action.payload ,Active:count===action.payload.length,Past:count===0};
        case ACTIVE_ORDER_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state; 
    }
};

export const statusUpdateReducer = (state = {order:{}}, action) => {
    switch (action.type) {
        case 'STATUS_UPDATE_SUCCESS':
            return { ...state, order: action.payload };
        case 'STATUS_UPDATE_FAIL':
            return { ...state, error: action.payload };
        default:
            return state;
    }
};