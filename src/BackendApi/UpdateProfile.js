import { Ports } from "./Url";
export const UpdateProfile=async({Profile,ClientId})=>{
    console.log(Profile);
    const Data= await fetch(`${Ports}/${ClientId}/updateprofile`, {
        method: "POST",
        body:JSON.stringify({
            Data:Profile,  
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