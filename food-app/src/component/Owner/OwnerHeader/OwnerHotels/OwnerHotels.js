import React,{useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import './OwnerHotels.css'
import OwnerHotelDisplay from './OwnerHotelDisplay';
function OwnerHotels() {
    const params=useParams();
    console.log(params.id)
    const [hotelList,SetHotelList]=useState([]);
    const [LoadingandError,SetError]=useState(true);
    const [Content,SetContents]=useState(false);
    const [LoadingContent,SetContent]=useState('loading...');
    useEffect(()=>{
        async function fecthHotels(){
            const Data= await fetch(`http://localhost:4000/owner/${params.id}/gethotel`,{
                Method:'GET'
            })
            const js= await Data.json();
            if(js.status==='200')
            {
              SetHotelList(js.hotels);
              console.log(js.hotels);
               if(js.hotels.length!==0)
               {
                SetContents(true);
               }
               console.log(hotelList);
                SetError(!LoadingandError);
            }
            else{
                SetContent(js.errorData);
            }
        }
        fecthHotels();
    },[params.id])

  return (
    <>
      <div className='Owner-Hotel-error'>
        {LoadingandError&&
        <div>{LoadingContent}
            </div>
            }
             </div>
            {!LoadingandError&&
            
            <div className='Owner-Hotels-Div'>
              {!Content&&<div> No hotels to display</div>}
             {Content&&hotelList.map(item=><OwnerHotelDisplay key={item._id} HotelData={item}/>)}
            </div>
            }
     
    </>
  )
}

export default OwnerHotels