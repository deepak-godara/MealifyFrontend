import React, { useState } from 'react'
import TabOptions from '../../component/common/tabOptions';
import Delivery from '../../component/delivery';
import Nightlife from '../../component/nightlife';
import DiningOut from '../../component/diningout';
import './index.css'
const HomePage = () => {

  const [activeTab, setActiveTab]= useState("Delivery")

  return (
    <div  className='bodyyy'>
      
        {/* <Header/> */}
        <TabOptions  activeTab={activeTab} setActiveTab={setActiveTab}/>
        {getCorrectScreen(activeTab)}
        {/* <Footer/> */}
    </div>
  );
};

const getCorrectScreen=(tab)=>{
  switch(tab){
    case "Delivery":
      return <Delivery/>
    case "Dining Out":
      return <DiningOut/>
    case "NightLife":
      return <Nightlife/>
      default:
        return <Delivery/>
  }
}

export default HomePage;