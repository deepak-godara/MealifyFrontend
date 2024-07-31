import React from 'react';
import './deliverycollection.css';
import Slider from 'react-slick';
import Deliveryitem from './deliveryitem/index';
import Nextarrow from '../../common/carousel/nextarrow';
import Prearrow from '../../common/carousel/prevarrow';
const settings = {
    infinite: false,
    slidesToShow: 6,
    slidesToScroll: 1,
    nextArrow: <Nextarrow/>,
    prevArrow: <Prearrow/>
  };


const Deliverystuff=[
    {
        id:1,
        title:"Pizza",
        src:"https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png"
    },
    {
        id:2,
        title:"Burger",
        src:"https://b.zmtcdn.com/data/dish_images/ccb7dc2ba2b054419f805da7f05704471634886169.png"
    },
    {
        id:3,
        title:"Cake",
        src:"https://b.zmtcdn.com/data/dish_images/d5ab931c8c239271de45e1c159af94311634805744.png"
    },
    {
        id:4,
        title:"Biryani",
        src:"https://b.zmtcdn.com/data/dish_images/d19a31d42d5913ff129cafd7cec772f81639737697.png"
    },
    {
        id:5,
        title:"Chicken",
        src:"https://b.zmtcdn.com/data/dish_images/197987b7ebcd1ee08f8c25ea4e77e20f1634731334.png"
    },
    {
        id:6,
        title:"Rolls",
        src:"https://b.zmtcdn.com/data/dish_images/c2f22c42f7ba90d81440a88449f4e5891634806087.png"
    },
    {
        id:7,
        title:"Pnaeer",
        src:"https://b.zmtcdn.com/data/dish_images/e44c42ff4b60b025225c8691ef9735b11635781903.png"
    },
    // {
    //     id:8,
    //     title:"North Indian",
    //     src:"https://b.zmtcdn.com/data/o2_assets/019409fe8f838312214d9211be010ef31678798444.jpeg"
    // },
    // {
    //     id:9,
    //     title:"Thali",
    //     src:"https://b.zmtcdn.com/data/o2_assets/52eb9796bb9bcf0eba64c643349e97211634401116.png"
    // },
    // {
    //     id:10,
    //     title:"moms",
    //     src:"https://b.zmtcdn.com/data/o2_assets/5dbdb72a48cf3192830232f6853735301632716604.png"
    // },
    // {
    //     id:11,
    //     title:"Fried Rice",
    //     src:"https://b.zmtcdn.com/data/o2_assets/e444ade83eb22360b6ca79e6e777955f1632716661.png"
    // },
    // {
    //     id:12,
    //     title:"Chewmein",
    //     src:"https://b.zmtcdn.com/data/o2_assets/c21624eac87ed1c8c87ef1ea52980ded1632716659.png"
    // }
];

const Deliverycollection = () => {
  return (
    <div className='deliverycollection'> 
      <div className='' style={{width:"100%",overflow:"hidden"}}>
        <div  className='collection-title'>Inspiration for your first order</div>
        {/* <Slider {...settings}> */}
        <div className='max-width'>
         {Deliverystuff.map((item) =>{
            return <Deliveryitem item= {item} className="item"/>
         })}
         </div>
      </div>
    </div>
  )
}

export default Deliverycollection