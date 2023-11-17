import React, { Fragment } from "react";

import OwnerHotels from "../component/Owner/OwnerHeader/OwnerHotels/OwnerHotels";

import { Outlet } from "react-router-dom";
function OwnerMainPage() {
  return (
    <Fragment>
      <OwnerHotels></OwnerHotels>
      <Outlet />
    </Fragment>
  );
}

export default OwnerMainPage;
