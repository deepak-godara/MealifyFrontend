import React from 'react'
import './upperpart.css'
const MainpageUpperpart = () => {
  return (
   <>

        <div className='upper-part'>
            <div className='content-part'>
            <div className='name'>ZOMATO</div>
            <div className='info'>Discover the best food & drinks in Chennai</div>&nbsp;
            <div className='search-bar'>
                <div className='left-search-bar'>
                    <div>loclogo</div>&nbsp;
                    <input className='left-input' placeholder='location'/> &nbsp;
                    <div>down</div>
                </div>
                {/* <div className='mid'>|</div> */}
                <div className='right-search-bar'>
                    <div>search-logo</div>&nbsp;
                    <input className='right-input'  placeholder='search for restaurant, cuisine or a dish'/>
                </div>
            </div>
            </div>
        </div>

   </>
  )
}

export default MainpageUpperpart;