import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from '../components/header.jsx';
import SideNav from '../components/sideNav.jsx';
import LoginModal from '../components/loginModal';

const Layout = () => {
  const [showNav, setShowNav] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [user, setUser] = useState(null);

  const toggleNav = () => {
    setShowNav(!showNav);
  };
   useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('current_user'));
    if (storedUser) {
      setUser(storedUser);
    }
    window.addEventListener("storage", () => {
      const updatedUser = JSON.parse(localStorage.getItem('current_user'));
      setUser(updatedUser);
    });
  }, []);

  return (
    <div>
      <Header 
        showNav={showNav} 
        toggleNav={toggleNav} 
        openLoginModal={() => setIsLoginOpen(true)}
        user={user}
      />
      {showNav && (
        <div className={`${showNav ? 'animate-dropdown' : 'hidden'}`}>
          <SideNav user={user} />
        </div>
      )}
      <main className="px-4">
        <Outlet />
      </main>

      <LoginModal 
        isOpen={isLoginOpen} 
        onClose={() => setIsLoginOpen(false)} 
      />
    </div>
  );
};

export default Layout;
