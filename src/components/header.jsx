import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import { useSelector } from 'react-redux';
import Login from '../pages/login';
import Signup from '../pages/signup';

function Header({ setPage }) {
  const [user, setUser] = useState(null);
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const carts = useSelector(store => store.cart.hostels);

  useEffect(() => {
    const storedUser = localStorage.getItem('google_user');
    if (storedUser) setUser(JSON.parse(storedUser));
  }, []);

  const handleLoginSuccess = (userData) => {
    setUser(userData);
    localStorage.setItem('google_user', JSON.stringify(userData));
    setShowLogin(false);
  };
  const handleSignupSuccess = (userData) => {
    setUser(userData);
    localStorage.setItem('google_user', JSON.stringify(userData));
    setShowSignup(false);
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('google_user');
    localStorage.removeItem('google_token');
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
            <span className="user-name mr-4 text-xl">Hi, {user.name || user.given_name || user.email}</span>
            <button
              onClick={handleLogout}
              className="logout-button bg-red-500 text-white px-3 py-1 rounded"
            >
              Logout
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
              {totalQuantity}
            </span>
          </Link>
        </div>
      </section>
    </header>
  );
}

export default Header;
