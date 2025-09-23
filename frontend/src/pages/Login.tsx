import React from 'react';
import UserForm from '../components/UserForm';

const Login = () => {
  return <UserForm route="/api/token/" method="login" />;
};

export default Login;
