import React from 'react';
import AuthProvider from './authContext';

const ContextProvider = ({ children }) => {
  return <AuthProvider>{children}</AuthProvider>;
};

export default ContextProvider;
