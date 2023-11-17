import {useEffect} from 'react';
import { useParams } from 'react-router-dom';
import '../App.css';
import HotelsPageLayout from '../component/HotelsPageLayout/HotelsPageLayout';
function LocationPage() {
  const params=useParams();
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