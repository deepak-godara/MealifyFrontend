import { getLongitude } from "geolib";
import { Ports } from "./Url";
export const GetDistance = async (HotelId,Lat,Lng) => {
    try{
        console.log(HotelId,Lng,Lat)
        const params = {
            Latitude:Lat,
            Longitude: Lng,
          };
      
          const queryString = new URLSearchParams(params).toString();
    const Data = await fetch(`${Ports}/${HotelId}/getdistance?${queryString}`, {
      method: "GET",
    });
  
    
    // console.log(js)
    if (Data.status===200) {
        console.log("gfdsa")
        const js = await Data.json();
    console.log(js)
      return { status: "success", Distance: js.Distance };
    } else {
      return { status: "fail" };
    }
}
catch(err){
    return{status:"fail"};
}
  
  };