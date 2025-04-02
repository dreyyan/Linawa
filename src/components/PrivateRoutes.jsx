import React from 'react';
import { Route, Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'; 

const PrivateRoutes = () => {
  const { user } = useAuth(); 

  // If there's no user (not authenticated), redirect to the login page
  if (!user) {
    return <Navigate to="/" />; 
  }

  // If the user is authenticated, render the protected routes
  return <Outlet />;
};

export default PrivateRoutes;
