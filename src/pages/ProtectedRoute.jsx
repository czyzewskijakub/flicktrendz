import React from 'react';
import {
  Navigate,
  // useLocation
} from 'react-router-dom';

import axios from 'axios';

const ProtectedRoute = ({ children }) => {
  let token = localStorage.getItem('isLoggedIn');

  const token_text = `Bearer ${token}`;

  axios.post('http://localhost:5000/users/authorize', {
    
  }, {
    headers: {
      'Authorization': token_text
    }
  })
  .then(function (response) {
  })
  .catch(function (error) {
    token = null
  });

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return children;

};

export default ProtectedRoute;
