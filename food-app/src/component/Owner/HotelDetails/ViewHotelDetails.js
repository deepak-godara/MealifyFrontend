import React, { useState, useEffect, useReducer } from "react";
import { useParams } from "react-router-dom";
import HotelInfoDisplay from "./HotelInfoDisplay";
import FoodDisplayCategories from "./FoodDisplayCategories";
import CategoryData from "./CategoryData";
import "./ViewHotelDetails.css";
const intialState = {
  name: "",
  Categories: [],
  address: "",
  image: "",
  Rating: 0.0,
  Count: 0,
};
const HotelDataReducerFunc = (state = intialState, action) => {
  const Data = { ...state };
  if (action.type === "AddName") {
    Data.name = action.val;
  } else if (action.type === "Categories") {
    Data.Categories = action.val;
  } else if (action.type === "AddAddress") Data.address = action.val;
  else if (action.type === "Rating") Data.Rating = action.val;
  else if (action.type === "Count") Data.Count = action.val;
  else Data.image = action.val;
  return Data;
};
function ViewHotelDetails(props) {
  const [HotelData, SetHotelData] = useReducer(
    HotelDataReducerFunc,
    intialState
  );
  const [HotelMenu, SetHotelMenu] = useState([]);
  const params = useParams();
  const [hotelid, SetHotelId] = useState(null);
  if (hotelid !== params.hotelid) SetHotelId(params.hotelid);
  useEffect(() => {
    async function getDetails() {
      const Data = await fetch(
        `http://localhost:4000/${params.hotelid}/getdata`,
        {
          method: "GET",
        }
      );
      const js = await Data.json();
      if (js.status === "200") {
        console.log(js.Menu);
        SetHotelData({ type: "AddName", val: js.hotel.Name });
        SetHotelData({ type: "Categories", val: js.hotel.Category });
        SetHotelData({
          type: "AddAddress",
          val: js.hotel.City + " , " + js.hotel.Street,
        });
        SetHotelData({ type: "Ad", val: js.hotel.Image });
        SetHotelData({ type: "Rating", val: js.hotel.Rating.$numberDecimal });
        SetHotelData({ type: "Count", val: js.hotel.Count });
        SetHotelMenu(js.Menu.Menu);
      }
    }
    getDetails();
  }, [params.hotelid]);
  return (
    <>
      <div className="View-Hotel-Data-Display">
        <HotelInfoDisplay HotelData={HotelData}></HotelInfoDisplay>

        <div className="View-Hotel-Data-Category">
          <CategoryData menu={HotelMenu}></CategoryData>

          <FoodDisplayCategories
            menu={HotelMenu}
            Name={HotelData.name}
          ></FoodDisplayCategories>
        </div>
      </div>
    </>
  );
}

export default ViewHotelDetails;
