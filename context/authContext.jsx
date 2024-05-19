'use client';

import React from 'react';
import { login as loginServer } from '@/actions/auth.action';
import { ZodError } from 'zod';
import { loginSchema } from '@/lib/zod/schema';

const initialValue = {
  loading: false,
  error: null,
  errors: null,
  login: async () => {},
};

export const AuthContext = React.createContext(initialValue);

const AuthProvider = ({ children }) => {
  const [loading, setloading] = React.useState(false);
  const [error, seterror] = React.useState(null);
  const [errors, seterrors] = React.useState(null);

  const login = async (values) => {
    try {
      setloading(true);
      seterror(null);
      seterrors(null);
      let validateFields = loginSchema.safeParse(values);
      if (validateFields.error) {
        seterrors(validateFields.error.issues);
        return;
      }
      const { email, password } = validateFields.data;
      const response = await loginServer({ email, password });
      if (response?.error) {
        seterror(response.error);
      }
    } catch (error) {
      if (error instanceof ZodError) return seterrors(error.issues);
      seterror('Something went wrong');
    } finally {
      setloading(false);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        login,
        loading,
        error,
        errors,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
