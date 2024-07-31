import React from 'react'
import MainpageUpperpart from './upperpart'
import Mainpagemidpart from './midpart'
import MainPageInfo from '../MainPageLayout/MainPageInfo'
import './mainpagecollection.css'
import Mainpagecollection from './Mainpagecollection'
const Mainpage = () => {
  return (
    <>
    <div className='mainPage'>
    <div className='mainPage'><MainpageUpperpart/></div>
    <div className='mainPage'><Mainpagecollection/></div>
    <div className='mainPage'><MainPageInfo/></div>
    <div className='mainPage'><Mainpagemidpart/></div>
    </div>
    </>
  )
}

export default Mainpage;
