import React from 'react';
import Layout from './components/layout.js'
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import  Home from './home.jsx';
import Login from './pages/login.jsx';
import SignUp from './pages/signup.jsx';
import UIL from './pages/uIL.jsx';
import Detail from './pages/details.jsx';
import  Actual_Cart  from './pages/actualCart.jsx';
import ForgotP from './pages/forgotPassword.jsx';
import Profile from './pages/profile.jsx';

function App() {
  return (
    <BrowserRouter>
  <Routes>
    <Route path="/" element={<Layout />} >
    <Route path="/" element={<Home />} />
    <Route path="/login" element={<Login />} />
    <Route path="/signup" element={<SignUp />} />
    <Route path="/profile" element={<Profile />} />
    <Route path="/cart" element={<Actual_Cart />} />
        <Route path="/university-of-ilorin" element={<UIL />} /> 
        <Route path="/university-of-ilorin/:slug" element={<Detail />} />
    <Route path="/forgotPassword" element={<ForgotP />} />
    </Route>
  </Routes>
</BrowserRouter>
  );
}

export default App;
