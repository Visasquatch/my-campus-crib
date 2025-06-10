import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useMsal } from "@azure/msal-react";

function SideNav() {
  const [user, setUser] = useState(null);
  const [campus, setCampus] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const storedUser = localStorage.getItem('google_user') || localStorage.getItem('manual_user');
    const storedCampus = localStorage.getItem('user_campus');

    if (storedUser) setUser(JSON.parse(storedUser));
    if (storedCampus) setCampus(storedCampus);
  }, []);

  const { instance } = useMsal();

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('google_user');
    localStorage.removeItem('google_token');
    localStorage.removeItem('manual_user');
    localStorage.removeItem('user_campus');
    window.dispatchEvent(new Event('storage'));
    const account = instance.getActiveAccount();
    if (account) {
      instance.logoutRedirect();
    } else {
      console.log("No active MSAL account — just cleared local storage.");
    }
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="w-full flex items-center p-3 bg-gray-100 border-b border-gray-300 shadow-sm relative z-10">
      <div className="hidden md:flex flex-grow items-center justify-start space-x-6 lg:space-x-9 ml-2">
        <Link to="/profile" className="flex items-center hover:bg-indigo-100 p-2 rounded">
          <img
            src="https://img.icons8.com/?size=160&id=ywULFSPkh4kI&format=png"
            alt="profile icon"
            className="w-4 h-4 mr-1"
          />
          <span className="text-sm font-medium whitespace-nowrap">
            {user ? `${user.fName || user.given_name || user.name || ''} ${user.lName || ''}` : 'Guest'}
          </span>
        </Link>
        <Link to="/university-of-ilorin" className="flex items-center hover:bg-indigo-100 p-2 rounded">
          <img
            src="https://img.icons8.com/?size=100&id=37190&format=png"
            alt="campus icon"
            className="w-4 h-4 mt-1 mr-1"
          />
          <span className="text-sm whitespace-nowrap">{campus || 'No Campus'}</span>
        </Link>
        <Link to="/" className="flex items-center hover:bg-indigo-100 p-2 rounded">
          <img
            src="https://img.icons8.com/?size=100&id=2797&format=png"
            alt="home icon"
            className="w-4 h-4 mt-1 mr-1"
          />
          <span className="text-sm whitespace-nowrap">Home</span>
        </Link>
        <Link to="/cart" className="flex items-center hover:bg-indigo-100 p-2 rounded">
          <img
            src="https://img.icons8.com/?size=100&id=20629&format=png&color=000000"
            alt="my hostel icon"
            className="w-4 h-4 mt-1 mr-1"
          />
          <span className="text-sm whitespace-nowrap">My Hostel</span>
        </Link>
      </div>
      <button
        className="hidden md:block hover:bg-red-100 p-2 rounded text-red-600 ml-auto"
        onClick={handleLogout}
      >
        Logout
      </button>
      <div className="md:hidden flex flex-grow justify-end">
        <button onClick={toggleMobileMenu} className="p-2 rounded hover:bg-gray-200">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-white z-20 flex flex-col p-4 overflow-y-auto">
          <button onClick={toggleMobileMenu} className="absolute top-4 right-4 p-2 rounded hover:bg-gray-200">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
          <div className="flex flex-col space-y-4 pt-16 pb-8 text-xl w-full px-4"> 
            <Link onClick={toggleMobileMenu} to="/profile" className="flex items-center hover:bg-indigo-100 p-3 rounded w-full"> 
              <img src="https://img.icons8.com/?size=160&id=ywULFSPkh4kI&format=png" alt="profile icon" className="w-6 h-6 mr-3" />
              <span className="font-medium whitespace-nowrap">
                {/* Robust user name fallback */}
                {user ? `${user.fName || user.given_name || user.name || ''} ${user.lName || ''}` : 'Guest'}
              </span>
            </Link>
            <Link onClick={toggleMobileMenu} to="/university-of-ilorin" className="flex items-center hover:bg-indigo-100 p-3 rounded w-full">
              <img src="https://img.icons8.com/?size=100&id=37190&format=png" alt="campus icon" className="w-6 h-6 mr-3" />
              <span className="whitespace-nowrap">{campus || 'No Campus'}</span>
            </Link>
            <Link onClick={toggleMobileMenu} to="/" className="flex items-center hover:bg-indigo-100 p-3 rounded w-full">
              <img src="https://img.icons8.com/?size=100&id=2797&format=png" alt="home icon" className="w-6 h-6 mr-3" />
              <span className="whitespace-nowrap">Home</span>
            </Link>
            <Link onClick={toggleMobileMenu} to="/cart" className="flex items-center hover:bg-indigo-100 p-3 rounded w-full">
              <img src="https://img.icons8.com/?size=100&id=20629&format=png&color=000000" alt="my hostel icon" className="w-6 h-6 mr-3" />
              <span className="whitespace-nowrap">My Hostel</span>
            </Link>
            <button
              className="hover:bg-red-100 p-3 rounded text-red-600 w-full mt-6"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

export default SideNav;