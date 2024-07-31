import axios from "axios";
import { Ports } from "../../BackendApi/Url";
import { ADDRESS_DELETE, ADDRESS_FAIL,ADDRESS_REQUEST,ADDRESS_SUCCESS } from "../constants/addressConstants";
export const AddressList = ({Cid}) => async(dispatch) =>{
  console.log("cid from address action side is : " , Cid);
  try{
    dispatch({type : ADDRESS_REQUEST});
    const data = await axios.get(`${Ports}/${Cid}/address`)
    console.log(data);
    console.log(`address id  from action side is : ${data[1].Aid}`);
    dispatch({type : ADDRESS_SUCCESS , payload : data})
  }catch(error){
        dispatch({type:ADDRESS_FAIL , payload:error});
  }
}
export const DeleteAddress = ({ Cid, Aid }) => async (dispatch) => {
  try {
      console.log(`address id and user id from   delete action side is :${Aid}, ${Cid} `)
      // console.log("address id  from   delete action side is : " , Aid);
      // const  formataddress =  encodeURIComponent(JSON.stringify(addressData));
      const {data} = await axios.get(`${Ports}/${Cid}/${Aid}/address/delete`);
      console.log(`addresses id after deletion : ${data}`)
      console.log("Address deleted");
      dispatch({ type: ADDRESS_DELETE, payload:data });
  } catch (error) {
      console.error("Error deleting address:", error);
  }
}

