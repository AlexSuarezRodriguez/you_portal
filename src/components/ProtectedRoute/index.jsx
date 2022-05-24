import React from 'react';
import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../context/authContext';

function ProtectedRoute({ children }) {
  const { user, loading } = useAuth();

  if (loading) return <h1>loading</h1>;
  if (!user) return <Navigate to="/login" />;
  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{children}</>;
}

export default ProtectedRoute;

ProtectedRoute.propTypes = {
  children: PropTypes.node,
};
ProtectedRoute.defaultProps = {
  children: '',
};
