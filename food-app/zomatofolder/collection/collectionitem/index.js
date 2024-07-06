import React from 'react'
import './collectionitem.css'
const Collectionitem = ({item}) => {
  return (
    <div className='collectionitem-cover'>
            <img src={item.cover} alt={item.title1} className='collection-image' />
            <div className='title1'>{item.title1}</div>
            <div className='title2'>{item.title2}<i class="material-symbols-outlined arrow">arrow_right</i></div>
        
    </div>
  )
}

export default Collectionitem