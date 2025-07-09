import React, { useState } from "react";
import axios from 'axios';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { FaFacebook } from "react-icons/fa";
import { jwtDecode } from 'jwt-decode';
import { useAuth } from "../context/authContext";
import '../App.css';

const clientId = '336853841874-iifgh60gkvfmaehnu00252rolgr24os2.apps.googleusercontent.com';
const Signup = ({ onClose, onSignupSuccess }) => {
  const [fName, setFName] = useState('');
  const [lName, setLName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [campus, setCampus] = useState('');
  const [showSignup] = useState(true);
  const { login } = useAuth();
  const [countryCode, setCountryCode] = useState("+234");
  const socialBtn = "w-full flex items-center justify-center gap-2 border py-2 rounded-lg mb-2 hover:bg-gray-100 text-sm font-medium";
  const handleSignup = async () => {
    if (!fName || !lName || !phone || !email || !password || !campus) {
      alert("Please fill out all fields.");
      return;
    }
    const fullPhone = `${countryCode}${phone}`;
    const newUser = { fName, lName, phone: fullPhone, email, password, campus };    
    try {
      const response = await axios.post(
  `${process.env.REACT_APP_BACKEND_URL}/api/v1/auth/register`,
  newUser,
  {
    headers: {
      'Content-Type': 'application/json'
    }
  }
);
        console.log(response.data);
        localStorage.setItem('manual_user', JSON.stringify(response.data.user));
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('user_campus', response.data.user.campus);

        localStorage.setItem('isLoggedIn', 'true');
        login();
      if (onSignupSuccess) onSignupSuccess(newUser);
      onClose();
    } catch (error) {
      console.error("Signup failed", error.response?.data || error.message);
      alert(error.response?.data?.message || "Signup failed. Please try again.");
    }
  };
   
 const onSuccess = (credentialResponse) => {
    const token = credentialResponse?.credential;
    if (!token || typeof token !== 'string') {
      console.error("No valid credential token found!");
      return;
    }
    const decoded = jwtDecode(token);
    console.log("SIGNUP SUCCESS! Current user: ", decoded);
    localStorage.setItem('google_token', token);
    localStorage.setItem('google_user', JSON.stringify(decoded));
    
    if (onSignupSuccess) onSignupSuccess(decoded, 'google');
    onClose(); 
  };
  const onFailure = () => {
    console.log("LOGIN FAILED!");
  };

  return (
    showSignup &&(
    <div className="general">
      
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
  <div className="bg-white px-6 py-8 rounded-xl w-full max-w-md shadow-xl overflow-y-auto max-h-[100vh] relative">

  <h2 className="text-2xl font-semibold text-center text-gray-800 mb-4">
  Welcome to Campus Crib
</h2>

<div className="text-black text-sm">
  <label className="block text-sm font-medium text-gray-700 mb-1">
    Country code
  </label>
  <select
  value={countryCode}
  onChange={(e) => setCountryCode(e.target.value)}
  className="w-full border p-2 rounded"
>
  <option value="+234">Nigeria (+234)</option>
  <option value="+229">Benin (+229)</option>
  <option value="+226">Burkina Faso (+226)</option>
  <option value="+245">Cabo Verde (+245)</option>
  <option value="+225">Côte d’Ivoire (+225)</option>
  <option value="+220">Gambia (+220)</option>
  <option value="+233">Ghana (+233)</option>
  <option value="+224">Guinea (+224)</option>
  <option value="+245">Guinea-Bissau (+245)</option>
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
    type="email"
    placeholder="Email"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    className="w-full border p-2 rounded"
  />
</div>
<div className="mb-4 text-black text-sm">
  <label className="block text-sm font-medium text-gray-700">
    Campus </label>
    <select 
  value={campus}
  onChange={(e) => setCampus(e.target.value)}
    className="w-full border p-2 rounded">
    <option value="University of Ilorin">University of Ilorin</option>
  <option value="University of Lagos">University of Lagos</option>
  <option value="University of Ibadan">University of Ibadan</option>
  <option value="University of Abuja">University of Abuja</option>
  <option value="University of Benin">University of Benin</option>
  <option value="Obafemi Awolowo University">Obafemi Awolowo University</option>
  <option value="Olabisi Olabanjo University">Olabisi Olabanjo University</option>
  <option value="Ahmadu Bello University">Ahmadu Bello University</option>
  <option value="Federal University of Technology Akure">Federal University of Technology Akure</option>
  <option value="Lagos State University">Lagos State University</option>
  <option value="Kwara State University">Kwara State University</option>
  <option value="Nigerian Defence Academy">Nigerian Defence Academy</option>
  <option value="University of Nigeria Nsukka">University of Nigeria Nsukka</option>
  </select>
  </div>

<div className="mb-4 text-sm">
<input
  type="text"
  placeholder="First name"
  value={fName}
  onChange={(e) => setFName(e.target.value)}
  className=" border p-2 rounded"/>

  <input 
  type="text"
  placeholder="Last name"
  value={lName}
  onChange={(e) => setLName(e.target.value)}
  className="ml-12 border p-2 rounded"/>
</div>
     
<div className="mb-4 text-sm">
  <input
    type="password"
    placeholder="Password"
    value={password}
    onChange={(e) => setPassword(e.target.value)}
  className="w-full border p-2 rounded"/>
</div>
<button onClick={handleSignup} className="w-full bg-orange-300 text-white py-2 rounded font-semibold hover:bg-orange-400">
  Continue
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
    <button onClick={onClose} className="close-btn">
  ✖
</button>


      </div></div>
    </div>
  )
);
};

export default Signup;
