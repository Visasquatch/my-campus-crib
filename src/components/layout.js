import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from '../components/header.jsx';
import SideNav from '../components/sideNav.jsx';
import LoginModal from '../components/loginModal';

const Layout = () => {
  const [showNav, setShowNav] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const toggleNav = () => {
    setShowNav(!showNav);
  };

  return (
    <div>
      <Header 
        showNav={showNav} 
        toggleNav={toggleNav} 
        openLoginModal={() => setIsLoginOpen(true)}
      />
      {showNav && (
        <div className={`${showNav ? 'animate-dropdown' : 'hidden'}`}>
          <SideNav />
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
