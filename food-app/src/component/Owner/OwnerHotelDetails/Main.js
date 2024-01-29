import React, { useEffect, useContext, useState } from "react";
import OwnerContext from "../../../store/AuthOwner";
import { GetOwnerHotelMenu } from "../../../BackendApi/GetOwnerHotelMenu";
import "./Main.css"
import FoodDisplayCategories from "../HotelDetails/FoodDisplayCategories";
function OwnerMenu() {
  const OwnerCtx = useContext(OwnerContext);
  const [MenuData, SetMenuData] = useState([]);
  const [Error, SetError] = useState(false);
  async function GetData() {
    const Data = await GetOwnerHotelMenu(OwnerCtx.OwnerHotelId);
    if (Data.status !== "200") {
      SetError(true);
    } else {
        console.log(Data.Menu.Menu);
      SetMenuData(Data.Menu.Menu);
    }
  }
  const AddItem=(item,category)=>{
     SetMenuData((prevData)=>{
        const Data=[...prevData];
        const index=Data.findIndex((item)=>item.Name===category);
        if(index!==-1)
        {
            Data[index].items.push(item);
        }
        return Data;
     })
  }
  useEffect(() => {
    console.log("getting menu")
    GetData();
  },[]);
  return (
  <div className="Owner-Hotel-Menu">
    <div className="Owner-Menu"> Your Menu</div>
  <FoodDisplayCategories menu={MenuData} AddItem={AddItem}></FoodDisplayCategories>
  </div>
  )
}

export default OwnerMenu;
