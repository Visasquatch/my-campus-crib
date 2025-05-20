import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from '../components/header.jsx';
import SideNav from '../components/sideNav.jsx';

const Layout = () => {
  const [showNav, setShowNav] = useState(false);

  const toggleNav = () => {
    setShowNav(!showNav);
  };

  return (
    <div>
    <Header showNav={showNav} toggleNav={() => setShowNav(prev => !prev)} />
    {showNav && (
 <div className={`${showNav ? 'animate-dropdown' : 'hidden'}`}>
 <SideNav />
</div>
)}
    <main className="px-4">
      <Outlet />
    </main>
  </div>
  );
};

export default Layout;
