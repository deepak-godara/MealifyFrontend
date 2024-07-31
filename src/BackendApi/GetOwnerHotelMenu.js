import { Ports } from "./Url";
export const GetOwnerHotelMenu=async(hotelId)=>{
    const Data=await fetch(`${Ports}/${hotelId}/getmenu`,{
        method:"GET"
    })
 const js=await Data.json();
   return js;
}