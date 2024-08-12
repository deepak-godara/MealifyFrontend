import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { CLOSE_DELIVERY_CONFIRMATION, DELIVERYCONFIRM } from '../../reduxtool/constants/OrderConstants';

const DeliveryConfirmationPopup = () => {
  const dispatch = useDispatch();
  const { deliveryConfirmation, orderId, Delivered } = useSelector((state) => state.DeliveryConfirmation);
  const [confirm, setConfirm] = useState(false);

  const handleConfirm = () => {
    setConfirm(true);
    dispatch({ type: DELIVERYCONFIRM, payload: true });
    dispatch({ type: CLOSE_DELIVERY_CONFIRMATION });
  };
  const handleCancel = () => {
    dispatch({ type: CLOSE_DELIVERY_CONFIRMATION });
  };
  useEffect(() => {
    if (Delivered) {
      console.log("Delivered status updated:", Delivered);
    }
  }, [Delivered] , dispatch);

  if (!deliveryConfirmation) return null;

  return (
    <div className="boxStyle">
      <p>Please Confirm If Your Order #{orderId} Has Been Delivered</p>
      <button className="confirmButtonStyle" onClick={handleConfirm}>
        Yes
      </button>
      <button className="cancelButtonStyle" onClick={handleCancel}>
        No
      </button>
    </div>
  );
};

export default DeliveryConfirmationPopup;
