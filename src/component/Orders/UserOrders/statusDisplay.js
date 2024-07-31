import React, { useEffect, useState } from 'react';
import './UserOrder.css';
import ClientContext from '../../../store/AuthClient';
import { useContext } from 'react';

const StatusDisplay = ({ Status, OrderId  , Name}) => {
  // const ClientCtx = useContext(ClientContext);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className='mainBox' onClose={()=> setVisible(false)}>
      <p>  Update from  {Name} </p>
      <p> OrderId  : {OrderId}</p>
      <p> Status Of the Order  : {Status} </p>
      <button onClick={handleClose}>Yes</button>
    </div>
  );
};

export default StatusDisplay;
