import { Ports } from "./Url";
export const GetOrderDetails=async(OrderId)=>{
    console.log(OrderId)
    const Data=await fetch(`${Ports}/${OrderId}/getorderdetails`,{
        method:"GET"
    })
    const js= await Data.json();
    if(js.status==='200'){
        
        console.log(js)
        return {status:"success",order:js.order}
    }
    else
    {
        return {status:"fail"}
    }

}