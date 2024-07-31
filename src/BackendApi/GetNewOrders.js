import { Ports } from "./Url";
export const getNewOrder=async (HotelID)=>{
    const Data=await fetch(`${Ports}/${HotelID}/getneworder`,{
        method:"GET"
    })
    const js=await Data.json();
    return js;
}