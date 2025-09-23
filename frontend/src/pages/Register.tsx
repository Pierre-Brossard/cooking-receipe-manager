import React from 'react';
import UserForm from '../components/UserForm';

const Register = () => {
  return <UserForm method="register" route="/api/user/register/" />;
};

export default Register;
