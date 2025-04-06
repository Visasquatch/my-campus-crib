import React, { useState } from "react";
import { FaGoogle, FaApple, FaFacebook } from "react-icons/fa";
import '../App.css';

const Login = ({ onClose }) => {
  const [phone, setPhone] = useState("");
  const [showLogin, setShowLogin] = useState(true);

  return (
    showLogin &&(
    <div className="general">
      
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg w-96 shadow-lg relative">
        <h2 className="text-xl font-semibold mb-4 text-center text-orange">Welcome to Campus Crib</h2>

        <div className="mb-4 text-black">
          <label className="block text-sm font-medium text-gray-700">Country code</label>
          <select className="w-full border p-2 rounded mt-1">
            <option value="+234">Nigeria (+234)</option>
            <option value="+1">United States (+1)</option>
            <option value="+44">United Kingdom (+44)</option>
          </select>
        </div>

        <div className="mb-4 text-black">
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
      
        <button className="w-full flex items-center justify-center gap-2 border py-2 rounded mb-2 hover:bg-gray-100">
        <FaGoogle /> Continue with Google
        </button>

        <button className="w-full flex items-center justify-center gap-2 border py-2 rounded mb-2 hover:bg-gray-100">
       <FaApple/> Continue with Apple
        </button>

        <button className="w-full flex items-center justify-center gap-2 border py-2 rounded mb-2 hover:bg-gray-100">
          ✉️ Continue with Email
        </button>

        <button className="w-full flex items-center justify-center gap-2 border py-2 rounded hover:bg-gray-100">
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

export default Login;
