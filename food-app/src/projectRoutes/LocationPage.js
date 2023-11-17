import { useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import '../App.css';
import HotelsPageLayout from '../component/HotelsPageLayout/HotelsPageLayout';
function LocationPage() {
  const params=useParams();
    console.log()
    const [DisplayCard,SetDisplayCard]=useState(false);
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