import React from 'react';
import UserForm from '../components/forms/UserForm';

const Login = () => {
  return <UserForm route="/api/token/" method="login" />;
};

export default Login;
