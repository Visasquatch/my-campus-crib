import React from "react";
import { Outlet } from "react-router-dom";
import Header from '../components/header.jsx';


const Layout = ({ setPage }) => {
  return (
    <div>
   <Header />  
    <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;