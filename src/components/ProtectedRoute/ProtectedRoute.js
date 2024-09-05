import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ element }) => {
  const { loggedIn } = useSelector((state) => state.user);

  if (!loggedIn) {
    return <Navigate to="/signin" />;
  }

  return element;
};

export default ProtectedRoute;
