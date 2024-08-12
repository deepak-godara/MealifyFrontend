import React, { useEffect, useContext } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import "./App.css";
import OwnerActiveOrder2 from "./component/Owner/OwnerOrders/OwnerActiveOrder2";
import Address from "./component/User/Address/storeaddress/Address";
import CommonLayout from "./component/Layouts/CommonLayout";
import ClientLayout from "./component/Layouts/ClientLayout";
import AddNewHotel from "./component/Owner/AddNewHotel/Main";
import Ordersss from "./component/Orders/UserOrders/Main";
import OwnerLayout from "./component/Layouts/OwnerLayout";
import ConfirmedOrders from "./component/Orders/ConfiredOrders/Main";
import Cart from "./component/Orders/CommonOrders/Cart";
import NewOrder from "./component/Owner/OwnerOrders/Main";
import HotelDetails from "./projectRoutes/HotelDetails";
import HomePage from "./projectRoutes/HomePage";
import LocationPage from "./projectRoutes/LocationPage";
import ClientContext from "./store/AuthClient";
import OwnerContext from "./store/AuthOwner";
import OwnerMenu from "./component/Owner/OwnerHotelDetails/Main";
import ViewHotelDetails from "./component/Owner/HotelDetails/ViewHotelDetails";
import OwnerDeliverdOrder from "./component/Owner/OwnerOrders/OwnerDeliverdOrder";
import ReviewRender from "./component/Review/ReviewRender";
import UserReviewPage from "./component/Review/UserReviewPage";
const Redirect = (to) => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate(to.to, { replace: true });
  }, [navigate, to]);
  return <></>;
};
function App() {
  const ClientCtx = useContext(ClientContext);
  const OwnerCtx = useContext(OwnerContext);
  const location = useLocation();
  return (
    <Routes>
      {/* {ClientCtx.isAuth && (
        <Route path="/User" element={<ClientLayout />}>
          <Route index element={<Cart />} />
          <Route path="address" element={<Address />} />
          <Route path="cart" element={<Cart />} />
          <Route path="orders">
            <Route index element={<Ordersss />} />
            <Route path=":orderid" element={<ConfirmedOrders />} />
          </Route>
          <Route path="review" element={<UserReviewPage />} />
        </Route>
      )}
      {OwnerCtx.isAuth && (
        <Route
          path="/owner"
          element={
            OwnerCtx.OwnerHotelId !== undefined ||
            location.pathname === "/owner/addhotel" ? (
              <OwnerLayout />
            ) : (
              <Redirect to="/owner/addhotel" />
            )
          }
        >
          <Route index element={<ViewHotelDetails />} />
          <Route path="addhotel" element={<AddNewHotel />} />
          <Route path="details" element={<ViewHotelDetails />} />
          <Route path="menu" element={<OwnerMenu />} />
          <Route path="order" element={<NewOrder />} />
          <Route path="active" element={<OwnerActiveOrder2 />} />
          <Route path="Deliver" element={<OwnerDeliverdOrder />} />
          <Route path="review" element={<ReviewRender />} />
        </Route>
      )}
      <Route path="/" element={<CommonLayout />}>
        <Route
          index
          element={
            ClientCtx.isAuth && ClientCtx.CurrentActiveAddress ? (
              <Redirect
                to={`/location/${ClientCtx.CurrentActiveAddress.Address}`}
              />
            ) : OwnerCtx.isAuth ? (
              <Redirect to="/owner" />
            ) : (
              <HomePage />
            )
          }
        />
        <Route path="/location/:locationid">
          <Route index element={<LocationPage />} />
          <Route
            path="/location/:locationid/:hotelid"
            element={<HotelDetails />}
          />
        </Route>
      </Route>
      <Route path="*" element={<Redirect to="/" />} /> */}
    </Routes>
  );
}

export default App;
