import React, { useEffect, useState, useContext } from "react";
import Loader from "react-js-loader";
import { useParams, useLocation } from "react-router-dom";
import HotelContext from "../../store/HotelsContext";
import "./HotelsPageLayout.css";
import HotelsPageMapping from "./HotelsPageMapping";
export async function getUpdatedHotels(type ){

}
function HotelsPageLayout() {
  const Params = useParams();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const Dish = queryParams.get("Dish");
  const Category = queryParams.get("Category");
  const hotelCtx = useContext(HotelContext);
  const decodedString = decodeURIComponent(Params.locationid);
  const parts = decodedString.split(",");
  const [paramsLocation, SetParamsLocation] = useState("");
  const [Dishs, SetDish] = useState("");
  const [Categorys, SetCategorys] = useState("");
  if (Dishs !== Dish) SetDish(Dish);
  const [Loading,SetLoading]=useState(true);
  if (Category !== Categorys) SetCategorys(Category);
  if (paramsLocation !== Params.locationid)
    SetParamsLocation(Params.locationid);
  const locationName = parts[0].trim();
  const [LocationName, SetLocationName] = useState("");
  if (LocationName !== locationName) SetLocationName(locationName);
  useEffect(() => {
      async function getHotels() {
        SetLoading(true);
        hotelCtx.AddHotels({location:locationName});
      let url = `http://localhost:4000/gethotels/${Params.locationid}`;
      if (Dishs)
        url = `http://localhost:4000/gethotels/${Params.locationid}?Dish=${Dish}`;
      if (Categorys)
        url = `http://localhost:4000/gethotels/${Params.locationid}?Category=${Category}`;
      const data = await fetch(url, {
        method: "POST",
        body: JSON.stringify({
          HotelData: hotelCtx.AllHotels,
          MenuItem: hotelCtx.MenuList,
          CategoryItem: hotelCtx.CategoryList,
        }),
        headers: { "Content-type": "application/json" },
      });
      const js = await data.json();
      if (js.status === "200") {
        if (js.HotelData.length > 0) {
          console.log(js);
          hotelCtx.AddHotels({ Hotels: js.HotelData, location: locationName });
        } else {
          hotelCtx.AddHotels({ Hotels: js.HotelData, location: locationName });
        }
        if (!hotelCtx.MenuList || !hotelCtx.CategoryList) {
          const datas = await fetch(
            `http://localhost:4000/gethotel/getdishes`,
            {
              method: "POST",
              body: JSON.stringify({
                HotelData: js.HotelData,
              }),
              headers: { "Content-type": "application/json" },
            }
          );
          const Js = await datas.json();
          console.log(Js)
          hotelCtx.AddHotels({
            AllHotels: Js.AllData,
            MenuList: Js.MenuItem,
            CategoryList: Js.CategoryItem,
          });
        }
      }
      SetLoading(false);
    }
    if( Params.locationid)
    {getHotels();
    }
  }, [paramsLocation,Params.locationid,Dishs,Categorys]);
  return (
    <>
      <div className="Hotel-City-Location">
        Best Restaurants in {hotelCtx.Location}{" "}
      </div>
      {!Loading&&<>
      {hotelCtx.Hotels.length > 0 && <HotelsPageMapping></HotelsPageMapping>}
      {hotelCtx.Hotels.length===0&&<div className="No-Hotels">No hotels to display</div>}</>}
      {Loading&&<div className="Spinner-Class"><Loader
                type="spinner-cub"
                color="red"
                // style={{ position:"absolute", top:"2.9rem"}}
               
                // top="2.9rem"
                bgColor="red"
                // title={"spinner-cub"}
                size={50}
              ></Loader></div>}
    </>
  );
}

export default HotelsPageLayout;
