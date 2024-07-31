import React from "react";
const HotelContext=React.createContext({
    Hotels:[],
    AllHotels:[],
    MenuList:[],
    CategoryList:[],
    AddHotels:()=>{}
})
export default HotelContext;