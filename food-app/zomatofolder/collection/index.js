import React from 'react'
import './collection.css'
import Slider from 'react-slick';
import  Collectionitem from './collectionitem'
import Nextarrow from '../../common/carousel/nextarrow';
import Prearrow from '../../common/carousel/prevarrow';
const settings = {
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <Nextarrow/>,
    prevArrow: <Prearrow/>
  };

const Collection = ({data, collectionname, location, maintitle}) => {
  return (
    <div className='Component'>
      <div className='max-width'>
        <div className='collection-title'>{maintitle}</div>
        <div className='collection-header'>
          <div className='header-left'>{collectionname}</div>
          <div className='header-right'>{location}<i class="material-symbols-outlined arrow">arrow_right</i></div>
        </div>

        <Slider {...settings}>
         {data.map((item) =>{
            return <Collectionitem item= {item}/>
         })}
        </Slider>
      </div>

    </div>
  )
}

export default Collection