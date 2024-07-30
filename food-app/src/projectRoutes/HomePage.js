import '../App.css';
import { useEffect } from 'react';
import MainPageInfo from '../component/MainPageLayout/MainPageInfo';
import MainPageLayout from '../component/MainPageLayout/MainPageLayout';
import Mainpage from '../component/mainpageUi/mainpage'
import UseScrollToTop from '../component/UI/UseScroll';
function HomePage() {
  UseScrollToTop();
    return (
      <>

  {/* <MainPageInfo></MainPageInfo> */}
  {/* <MainPageLayout></MainPageLayout> */}
  <Mainpage></Mainpage>
  </>
    );
  }

export default HomePage