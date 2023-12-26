// PrivateRoute.js

import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Route } from 'react-router-dom';

const PrivateRoute = ({ path, ...props }) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return isAuthenticated ? (
    <Route path={path} {...props} />
  ) : (
    <Navigate to="/login" replace />
  );
};

export default PrivateRoute;
