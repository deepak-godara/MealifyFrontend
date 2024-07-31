import { Ports } from "./Url";
export const UploadPersonalImage= async({Image,ClientId})=>{
    console.log('yes');
const Data=await  fetch(`${Ports}/${ClientId}/foreimage`,{
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