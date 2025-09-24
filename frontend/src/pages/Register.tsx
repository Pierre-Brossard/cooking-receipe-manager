import React from 'react';
import UserForm from '../components/forms/UserForm';

const Register = () => {
  return <UserForm method="register" route="/api/user/register/" />;
};

export default Register;
