import React, { useEffect, useState, useContext } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import io from "socket.io-client";
import "./App.css";
import OwnerActiveOrder2 from "./component/Owner/OwnerOrders/OwnerActiveOrder2"
import Address from "./component/User/Address/storeaddress/Address";
import CommonLayout from "./component/Layouts/CommonLayout";
import ClientLayout from "./component/Layouts/ClientLayout";
import AddNewHotel from "./component/Owner/AddNewHotel/Main";
import Orders from "./component/Orders/UserOrders/Main";
import OwnerLayout from "./component/Layouts/OwnerLayout";
import ConfirmedOrders from "./component/Orders/ConfiredOrders/Main";
import Cart from "./component/Orders/CommonOrders/Cart";
import NewOrder from "./component/Owner/OwnerOrders/Main";
import User from "./component/User/UserProfile/main";
import OwnerMainPage from "./projectRoutes/OwnerMainPage";
import HotelDetails from "./projectRoutes/HotelDetails";
import HomePage from "./projectRoutes/HomePage";
import LocationPage from "./projectRoutes/LocationPage";
import ClientContext from "./store/AuthClient";
import OwnerContext from "./store/AuthOwner";
import OwnerMenu from "./component/Owner/OwnerHotelDetails/Main";
import ViewHotelDetails from "./component/Owner/HotelDetails/ViewHotelDetails";
import OwnerDeliverdOrder from "./component/Owner/OwnerOrders/OwnerDeliverdOrder";
const Redirect = (to) => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate(to.to, { replace: true });
  }, [navigate, to]);
  return <></>;
};
function App() {
  const ClientCtx = useContext(ClientContext);

  const socket = io.connect("http://localhost:4000");
  const OwnerCtx = useContext(OwnerContext);
  const location = useLocation();
  const [user, SetUser] = useState("None");
  // useEffect(() => {
  //   const users = JSON.parse(localStorage.getItem("login-data"));
  //   // console.log(users);
  //   if (users)
  //     if (users.user === "client") {
  //       console.log("yes");

  //       SetUser("Client");
  //     } else {
  //     }
  // }, []);
  return (
    // <AuthClientProvider>
    <Routes>
      {ClientCtx.isAuth && (
        <Route path="/User" element={<ClientLayout />}>
          <Route index element={<Cart />} />
          <Route path="address" element={<Address />} />
          <Route path="cart" element={<Cart />} />
          <Route path="orders">
            <Route index element={<Orders />} />
            <Route path=":orderid" element={<ConfirmedOrders />} />
          </Route>
        </Route>
      )}
      {OwnerCtx.isAuth && (
        <Route
          path="/owner"
          element={
            OwnerCtx.OwnerHotelId !== undefined ? (
              <OwnerLayout />
            ) : (
              <Redirect to="/owner/addhotel" />
            )
          }
        >
          <Route index element={<OwnerMainPage />} />
          <Route path="addhotel" element={<AddNewHotel />} />
          <Route path="details" element={<ViewHotelDetails />} />
          <Route path="menu" element={<OwnerMenu />} />
          <Route path="order" element={<NewOrder />} />
        </Route>
      )}
      <Route path="/" element={<CommonLayout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/location/:locationid/:hotelid"
          element={<HotelDetails />}
        />
        <Route path="/location/:locationid" element={<LocationPage />} />
      </Route>
     
        <Route path="/owner" element={OwnerCtx.OwnerHotelId!==undefined?<OwnerLayout />:<Redirect to="/owner/addhotel"/>}>
          <Route index element={<OwnerMainPage />} />
          {/* <Route  path="/updatemenu" element={} */}
          <Route path="menu" element={<OwnerMenu/>}/>
          <Route path="order" element={<NewOrder />} />
          <Route path="active" element={<OwnerActiveOrder2/>} />
          <Route path="Deliver" element={<OwnerDeliverdOrder/>} />
        </Route>
    </Routes>
    // </AuthClientProvider>
  );
}

export default App;
