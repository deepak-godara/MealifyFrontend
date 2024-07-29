import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './reduxtool/reduxstore'; // Update with your actual store import
import App from './App';
import  AuthClientProvider  from './store/AuthClientProvider';
import  AuthOwnerProvider  from './store/AuthOwnerProvider';
import  HotelContextProvider  from './store/HotelContextProvider';
import  {SocketProvider}  from './store/SocketContext';
import { BrowserRouter as Router } from 'react-router-dom';

// Remove <React.StrictMode> to test if it's causing double invocations
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
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
);
