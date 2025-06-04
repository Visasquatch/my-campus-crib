import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useMsal } from "@azure/msal-react";

function SideNav() {
  const [user, setUser] = useState(null);
  const [campus, setCampus] = useState('');

  useEffect(() => {
    const storedUser = localStorage.getItem('google_user') || localStorage.getItem('manual_user');
    const storedCampus = localStorage.getItem('user_campus');

    if (storedUser) setUser(JSON.parse(storedUser));
    if (storedCampus) setCampus(storedCampus);
  }, []);

  const { instance } = useMsal();

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('google_user');
    localStorage.removeItem('google_token');
    window.dispatchEvent(new Event('storage'));
    const account = instance.getActiveAccount();
    if (account) {
      instance.logoutRedirect();
    } else {
      console.log("No active MSAL account — just cleared local storage.");
    }
  };
  
  return (
    <nav className="w-full flex items-center p-3 bg-gray-100 border-b border-gray-300 shadow-sm">
        <div class="flex space-x-9 ml-2">
     <Link to="/profile" className="hover:bg-indigo-100 p-2 rounded">
     <img
              src="https://img.icons8.com/?size=160&id=ywULFSPkh4kI&format=png"
              alt="cart"
              className="w-4 h-4  mr-1"
            />
      <span className="text-sm font-medium">
        {user ? `${user.fName || user.given_name || user.name} ${user.lName || ''}` : 'Guest'}
      </span> </Link>
      <Link to="/university-of-ilorin" className="hover:bg-indigo-100 p-2 rounded">
      <img
              src="https://img.icons8.com/?size=100&id=37190&format=png"
              alt="cart"
              className="w-4 h-4 mt-1 mr-1"
            />
      <span className="text-sm">{campus || 'No Campus'}</span></Link>
      <Link to="/" className="hover:bg-indigo-100 p-2 rounded">
      <img
              src="https://img.icons8.com/?size=100&id=2797&format=png"
              alt="cart"
              className="w-4 h-4 mt-1 mr-1"
            />Home</Link>
      <Link to="/cart" className="hover:bg-indigo-100 p-2 rounded">
      <img
              src="https://img.icons8.com/?size=100&id=20629&format=png&color=000000"
              alt="cart"
              className="w-4 h-4 mt-1 mr-1"
            />My Hostel</Link>
            </div>
      <button className="hover:bg-red-100 p-2 rounded text-red-600 ml-auto" 
      onClick={handleLogout}>
              Logout</button>
    </nav>
  );
}

export default SideNav;
