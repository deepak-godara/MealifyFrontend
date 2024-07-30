import React from 'react'
import './explore.css'
import ExploreGrid from './exploregrid'
const Explore = ({list , collectionname}) => {
  return (
    <div className='max-width explore-section'>
        <div className='collection-title'>{collectionname}</div>
        <div className='collection-gird' >
            {list.map((restaurent)=>{
                return (
                    <ExploreGrid restaurent={restaurent}/>
                )
            })}
        </div>
    </div>
  )
}

export default Explore