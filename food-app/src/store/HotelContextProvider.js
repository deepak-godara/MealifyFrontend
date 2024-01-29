import React, { useState } from 'react'
import HotelContext from './HotelsContext';
function HotelContextProvider(props) {
    const [Hotels, SetHotels] = useState([]);
    const [Location, SetLocation] = useState(null);
    const [AllHotels, SetAllLocations] = useState(null);
    const [MenuList, SetMenuList] = useState(null);
    const [CategoryList, SetCategoryList] = useState(null);
    const AddHotels = (data) => {
        if (data.Hotels) {
            SetHotels(data.Hotels)
        }
        if (data.location) {
            SetLocation(data.location)
        }
        if (data.AllHotels) {
            SetAllLocations(data.AllHotels);
            // console.log(data.AllHotels)
        }
        if (data.MenuList) {
            SetMenuList(data.MenuList);
        }
        if (data.CategoryList) {
            SetCategoryList(data.CategoryList)
        }
    }
    const HotelContexst = {
        Hotels: Hotels,
        AllHotels: AllHotels,
        MenuList: MenuList,
        CategoryList: CategoryList,
        AddHotels: AddHotels,
        Location: Location
    }
    return (
        <HotelContext.Provider value={HotelContexst}> {props.children}</HotelContext.Provider>
    )
}

export default HotelContextProvider