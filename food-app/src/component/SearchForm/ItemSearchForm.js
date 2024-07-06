import React, { useState, useEffect, useContext } from "react";
import SearchItemsMapping from "./SearchItemsMapping";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import "./ItemSearchForm.css";
import HotelContext from "../../store/HotelsContext";
function ItemSearchForm() {
  const location = useLocation();
  const path = location.pathname;
  const Params = useParams();
  const Navigate = useNavigate();
  const [DisplayVisiblity, SetDisplayVisibility] = useState(false);
  const hotelCtx = useContext(HotelContext);
  const [SearchList, SetSearchList] = useState("");
  const [ItemList, SetItemList] = useState([]);
  const [Url, Seturl] = useState("");
  if (Url !== path) {
    Seturl(path);
  }
  // const
  useEffect(() => {
    SetSearchList("");
    // SetItemList([]);
    SetDisplayVisibility(false);
  }, [Url]);
  useEffect(() => {
    let ItemLists = [];
    SetItemList([]);
    if (SearchList !== "") {
      if (hotelCtx.AllHotels !== null)
        for (let i = 0; i < hotelCtx.AllHotels.length; i++) {
          if (
            hotelCtx.AllHotels[i].Name.toLowerCase().includes(
              SearchList.toLowerCase()
            )
          ) {
            ItemLists.push({
              Name: hotelCtx.AllHotels[i].Name,
              Id: hotelCtx.AllHotels[i]._id,
              type: "Restaurant",
            });
          }
        }
      if (hotelCtx.CategoryList !== null)
        for (let i = 0; i < hotelCtx.CategoryList.length; i++) {
          if (
            hotelCtx.CategoryList[i]
              .toLowerCase()
              .includes(SearchList.toLowerCase())
          ) {
            ItemLists.push({
              Name: hotelCtx.CategoryList[i],
              type: "Category",
            });
          }
        }
      if (hotelCtx.MenuList !== null)
        for (let i = 0; i < hotelCtx.MenuList.length; i++) {
          if (
            hotelCtx.MenuList[i]
              .toLowerCase()
              .includes(SearchList.toLowerCase())
          ) {
            ItemLists.push({ Name: hotelCtx.MenuList[i], type: "Dish" });
          }
        }
      if (ItemLists.length > 0) {
        SetItemList(ItemLists);
        SetDisplayVisibility(true);
      } else {
        SetDisplayVisibility(false);
      }
    } else {
      SetDisplayVisibility(false);
    }
  }, [
    SearchList,
    hotelCtx.MenuList,
    hotelCtx.CategoryList,
    hotelCtx.AllHotels,
  ]);
  const SetBlurofDiv = () => {
    setTimeout(() => {
      SetDisplayVisibility(false);
    }, 300);
  };
  const SubmitSearchDataFunc = async (data) => {
    SetSearchList("");
    SetDisplayVisibility(false);
    if (data.items.type === "Restaurant") {
      Navigate(`/location/${Params.locationid}/${data.items.Id}`);
    } else if (data.items.type === "Dish") {
      Navigate(`/location/${Params.locationid}?Dish=${data.items.Name}`);
    } else {
      Navigate(`/location/${Params.locationid}?Category=${data.items.Name}`);
    }
  };
  return (
    <>
      <form className="Search-Item-Form">
        <input
          className="Search-Item-Input "
          type="text"
          placeholder="Search Reastaurant,Dishes,Cusinies"
          value={SearchList}
          onChange={(event) => {
            SetSearchList(event.target.value);
          }}
          onBlur={SetBlurofDiv}
        ></input>
        {DisplayVisiblity && (
          <div className="Search-List-Display">
            {ItemList.map((item) => (
              <SearchItemsMapping
                key={item.Name + item.type}
                SearchFunc={SubmitSearchDataFunc}
                items={item}
              />
            ))}
          </div>
        )}
      </form>
    </>
  );
}

export default ItemSearchForm;
