import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/authContext';

const AdminRoute = ({ children }) => {
  const { isLoggedIn, userRole } = useAuth();

  if (!isLoggedIn) {
    return <Navigate to="/" replace />;
  }

  if (userRole !== 'admin') {
    return <div className="p-6">🚫 Unauthorized access</div>;
  }

  return children;
};

export default AdminRoute;
