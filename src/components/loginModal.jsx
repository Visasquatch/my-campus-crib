import React, { useState }  from 'react';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import { useAuth } from "../context/authContext";
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import ForgotP from "../pages/forgotPassword";

const clientId = '336853841874-iifgh60gkvfmaehnu00252rolgr24os2.apps.googleusercontent.com';
const LoginModal = ({ isOpen, onClose, onLoginSuccess }) => {
     const [email, setEmail] = useState("");
      const [formData, setFormData] = useState({ password: "" });
      const [showForgotP, setShowForgotP] = useState(false);
        const { login } = useAuth();
  if (!isOpen) return null;
    const handleLogin = async () => {
    try {
      const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/v1/auth/login`, {
        email,
        password: formData.password
      });
      console.log(response.data);
      localStorage.setItem('token', response.data.token);
      login();
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
    localStorage.setItem('user_campus', decoded.campus);
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
  className="w-full bg-orange-300 text-white py-2 rounded font-semibold hover:bg-orange-400"
> Continue
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
}
export default LoginModal;