import React, { useState } from "react";
import axios from 'axios';
import { useAuth } from "../context/authContext";
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import '../App.css';
import ForgotP from "./forgotPassword";

const clientId = '336853841874-iifgh60gkvfmaehnu00252rolgr24os2.apps.googleusercontent.com';
const Login = ({ onClose, onLoginSuccess }) => {
 const [email, setEmail] = useState("");
  const [formData, setFormData] = useState({ password: "" });
  const [showForgotP, setShowForgotP] = useState(false);
  const { login } = useAuth();

  const handleLogin = async () => {
    try {
      const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/v1/auth/login`, {
        email,
        password: formData.password
      });
      console.log(response.data);

    const { token, user } = response.data;
    localStorage.setItem('token', token);
    localStorage.setItem('manual_user', JSON.stringify(user));
    localStorage.setItem('current_user', JSON.stringify(response.data.user));
    window.dispatchEvent(new Event('storage'));
    localStorage.setItem('user_campus', user.campus);
    localStorage.setItem('user_role', user.role);
    localStorage.setItem('isLoggedIn', 'true');

    login(user.role); 

    if (onLoginSuccess) onLoginSuccess(response.data);
    onClose();

  } catch (error) {
    console.error("Login failed", error.response?.data);
    alert(error.response?.data?.message || "Login failed.");
    }
  };
  
  const onSuccess = (credentialResponse) => {
    const token = credentialResponse?.credential;
    if (!token || typeof token !== 'string') {
      console.error("No valid credential token found!");
      return;
    }
    const decoded = jwtDecode(token);
    console.log("LOGIN SUCCESS! Current user: ", decoded);
    localStorage.setItem('google_token', token);
    localStorage.setItem('google_user', JSON.stringify(decoded));
    localStorage.setItem('current_user', JSON.stringify(decoded)); 
    localStorage.setItem('user_campus', decoded.campus);
    localStorage.setItem('user_role', 'student');
    localStorage.setItem('isLoggedIn', 'true');
    window.dispatchEvent(new Event('storage'));
    login(); 
    if (onLoginSuccess) onLoginSuccess(decoded);
    onClose();
  };
  const onFailure = () => {
    console.log("LOGIN FAILED!");
  };

  return (
    <div className="general">
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
        <div className="bg-white px-6 py-8 rounded-xl w-full max-w-md shadow-xl overflow-y-auto max-h-[90vh] relative">
          {showForgotP ? (
            <ForgotP onClose={() => setShowForgotP(false)} />
          ) : (
            <>
              <h2 className="text-2xl font-semibold text-center text-gray-800 mb-4">
                Welcome back to Campus Crib
              </h2>
<div className="mb-4 text-sm">
  <input
    type="email"
    placeholder="Email"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    className="w-full border p-2 rounded"
  />
</div>
<div className="mb-4 text-sm">
  <input
    type="password"
    placeholder="Password"
    value={formData.password}
  onChange={(e) => setFormData({...formData, password: e.target.value})}
  className="w-full border p-2 rounded"/>
</div>
<button
  onClick={handleLogin}
  className="w-full bg-[#1f2c75] text-white py-2 rounded font-semibold hover:bg-[#1c285e]"> Continue
</button>
              <button
                onClick={() => setShowForgotP(true)}
                className="forgotP-button flex items-center justify-center text-sm w-full my-3"
              >
                Forgot Password?
              </button>

              <p className="text-center my-3 text-gray-500 text-sm">or</p>

              <GoogleOAuthProvider clientId={clientId}>
      <GoogleLogin
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
      />
              </GoogleOAuthProvider>
            </>
          )}
          <button onClick={onClose} className="close-btn">
            ✖
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
