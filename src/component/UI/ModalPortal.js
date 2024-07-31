import React from 'react'
import ReactDOM from 'react-dom';
import './ModalPortal.css'
const Overlay=(props)=>
{
    return(
        <div className='backdrop' onClick={props.OnClose}></div>
    )
}
const ModalOverlay=(props)=>
{
    return(
        <div style={{backgroundColor:"white"}}  >
            {props.children}
            </div>
    )
}
function ModalPortal(props) {
  
    const division= document.getElementById('overlay');
  return (
   <>
        {ReactDOM.createPortal(<Overlay OnClose={props.onClose}/>,division)}
        {ReactDOM.createPortal(<ModalOverlay  OnClose={props.onClose}>{props.children}</ModalOverlay>,division)}
        </>
  )
}

export default ModalPortal