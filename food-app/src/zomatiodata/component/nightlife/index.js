import React from 'react'
import  './nightlife.css'
import Collection from '../common/collection'
import Nextarrow from '../common/carousel/nextarrow';
import Prearrow from '../common/carousel/prevarrow';
import Filters from "../common/filters/index"
import {Restaurants} from "../../data/restaurants";
import Explore from '../common/explore'
const restaurantList= Restaurants;
const collectionitem=[
  {
     id:1,
     cover:"https://b.zmtcdn.com/data/collections/4a8fc66cfe2a43c7538d5716895a3019_1684739753.png",
     title1:'6 Taj view Restaurent',
     title2:"5 Places"
  },
  {
     id:2,
     cover:"https://b.zmtcdn.com/data/collections/c3e8fb46e352ebb9d72c4f0cb5d27f39_1686042567.png",
     title1:'15 Local favourite Places',
     title2:"14 Places"
  },
  {
     id:3,
     cover:"https://b.zmtcdn.com/data/collections/a1e31eb92bb9951aaf1750d88497adb4_1684740352.jpg",
     title1:'18 Best Luxary dining Places',
     title2:"18 Places"
  },
  {
     id:4,
     cover:"https://b.zmtcdn.com/data/collections/a33a75bb9ce00650cde613173fe9d2ee_1684740006.png",
     title1:'6 best Mughlai Places',
     title2:"10 Places"
  },
  {
     id:5,
     cover:"https://b.zmtcdn.com/data/collections/91657c6e0f9452b3d54b4658e7bc90b9_1684741472.jpg",
     title1:'12 Blisshful Breakfast Places ',
     title2:"13 Places"
  },
  // {
  //    id:6,
  //    cover:"https://b.zmtcdn.com/data/collections/293255cbfe49f4ebdb244c1bfc3a0f74_1684741669.jpg",
  //    title1:'13 serene rooftop Places ',
  //    title2:"14 Places"
  // },
  // {
  //    id:7,
  //    cover:"https://b.zmtcdn.com/data/collections/61d06b1dc0a478a6216bcf07ff8b2d67_1684741886.jpg",
  //    title1:'19 Great Cafes',
  //    title2:"19 Places"
  // },
  // {
  //    id:8,
  //    cover:"https://b.zmtcdn.com/data/collections/21ebc8e2867c6917de5b0eb1aae8174e_1684741284.jpg",
  //    title1:'13 Bear Bars & Pubs',
  //    title2:"14 Places"
  // },
];
const deliveryfilters=[
  {
    id:1,
    icon:"",
    title:"Filters",
  },
  {
    id:6,
    icon:"",
    title:"Gold",
  },
  {
    id:2,
    title:"Rating: 4.0+",
  },
  {
    id:9,
    title:"Pubs & Bars",
  }
]
const Nightlife = () => {
  return (
    <div>  
      <Collection data={collectionitem} collectionname="Explore curated lists of top restaurants, cafes, pubs, and bars in Agra, based on trends" location="All Collection in Agara" maintitle="Collections"/>
      <div className="max-width">
      <Filters filtelists={deliveryfilters}/>
    </div>
     
    {/* <div>
      <Explore list= {restaurantList} collectionname='Nightlife Restaurants in Agra'/>
    </div> */}
    </div>
  )
}

export default Nightlife;