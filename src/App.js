import React from 'react';
import Layout from './components/layout.js'
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import  Home from './home.jsx';
import SignUp from './pages/signup.jsx';
import UIL from './pages/uIL.jsx';
import Detail from './pages/details.jsx';
import PaymentForm from "./payment/payment.jsx"
import  ActualCart  from './pages/actualCart.jsx';
import ForgotP from './pages/forgotPassword.jsx';
import Profile from './pages/profile.jsx';
import { PublicClientApplication } from "@azure/msal-browser";
import { MsalProvider } from "@azure/msal-react";
import msalConfig from "./authConfig";

const msalInstance = new PublicClientApplication(msalConfig);


function App() {
  return (
    <MsalProvider instance={msalInstance}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} >
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/cart" element={<ActualCart />} />
            <Route path="/university-of-ilorin" element={<UIL />} /> 
            <Route path="/university-of-ilorin/:slug" element={<Detail />} />
            <Route path="payment" element={<PaymentForm />} />
            <Route path="/forgotPassword" element={<ForgotP />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </MsalProvider>
  );
}
console.log(process.env.REACT_APP_BACKEND_URL)
export default App;
