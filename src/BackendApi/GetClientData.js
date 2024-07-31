import { Ports } from "./Url";
export const GetClientData=async (ClientId)=>{
    const Data=await fetch(`${Ports}/${ClientId}/getd`,{
        method:"GET",
    })
    const js= await Data.json();
    if(js.status==="200")
    {
        
    }
}