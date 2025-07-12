import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState(null);

  useEffect(() => {
  const storedStatus = localStorage.getItem('isLoggedIn') === 'true';
  const storedRole = localStorage.getItem('user_role');
  setIsLoggedIn(storedStatus);
  setUserRole(storedRole);

  const handleStorageChange = () => {
    const updatedStatus = localStorage.getItem('isLoggedIn') === 'true';
    const updatedRole = localStorage.getItem('user_role');
    setIsLoggedIn(updatedStatus);
    setUserRole(updatedRole);
  };

  window.addEventListener('storage', handleStorageChange);
  return () => {
    window.removeEventListener('storage', handleStorageChange);
  };
}, []);
  const login = (role) => {
  setIsLoggedIn(true);
  setUserRole(role);
  localStorage.setItem('isLoggedIn', 'true');
  localStorage.setItem('user_role', role);
};

  const logout = () => {
    setIsLoggedIn(false);
    setUserRole(null);
    localStorage.setItem('isLoggedIn', 'false');
    localStorage.removeItem('user_role');
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, userRole, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
