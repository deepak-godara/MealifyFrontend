export const GetClientData=async (ClientId)=>{
    const Data=await fetch(`http://localhost:4000/${ClientId}/getd`,{
        method:"GET",
    })
    const js= await Data.json();
    if(js.status==="200")
    {
        
    }
}