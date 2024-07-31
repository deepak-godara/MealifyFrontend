import {useEffect} from 'react';
import { useParams } from 'react-router-dom';
import '../App.css';
import UseScrollToTop from '../component/UI/UseScroll';
import HotelsPageLayout from '../component/HotelsPageLayout/HotelsPageLayout';
function LocationPage() {

  const params=useParams();
  UseScrollToTop();
    useEffect(()=>{
      console.log('Main-folder')
    },[params.locationid])
    return (
      <>
<HotelsPageLayout></HotelsPageLayout>
    </>
    )
  }

export default LocationPage