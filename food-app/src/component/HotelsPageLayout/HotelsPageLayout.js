import React, { useEffect, useState, useContext } from "react";
import Loader from "react-js-loader";
import { useParams, useLocation } from "react-router-dom";
import HotelContext from "../../store/HotelsContext";
import "./HotelsPageLayout.css";
import HotelsPageMapping from "./HotelsPageMapping";
export async function getUpdatedHotels(type) {}
function HotelsPageLayout() {
  const Params = useParams();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const Dish = queryParams.get("Dish");
  const Category = queryParams.get("Category");
  const hotelCtx = useContext(HotelContext);
  const decodedString = decodeURIComponent(Params.locationid);
  const parts = decodedString.split(",");
  const [Loading, SetLoading] = useState(true);
  const [Loading2, SetLoading2] = useState(false);
  const PageSize = 3;
  const locationName = parts[0].trim();
  const [LocationName, SetLocationName] = useState("");
  const LoadMoreFunc = async () => {
    SetLoading2(true);
    const count = hotelCtx.Hotels.length / PageSize;
    let url = `http://localhost:4000/gethotels/${Params.locationid}?PageNumber=${count}&PageSize=${PageSize}`;
    if (Dish)
      url = `http://localhost:4000/gethotels/${Params.locationid}?Dish=${Dish}&PageNumber=${count}&PageSize=${PageSize}`;
    if (Category)
      url = `http://localhost:4000/gethotels/${Params.locationid}?Category=${Category}&PageNumber=${count}&PageSize=${PageSize}`;
    const data = await fetch(url, {
      method: "POST",
      body: JSON.stringify({
        HotelData: hotelCtx.AllHotels,
      }),
      headers: { "Content-type": "application/json" },
    });
    const js = await data.json();
    if (js.status === "200") {
      if (js.HotelData.length > 0) {
        hotelCtx.AddHotels({ Hotels: js.HotelData, location: locationName });
      } else {
        hotelCtx.AddHotels({ Hotels: js.HotelData, location: locationName });
      }
    }
    SetLoading2(false);
  };
  if (LocationName !== locationName) SetLocationName(locationName);
  useEffect(() => {
    async function getHotels() {
      SetLoading(true);
      hotelCtx.AddHotels({ NoHotels: [] });
      hotelCtx.AddHotels({ location: locationName });
      let url = `http://localhost:4000/gethotels/${Params.locationid}?PageNumber=0&PageSize=${PageSize}`;
      if (Dish)
        url = `http://localhost:4000/gethotels/${Params.locationid}?Dish=${Dish}&PageNumber=0&PageSize=${PageSize}`;
      if (Category)
        url = `http://localhost:4000/gethotels/${Params.locationid}?Category=${Category}&PageNumber=0&PageSize=${PageSize}`;
      const data = await fetch(url, {
        method: "POST",
        body: JSON.stringify({
          HotelData: hotelCtx.AllHotels,
        }),
        headers: { "Content-type": "application/json" },
      });
      const js = await data.json();
      if (js.status === "200") {
        if (js.HotelData.length > 0) {
          hotelCtx.AddHotels({ Hotels: js.HotelData, location: locationName });
        } else {
          hotelCtx.AddHotels({ Hotels: js.HotelData, location: locationName });
        }
      }
      SetLoading(false);
    }
    if (Params.locationid) {
      getHotels();
    }
  }, [Params]);
  useEffect(() => {
    async function getMenus() {
      const datas = await fetch(
        `http://localhost:4000/${Params.locationid}/getdishes`,
        {
          method: "GET",
        }
      );
      const Js = await datas.json();
      hotelCtx.AddHotels({
        AllHotels: Js.AllData,
        MenuList: Js.MenuItem,
        CategoryList: Js.CategoryItem,
      });
    }
    getMenus();
  }, [Params.locationid]);
  return (
    <>
      <div className="Hotel-City-Location">
        Best Restaurants in {hotelCtx.Location}{" "}
      </div>
      {!Loading && (
        <>
          {hotelCtx.Hotels.length > 0 && (
            <HotelsPageMapping></HotelsPageMapping>
          )}
          {hotelCtx.Hotels.length === 0 && (
            <div className="No-Hotels">No hotels to display</div>
          )}
        </>
      )}
      {Loading && (
        <div className="Spinner-Class">
          <Loader
            type="spinner-cub"
            color="red"
            bgColor="rgb(77, 89, 102)"
            size={50}
          ></Loader>
        </div>
      )}
      {Loading2 ? (
        <div className="Spinner-Class">
          <Loader
            type="spinner-cub"
            color="red"
            bgColor="rgb(77, 89, 102)"
            size={50}
          ></Loader>
        </div>
      ) : (
        <div className="User-Review-Button">
          {!Loading&&hotelCtx.Hotels.length%PageSize===0&&
          <button
            className="User-Data-Button"
            onClick={() => {
              LoadMoreFunc();
            }}
          >
            Get More Hotels
          </button>
}
        </div>
      )}
    </>
  );
}

export default HotelsPageLayout;
