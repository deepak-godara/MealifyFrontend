import axios from "axios";
import { ACTIVE_ORDER_FAIL, ACTIVE_ORDER_REQUEST, ACTIVE_ORDER_SUCCESS } from "../constants/OrderConstants";
import { STATUS_UPDATE_FAIL,STATUS_UPDATE_REQUEST,STATUS_UPDATE_SUCCESS } from "../constants/OrderConstants";
export const GetActiveOrders = () => async (dispatch) => {
    try {
        dispatch({ type: ACTIVE_ORDER_REQUEST });

        const { data } = await axios.get('http://localhost:4000/owner/ActiveOrders');
            console.log("active order from  order action side  is : " , data)
        dispatch({ type: ACTIVE_ORDER_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: ACTIVE_ORDER_FAIL, payload: error });
    }
};



export const saveOrderStatus  = ({orderId, status})=> async(dispatch)=>{
    try {
        const {data} = await axios.post('http://localhost:4000/owner/ActiveOrders/statusUpdate' , {orderId : orderId , status: status});
        console.log("order status changed from backend size : ");
        dispatch({type:STATUS_UPDATE_SUCCESS  , payload: data});
        console.log("order status changed from backend size : ");
    } catch (error) {
        console.log("error in changing status  (orderaction.js")
    }
}

