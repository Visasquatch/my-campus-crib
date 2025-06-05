import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './header.css';
// import { useSelector } from 'react-redux';
import Login from '../pages/login';
import Signup from '../pages/signup';

function Header({ setPage, onHomeClick, showNav, toggleNav }) {
  const [user, setUser] = useState(null);
//  const [campus, setCampus] = useState('');
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
 // const carts = useSelector(store => store.cart.hostels);

  useEffect(() => {
    const loadUser = () => {
      const storedUser = localStorage.getItem('google_user') || localStorage.getItem('manual_user');
 //     const storedCampus = localStorage.getItem('user_campus');
    
      if (storedUser) setUser(JSON.parse(storedUser));
      else setUser(null); 
  
//      if (storedCampus) setCampus(storedCampus);
    };
  
    loadUser();
  
    window.addEventListener('storage', loadUser);
  
    return () => {
      window.removeEventListener('storage', loadUser);
    };
  }, []);

  const handleLoginSuccess = (userData) => {
    console.log("Logged in user:", userData);
    setUser(userData);
    localStorage.setItem('google_user', JSON.stringify(userData));
    setShowLogin(false);
  };
  const handleSignupSuccess = (userData) => {
    setUser(userData);
    localStorage.setItem('google_user', JSON.stringify(userData));
    setShowSignup(false);
  };

  return (
    <header className="flex justify-between items-center">
      <Link to="/">
        <img
          className="w-20 mr-auto"
          src="https://th.bing.com/th?id=OIP.mUUdJfXv09w0TivG9bSRGwHaF7&w=279&h=223&c=8&rs=1&qlt=90&o=6&dpr=1.4&pid=3.1&rm=2"
          alt="logo"
        />
      </Link>

      <section className="button-container flex items-center ml-auto space-x-4">
        {user ? (
          <>
        <button onClick={toggleNav} className="flex items-center space-x-2 user-name-button">
        <span className="text-xl">Hi, {user.fName || user.name || user.given_name || user.email}</span>
  <svg className={`w-4 h-4 transform transition-transform duration-200 ${showNav ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"></path>
  </svg>
</button>

          </>
        ) : (
          <>
            <button onClick={() => setShowLogin(true)} className="login-button">
              Login
            </button>
            {showLogin && (
              <div className="modal">
                <div className="modal-content">
                  <Login onClose={() => setShowLogin(false)} onLoginSuccess={handleLoginSuccess} />
                </div>
              </div>
            )}

            <button onClick={() => setShowSignup(true)} className="signUp-button">
              Sign up
            </button>
            {showSignup && (
              <div className="modal">
                <div className="modal-content">
                  <Signup onClose={() => setShowSignup(false)} onSignupSuccess={handleSignupSuccess} />
                </div>
              </div>
            )}
          </>
        )}
        <div className="w-12 h-12 bg-gray-100 rounded-full flex justify-center items-center relative mt-3">
          <Link to="/cart">
            <img
              src="https://img.icons8.com/?size=100&id=20629&format=png&color=000000"
              alt="cart"
              className="w-8"
            />
            <span
              className="absolute top-2/3 right-1/2 bg-red-500 text-white text-sm w-5 h-5 rounded-full flex justify-center items-center"
            >
            </span>
          </Link>
        </div>
      </section>
    </header>
  );
}

export default Header;
