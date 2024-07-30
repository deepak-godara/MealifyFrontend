import React from 'react'
import './topbrands.css'
import Brands from './brands';
import Nextarrow from '../../common/carousel/nextarrow';
import Prearrow from '../../common/carousel/prevarrow';
import Slider from 'react-slick';
const settings = {
    infinite: false,
    slidesToShow: 6,
    slidesToScroll: 1,
    nextArrow: <Nextarrow/>,
    prevArrow: <Prearrow/>
  };

const topbrandslist=[
  {
    id:1,
    title:"McDonald's",
    cover:"https://b.zmtcdn.com/data/brand_creatives/logos/775f928725d1a9dd80422632de22c224_1611376239.png?output-format=webp"
    ,time:"28 min"
  },
  {
    id:2,
    title:"La Pino'z Pizza",
    
    cover:"https://b.zmtcdn.com/data/brand_creatives/logos/3bd971b1a5783e208a9782c3604fa9f3_1601885754.png?output-format=webp"
    ,time:"28 min"
  },
  {
    id:3,
    title:"Bikanervala",
    cover:"https://b.zmtcdn.com/data/brand_creatives/logos/4d016eeff686a88becd56bba073f18cd_1605111085.png?output-format=webp"
    ,time:"28 min"
  },
  {
    id:4,
    title:"Mama Chicken Mama Franky House",
    cover:"https://b.zmtcdn.com/data/brand_creatives/logos/d26cedd52fc09c7a72174a36340a4a6e_1573638778.png?output-format=webp"
    ,time:"28 min"
  },
  {
    id:5,
    title:"Pizza Hut",
    cover:"https://b.zmtcdn.com/data/brand_creatives/logos/c38f7540bcc5a38e918856ac06409056_1504531339.png?output-format=webp"
    ,time:"28 min"
  },
  {
    id:6,
    title:"Brijbhog Mishthan Bhandar - Brij Rasayanam",
    cover:"https://b.zmtcdn.com/data/brand_creatives/logos/d9218c866ad4910c515b30e1294638fd_1686544142.png?output-format=webp"
    ,time:"28 min"
  },
  {
    id:7,
    title:"Kwality Wall’s Frozen Dessert And Ice Cream Shop",
    cover:"https://b.zmtcdn.com/data/brand_creatives/logos/0619ae0b489d44dd3562538f7768e48a_1658818124.png?output-format=webp"
    ,time:"28 min"
  },
  {
    id:8,
    title:"Gopaldas Pethe Wale",
    cover:"https://b.zmtcdn.com/data/brand_creatives/logos/7d607a40589cca86b4db13542b82a319_1605092761.png?output-format=webp"
    ,time:"28 min"
  }

]

const Topbrands = () => {
  return (
    <div className='deliverycollection'> 
      <div className='max-width'>
        <div  className='collection-title'>Inspiration for your first order</div>
        {/* <Slider {...settings}> */}
         {topbrandslist.map((brands) =>{
            return <Brands brands= {brands}/>
         })}
        {/* </Slider> */}
      </div>
    </div>
  )
}

export default Topbrands