import React from 'react';
import RegisterForm from 'components/RegisterForm/RegisterForm';
import { isLogin } from 'redux/auth/authSelector';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export default function RegisterPage() {
  const isUserLogin = useSelector(isLogin);
  if (isUserLogin) {
    return <Navigate to="/contacts" />;
  }
  return (
    <div>
      <RegisterForm />
    </div>
  );
}
