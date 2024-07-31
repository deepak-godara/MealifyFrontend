
import { Ports } from "./Url";
export const AddAddress = async ({ Address, ClientId }) => {
  const Data = await fetch(`${Ports}/${ClientId}/addaddress`, {
    method: "POST",
    body: JSON.stringify({
      Address: Address,
    }),
    headers: { "Content-type": "application/json" },
  });
  if (Data.status === 200) {
    const Address=await Data.json()
    return { status:true,Address:Address.Address};
  } else {
    return {status:false};
  }
};
export const SetDefaultAddress=async(Cid,Aid)=>{
  const Data=await fetch(`${Ports}/${Cid}/updatecurrentaddress`,{
    method:"POST",
    body:JSON.stringify({
      Aid:Aid
    }),
    headers: { "Content-type": "application/json" },
  })
  if(Data.status===200)
  {
    const data= await Data.json()
    return {status:true,Caddress:data.Address};
  }
  else
  return {status:false}

}