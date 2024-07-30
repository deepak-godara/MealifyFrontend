import React, { Fragment } from "react";
import { useEffect } from "react";
import OwnerHotels from "../component/Owner/OwnerHeader/OwnerHotels/OwnerHotels";
import UseScrollToTop from '../component/UI/UseScroll';
import { Outlet } from "react-router-dom";

function OwnerMainPage() {
  UseScrollToTop();
  return (
    <Fragment>
      <OwnerHotels></OwnerHotels>
      <Outlet />
    </Fragment>
  );
}

export default OwnerMainPage;
