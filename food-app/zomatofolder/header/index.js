import React from "react";
import "./header.css";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Header = () => {
  return (
    <>
      <div className="max-width header">
        <img
          src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
          alt="zometo-logo"
          className="header-logo"
        />
        
        

          <div className="header-location-search-container">
             <div className="location-city">
              <span class="material-symbols-outlined location-logo">location_on</span>
               <div className="city">Agra</div>
               <span class="material-symbols-outlined down-arrow">arrow_drop_down</span>
             </div>

             <div className="search-search-logo">
             <span class="material-symbols-outlined search-icon absolute-center">search</span>
             <input className="search-bar" placeholder="search for restaurant cuisines or a dish"/>
             </div>
          </div>

      




        <div className="header-end">
          <div className="text">
            <img
              className="text"
              src="https://camo.githubusercontent.com/2b7cb217f80f2b9f8bfb4becdceab7fcaabfcdc3075b0095f4d838a48be08f30/68747470733a2f2f7261772e6769746875622e636f6d2f656c61646e6176612f6d6174657269616c2d6c65747465722d69636f6e732f6d61737465722f646973742f706e672f4d2e706e67"
              alt="email-image"
            />
          </div>
          <p className="name">Anurag</p>
        </div>
     
      
      </div>
    </>
  );
};

export default Header;
