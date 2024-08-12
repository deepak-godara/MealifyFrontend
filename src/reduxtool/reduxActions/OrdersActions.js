import axios from "axios";
import { Ports } from "../../BackendApi/Url";
import { OWNER_ACTIVE_ORDER_FAIL, OWNER_ACTIVE_ORDER_REQUEST, OWNER_ACTIVE_ORDER_SUCCESS } from "../constants/OrderConstants";
import { USER_ACTIVE_ORDER_FAIL ,USER_ACTIVE_ORDER_REQUEST, USER_ACTIVE_ORDER_SUCCESS } from "../constants/OrderConstants";

export const GetOwnerActiveOrders = ({id}) => async (dispatch) => {
    console.log("ownerid from actin sideis : " , id)
    try {
        dispatch({type: OWNER_ACTIVE_ORDER_REQUEST });
        const { data } = await axios.get(`${Ports}/Owner/${id}/ActiveOrders`);
            console.log("active order from  order action side  is : " , data)
        dispatch({ type: OWNER_ACTIVE_ORDER_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: OWNER_ACTIVE_ORDER_FAIL, payload: error });
    }
};
export const GetUserActiveOrders = ({id}) => async (dispatch) => {
    console.log("userid from actin sideis : " , id)
    try {
        dispatch({type: USER_ACTIVE_ORDER_REQUEST });
        const { data } = await axios.get(`${Ports}/User/${id}/ActiveOrders`);
            console.log("active order from  order action side  is : " , data)
        dispatch({ type: USER_ACTIVE_ORDER_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: USER_ACTIVE_ORDER_FAIL, payload: error });
        console.log("active error  is " , error)
    }
};


export const saveOrderStatus = ({ orderId, status }) => async (dispatch) => {
    try {
        const { data } = await axios.put(`${Ports}/owner/ActiveOrders/statusUpdate`, { orderId, status });
        console.log("Order status changed from backend side");
        dispatch({ type: 'STATUS_UPDATE_SUCCESS', payload: data.order }); // Ensure payload contains the updated order
    } catch (error) {
        console.log("Error in changing status (orderAction.js)", error);
        dispatch({ type: 'STATUS_UPDATE_FAIL', payload: error.message });
    }
};





