import React, { useState } from "react";
import { FaGoogle, FaApple, FaFacebook } from "react-icons/fa";
import '../App.css';

const Signup = ({ onClose }) => {
  const [phone, setPhone] = useState("");
  const [showSignup, setShowSignup] = useState(true);
  const socialBtn = "w-full flex items-center justify-center gap-2 border py-2 rounded-lg mb-2 hover:bg-gray-100 text-sm font-medium";


  return (
    showSignup &&(
    <div className="general">
      
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
  <div className="bg-white px-6 py-8 rounded-xl w-full max-w-md shadow-xl overflow-y-auto max-h-[90vh] relative">

  <h2 className="text-2xl font-semibold text-center text-gray-800 mb-4">
  Welcome to Campus Crib
</h2>

<div className="mb-4 text-black">
  <label className="block text-sm font-medium text-gray-700 mb-1">
    Country code
  </label>
  <select className="w-full border p-2 rounded">
    <option value="+234">Nigeria (+234)</option>
    <option value="+1">United States (+1)</option>
    <option value="+44">United Kingdom (+44)</option>
  </select>
</div>

<div className="mb-4">
  <input
    type="tel"
    placeholder="Phone number"
    value={phone}
    onChange={(e) => setPhone(e.target.value)}
    className="w-full border p-2 rounded"
  />
</div>

     
        <button className="w-full bg-orange-300 text-white py-2 rounded font-semibold hover:bg-orange-400">
          Continue
        </button>

        <p className="text-center my-3 text-gray-500 text-sm">or</p>
      
        <button className= {socialBtn}>
        <FaGoogle /> Continue with Google
        </button>

        <button className= {socialBtn}>
       <FaApple/> Continue with Apple
        </button>

        <button className= {socialBtn}>
          ✉️ Continue with Email
        </button>

        <button className= {socialBtn}>
   <FaFacebook/>Continue with Facebook
        </button>

    <button onClick={onClose} className="close-btn">
  ✖
</button>

      </div></div>
    </div>
  )
);
};

export default Signup;
