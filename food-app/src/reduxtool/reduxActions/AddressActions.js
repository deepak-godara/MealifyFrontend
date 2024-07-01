import axios from "axios";
import { ADDRESS_DELETE, ADDRESS_FAIL,ADDRESS_REQUEST,ADDRESS_SUCCESS } from "../constants/addressConstants";
export const AddressList = ({Cid}) => async(dispatch) =>{
  try{
    dispatch({type : ADDRESS_REQUEST});
    const {data} = await axios.get(`http://localhost:4000/${Cid}/address`)
    console.log(`address id  from action side is : ${data[1]._id}`);
    dispatch({type : ADDRESS_SUCCESS , payload : data})
  }catch(error){
        dispatch({type:ADDRESS_FAIL , payload:error});
  }
}
export const DeleteAddress = ({ Cid, addressData , Type }) => async (dispatch) => {
  try {
      // console.log(`address id and user id from   delete action side is :${addressData.Address}, ${Cid} `)
      console.log("address id and user id from   delete action side is : " , addressData);
      // const  formataddress =  encodeURIComponent(JSON.stringify(addressData));
      const {data} = await axios.get(`http://localhost:4000/${Cid}/address/delete` , { params:{addressData ,Type}});
      console.log(`addresses id after deletion : ${data}`)
      console.log("Address deleted");
      dispatch({ type: ADDRESS_DELETE, payload:data });
  } catch (error) {
      console.error("Error deleting address:", error);
  }
}

