import React, { useState, useEffect, useReducer, useContext } from "react";
import { useParams } from "react-router-dom";
import Loader from "react-js-loader";
import OwnerContext from "../../../store/AuthOwner";
import HotelInfoDisplay from "./HotelInfoDisplay";
import FoodDisplayCategories from "./FoodDisplayCategories";
import CategoryData from "./CategoryData";
import "./ViewHotelDetails.css";
import { Ports } from "../../../BackendApi/Url";
import UseScrollToTop from "../../UI/UseScroll";
const intialState = {
  id : null,
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
  else if (action.type === 'id') Data.id = action.val;
  else Data.image = action.val;
  return Data;
};
export function ViewHotelDetails(props) {
  const [HotelData, SetHotelData] = useReducer(
    HotelDataReducerFunc,
    intialState
  );
  UseScrollToTop();
  const [HotelMenu, SetHotelMenu] = useState([]);
  const params = useParams();
  const [loading, SetLoading] = useState(true);
  const [hotelid, SetHotelId] = useState(null);
  const owner = useContext(OwnerContext);
  if (hotelid !== params.hotelid) SetHotelId(params.hotelid);
  useEffect(() => {
    async function getDetails() {
      let Data;
      if (owner.isAuth) {
        Data = await fetch(
          `${Ports}/${owner.OwnerHotelId}/getdata`,
          {
            method: "GET",
          }
        );
      } else {
        Data = await fetch(`${Ports}/${params.hotelid}/getdata`, {
          method: "GET",
        });
      }
      const js = await Data.json();
      if (js.status === "200") {
        SetHotelData({ type: "AddName", val: js.hotel.Name });
        SetHotelData({ type: "Categories", val: js.hotel.Category });
        SetHotelData({ type: "id", val: js.hotel._id });
        SetHotelData({
          type: "AddAddress",
          val: js.hotel.City + " , " + js.hotel.Street,
        });
        SetHotelData({ type: "Ad", val: js.hotel.Image });
        SetHotelData({ type: "Rating", val: js.hotel.Rating.$numberDecimal });
        SetHotelData({ type: "Count", val: js.hotel.Count });
        if (js.Menu === null) SetHotelMenu([]);
        else SetHotelMenu(js.Menu.Menu);
      }
      SetLoading(false);
    }
    getDetails();
  }, [params.hotelid]);
  return (
    <>
      <div className="View-Hotel-Data-Display">
        {loading && (
          <div className="Spinner-Class3" style={{marginTop:"10rem",height:"5rem",width:"4rem"}}>
            {" "}
            <Loader
              type="spinner-cub"
              color="red"
              // style={{ position:"absolute", top:"2.9rem"}}

              // top="2.9rem"
              bgColor="rgb(77, 89, 102)"
              // title={"spinner-cub"}
              size={90}
            ></Loader>
          </div>
        )}
        {!loading && (
          <>
            <HotelInfoDisplay HotelData={HotelData} HotelMenu ={HotelMenu} ></HotelInfoDisplay>
            {/* <HotelDisplayHeader/> */}
            {owner.isAuth && 
                 <div className="View-Hotel-Data-Category">
                 {!owner.isAuth&&<CategoryData menu={HotelMenu}></CategoryData>}
                 <FoodDisplayCategories
                   menu={HotelMenu}
                   Name={HotelData.name}
                 ></FoodDisplayCategories>
               </div>
}
          </>
        )}
      </div>
    </>
  );
}

export default ViewHotelDetails;
