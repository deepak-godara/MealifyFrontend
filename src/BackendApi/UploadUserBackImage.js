import { Ports } from "./Url";
export const UploadBackImage= async({Image,ClientId})=>{
    console.log("sv")
    const Data=await  fetch(`${Ports}/${ClientId}/backimage`,{
        method:"POST",
        body:JSON.stringify({
            Image:Image
        }),
        headers: { "Content-type": "application/json" },
    });
    if(Data.status==='200')
    {
      return true;
    }
    else{
      return false;
    }
    }