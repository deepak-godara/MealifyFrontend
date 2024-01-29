export const getNewOrder=async (HotelID)=>{
    const Data=await fetch(`http://localhost:4000/${HotelID}/getneworder`,{
        method:"GET"
    })
    const js=await Data.json();
    return js;
}