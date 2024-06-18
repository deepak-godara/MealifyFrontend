import React from 'react'
import './filters.css'
import Filteritem from './filteritem'
const Filters = ({filtelists}) => {
  return (
    <div className='filter'>
      {filtelists && filtelists.map((filters) =>{
        return <Filteritem filter={filters} key= {filters.id}/>
      })}
    </div>
  )
}

export default Filters