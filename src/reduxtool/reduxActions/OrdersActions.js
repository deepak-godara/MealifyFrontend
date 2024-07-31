import axios from "axios";
import { Ports } from "../../BackendApi/Url";
import { ACTIVE_ORDER_FAIL, ACTIVE_ORDER_REQUEST, ACTIVE_ORDER_SUCCESS } from "../constants/OrderConstants";
import { STATUS_UPDATE_FAIL,STATUS_UPDATE_REQUEST,STATUS_UPDATE_SUCCESS } from "../constants/OrderConstants";
export const GetActiveOrders = () => async (dispatch) => {
    try {
        dispatch({type: ACTIVE_ORDER_REQUEST });

        const { data } = await axios.get(`${Ports}/owner/ActiveOrders`);
            console.log("active order from  order action side  is : " , data)
        dispatch({ type: ACTIVE_ORDER_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: ACTIVE_ORDER_FAIL, payload: error });
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





