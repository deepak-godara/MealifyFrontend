import React, {useContext,useState,useEffect} from 'react';
import { NavLink,useParams ,useLocation,useNavigate} from 'react-router-dom';
import './Ownerheader.css'
import Logout from '../Authorization/Logout';
import OwnerContext from '../../store/AuthOwner';
// import { useContext } from 'react';
function OwnerHeader() {
  const location=useLocation();
  const path=location.pathname;
      const Navigate = useNavigate();
    const params=useParams();
    const [HotelDetail,SetHotelDetail]=useState(false);
    useEffect(() => {
      console.log(params.hotelid)
      if (params.hotelid) {
        SetHotelDetail(true);
      }
    }, [params.hotelid]);
    const OwnerCtx=useContext(OwnerContext);
    const OwnerLogout=()=>{
       <Logout data='owner-data'></Logout>
    }
  return (
    <>
     <div className='Owner-Nav-Options'>
        <NavLink to={`/owner/${params.id}/profile`} className='Owner-NavLink'> Profile</NavLink>
        <Logout data='owner-data'></Logout>
        </div>
       
     </>
  )
}

export default OwnerHeader