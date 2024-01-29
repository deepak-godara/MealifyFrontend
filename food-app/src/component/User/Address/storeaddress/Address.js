import React, { useState } from 'react'
import './Address.css'
import { GoPlusCircle } from "react-icons/go";
import MapContainer from '../main';
import { AiFillCaretRight } from "react-icons/ai";
const Address = () => {
    const [AddAddressDiv,SetAddressDiv]=useState(false);
    const SetAddressVisibility=()=>{
        console.log('bfd')
        SetAddressDiv(false);
    }
  return (
    <>   <div className='address-main'>

        <h2>My address</h2>
        <div>

        </div>
        <div className='address-container' >
            <button className='Address-box' onClick={()=>{SetAddressDiv(true)}}>
                <div className="Add-Address-Box">
                     <GoPlusCircle style={{color:"red" ,height:"1.5rem", width:"1.5rem"}}/>
                     <div>Add address</div>
                </div>
            </button>
        <div className="Address-box">
                <div className='Address-Place'>Home</div>
                <div className='full-Address'>Itigitti road , sattur Colony , Dharwad , Karnataka</div>
                <div className='Edit-Delete'>
                    <button className='edit-div'>Edit <AiFillCaretRight/></button>
                    <button className='edit'>Delete </button>
                </div>
        </div>
        <div className="Address-box">
                <div className='Address-Place'>Home</div>
                <div className='full-Address'>Itigitti road , sattur Colony , Dharwad , Karnataka</div>
                <div className='Edit-Delete'>
                    <button className='edit-div'>Edit <AiFillCaretRight/></button>
                    <button className='edit'>Delete </button>
                </div>
        </div>
        <div className="Address-box">
                <div className='Address-Place'>Home</div>
                <div className='full-Address'>Itigitti road , sattur Colony , Dharwad , Karnataka</div>
                <div className='Edit-Delete'>
                    <button className='edit-div'>Edit <AiFillCaretRight/></button>
                    <button className='edit'>Delete </button>
                </div>
        </div>
        <div className="Address-box">
                <div className='Address-Place'>Home</div>
                <div className='full-Address'>Itigitti road , sattur Colony , Dharwad , Karnataka</div>
                <div className='Edit-Delete'>
                    <button className='edit-div'>Edit <AiFillCaretRight/></button>
                    <button className='edit'>Delete </button>
                </div>
        </div>
        <div className="Address-box">
                <div className='Address-Place'>Home</div>
                <div className='full-Address'>Itigitti road , sattur Colony , Dharwad , Karnataka</div>
                <div className='Edit-Delete'>
                    <button className='edit-div'>Edit <AiFillCaretRight className='Address-Symbol'/></button>
                    <button className='edit'>Delete </button>
                </div>
        </div>
        </div>
    </div>
    { AddAddressDiv&&
        <MapContainer func={SetAddressVisibility} />}
    </>
  )
}

export default Address;