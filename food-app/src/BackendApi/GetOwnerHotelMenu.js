export const GetOwnerHotelMenu=async(hotelId)=>{
    const Data=await fetch(`http://localhost:4000/${hotelId}/getmenu`,{
        method:"GET"
    })
 const js=await Data.json();
   return js;
}