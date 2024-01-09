import React, { useEffect, useState } from "react";
// import io from "socket.io-client";
// import { useContext } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Address from "./component/User/Address/storeaddress/Address";
import CommonLayout from "./component/Layouts/CommonLayout";
import ClientLayout from "./component/Layouts/ClientLayout";
import Orders from "./component/Orders/UserOrders/Main";
// import OwnerLayout from "./component/Layouts/OwnerLayout";
import ConfirmedOrders from "./component/Orders/ConfiredOrders/Main";
// import Layout from "./component/SideBar/ClientSideBar/Layout";
import Cart from "./component/Orders/CommonOrders/Cart";
// import OrderLists from "./component/Orders/OwnerOrders/OrderLists";
// import Login from "./projectRoutes/ClientLogin";
// import LoginOwner from "./projectRoutes/OwnerLogin";
import User from "./component/User/UserProfile/main";
import OwnerAddHotelPage from "./projectRoutes/OwnerAddHotel";
import OwnerMainPage from "./projectRoutes/OwnerMainPage";
import OwnerAddCategories from "./projectRoutes/OwnerAddCategories";
// import AddNewCategories from './component/Owner/HotelDetails/AddNewCategories';
import OwnerAddDish from "./projectRoutes/OwnerAddDish";
import HotelDetails from "./projectRoutes/HotelDetails";
import HomePage from "./projectRoutes/HomePage";
import LocationPage from "./projectRoutes/LocationPage";
import NavBarLayout from "./projectRoutes/NavBarLayout";
// import HotelsPageLayout from "./component/HotelsPageLayout/HotelsPageLayout";
// const socket=io.connect("http://localhost:4000");
function App() {
  // const ClientCtx = useContext(ClientContext);
  // const OwnerCtx = useContext(OwnerContext);
  const location = useLocation();

  const [user, SetUser] = useState("None");
  useEffect(() => {
    const users = JSON.parse(localStorage.getItem("login-data"));
    // console.log(users);
    if (users)
      if (users.user === "client") {
        console.log("yes");
        // console.log(ClientCtx)
        SetUser("Client");
      }
  }, [location.pathname]);
  return (
    // <AuthClientProvider>
    <Routes>
      {user === "Client" && (
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
      <Route path="/" element={<CommonLayout />}>
        <Route path="xt" element={<User />}></Route>
        <Route path="xt/Con" element={<ConfirmedOrders />}></Route>
        <Route index element={<HomePage />} />

        <Route
          path="/location/:locationid/:hotelid"
          element={<HotelDetails />}
        />
        <Route path="/location/:locationid" element={<LocationPage />} />
      </Route>
      <Route path="/owner/:id" element={<NavBarLayout></NavBarLayout>}>
        <Route index element={<OwnerMainPage />} />
        <Route path="addHotel" element={<OwnerAddHotelPage />} />
        {/* <Route path='profile' element={<OwnerMainPage />} /> */}
        <Route path=":hotelid">
          <Route index element={<HotelDetails />} />
          <Route path="adddish" element={<OwnerAddDish />} />
          <Route path="addcategory" element={<OwnerAddCategories />} />
        </Route>
      </Route>
    </Routes>
    // </AuthClientProvider>
  );
}

export default App;
