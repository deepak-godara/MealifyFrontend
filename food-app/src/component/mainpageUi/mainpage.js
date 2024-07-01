import React from 'react'
import MainpageUpperpart from './upperpart'
import Mainpagemidpart from './midpart'
import MainPageInfo from '../MainPageLayout/MainPageInfo'
import Footer from './footer'
const Mainpage = () => {
  return (
    <>
    
    <div><MainpageUpperpart/></div>
    <div><MainPageInfo/></div>
    <div><Mainpagemidpart/></div>
    <div> <Footer/> </div>
    <div>Copy right @</div>
    </>
  )
}

export default Mainpage;
