import React from "react";
import "./delivery.css";
import Filters from "../common/filters/index"
import Deliverycollection from './deliverycollection'
import Explore from '../common/explore'
import Topbrands from "./topbrands";
import {Restaurants} from "../../data/restaurants";
const restaurantList= Restaurants;
const deliveryfilters=[
  {
    id:1,
    icon:"",
    title:"Filters",
  },
  {
    id:2,
    title:"Rating: 4.0+",
  },
  {
    id:3,
    title:"Pure veg",
  },
  {
     id:4,
     title:"cuisines"
  }
]

const Delivery = () => {
  return (
    <> 
    <div className="max-width">
      <Filters filtelists={deliveryfilters}/>
    </div>
    <div className="">
      <Deliverycollection/>
    </div>
    {/* <div>
      <Topbrands/>
    </div> */}
    {/* <div>
      <Explore list= {restaurantList} collectionname='Best Food in Agra'/>
    </div> */}
    </>
  );
};

export default Delivery;
