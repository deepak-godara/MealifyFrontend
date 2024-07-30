import './collection.css'
import  Collectionitem from './collectionitem'
import React, { useRef } from 'react';
const Collection = ({data, collectionname, location, maintitle}) => {
  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -scrollContainerRef.current.offsetWidth / 3,
        behavior: 'smooth',
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: scrollContainerRef.current.offsetWidth / 3,
        behavior: 'smooth',
      });
    }
  };
  return (
    <div className='Component'>
      <div className='item'>
        <div className='collection-title'>{maintitle}</div>
        <div className='collection-header'>
          <div className='header-left'>{collectionname}</div>
          {/* <div className='header-right'>{location}<i class="material-symbols-outlined arrow">arrow_right</i></div> */}
        </div>
      </div>
      <div className='max-width'>
      <div className='scroll-container'>
        {data.map((item, index) => (
          <Collectionitem key={index} item={item} className='collection-item'/>
        ))}
      </div>
    </div>
    </div>
  )
}

export default Collection