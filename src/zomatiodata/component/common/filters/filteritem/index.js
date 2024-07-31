import React from 'react'
import './filteritem.css'
const Filteritem = ({filter}) => {
  return (
    <div className='filteritem'>{filter.title}</div>
  )
}

export default Filteritem