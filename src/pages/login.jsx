import React, { useState } from "react";
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { FaGoogle, FaApple, FaFacebook } from "react-icons/fa";
import { jwtDecode } from 'jwt-decode';
import '../App.css';
import ForgotP from "./forgotPassword";

const clientId = '336853841874-iifgh60gkvfmaehnu00252rolgr24os2.apps.googleusercontent.com';

const Login = ({ onClose, onLoginSuccess }) => {
 const [phone, setPhone] = useState("");
   const [fName, setfName] = useState('');
   const [lName, setlName] = useState('');
   const [password, setPassword] = useState('');
  const [showForgotP, setShowForgotP] = useState(false);
  const socialBtn = "w-full flex items-center justify-center gap-2 border py-2 rounded-lg mb-2 hover:bg-gray-100 text-sm font-medium ";
   const [formData, setFormData] = useState({
      fName: '',
      lName: '',
      phone: '',
      email: '',
      password: ''
    });

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
    
    if (onLoginSuccess) onLoginSuccess(decoded); // notify Header or parent
    onClose(); // close modal after successful login
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

              <div className="mb-4 text-black text-sm">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Country code
                </label>
                <select className="w-full border p-2 rounded">
                  <option value="+234">Nigeria (+234)</option>
                  <option value="+229">Benin (+229)</option>
                  <option value="+226">Burkina Faso (+226)</option>
                  <option value="+245">Cabo Verde (+245)</option>
                  <option value="+225">Côte d’Ivoire (+225)</option>
                  <option value="+220">Gambia (+220)</option>
                  <option value="+233">Ghana (+233)</option>
                  <option value="+224">Guinea (+224)</option>
                  <option value="+231">Liberia (+231)</option>
                  <option value="+223">Mali (+223)</option>
                  <option value="+227">Niger (+227)</option>
                  <option value="+221">Senegal (+221)</option>
                  <option value="+232">Sierra Leone (+232)</option>
                  <option value="+228">Togo (+228)</option>
                  <option value="+1">Canada (+1)</option>
                  <option value="+33">France (+33)</option>
                  <option value="+27">South Africa (+27)</option>
                  <option value="+44">United Kingdom (+44)</option>
                  <option value="+1">United States (+1)</option>
                </select>
              </div>

              <div className="mb-4 text-sm">
  <input
    type="tel"
    placeholder="Phone number"
    value={phone}
  onChange={(e) => {
    const input = e.target.value;
  if (/^\d{0,11}$/.test(input)) {
    setPhone(input);}
  }}
  className="w-full border p-2 rounded"/>
</div>
<div className="mb-4 text-sm">
  <input
    type="password"
    placeholder="Password"
    value={formData.password}
  onChange={(e) => setFormData({...formData, password: e.target.value})}
  className="w-full border p-2 rounded"/>
</div>
              <button className="w-full bg-orange-300 text-white py-2 rounded font-semibold hover:bg-orange-400">
                Continue
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
        isSignedIn={true}
      />
              </GoogleOAuthProvider>

              <button className={socialBtn}>
                <FaApple /> Continue with Apple
              </button>

              <button className={socialBtn}>
                ✉ Continue with Email
              </button>

              <button className={socialBtn}>
                <FaFacebook /> Continue with Facebook
              </button>
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
