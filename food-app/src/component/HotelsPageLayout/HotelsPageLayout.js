import React, { useEffect, useState, useContext } from "react";
import { useParams, useLocation } from "react-router-dom";
import HotelContext from "../../store/HotelsContext";
import "./HotelsPageLayout.css";
import HotelsPageMapping from "./HotelsPageMapping";
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
  if (Category !== Categorys) SetCategorys(Category);
  if (paramsLocation !== Params.locationid)
    SetParamsLocation(Params.locationid);
  const locationName = parts[0].trim();
  const [LocationName, SetLocationName] = useState("");
  if (LocationName !== locationName) SetLocationName(locationName);
  useEffect(() => {
    async function getHotels() {
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
          hotelCtx.AddHotels({
            AllHotels: Js.AllData,
            MenuList: Js.MenuItem,
            CategoryList: Js.CategoryItem,
          });
        }
      }
    }
    if( Params.locationid)
    {getHotels();
    }
  }, [paramsLocation, Dishs, Categorys]);
  return (
    <>
      <div className="Hotel-City-Location">
        Best Restaurants in {hotelCtx.Location}{" "}
      </div>
      {hotelCtx.Hotels.length > 0 && <HotelsPageMapping></HotelsPageMapping>}
    </>
  );
}

export default HotelsPageLayout;
