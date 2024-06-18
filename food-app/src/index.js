import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { SocketProvider } from './store/SocketContext';
import reportWebVitals from './reportWebVitals';
import AuthClientProvider from './store/AuthClientProvider';
import AuthOwnerProvider from './store/AuthOwnerProvider';
import HotelContextProvider from './store/HotelContextProvider';
import {BrowserRouter as Router} from "react-router-dom"
import store from './reduxtool/reduxstore';
// import   
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider  store ={store}>
    <AuthClientProvider>
      <AuthOwnerProvider>
        <HotelContextProvider>
          <SocketProvider>
          <Router>
        <App />
        </Router>
        </SocketProvider>
        </HotelContextProvider>
      </AuthOwnerProvider>
      
    </AuthClientProvider>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
