import LoginForm from 'components/LoginForm/LoginForm';
import React from 'react';
// import { isLogin } from 'redux/auth/authSelector';
// import { useSelector } from 'react-redux';
// import { Navigate } from 'react-router-dom';

export default function LoginPage() {
  // const isUserLogin = useSelector(isLogin);
  // if (isUserLogin) {
  //   return <Navigate to="/contacts" />;
  // }
  return (
    <div>
      <LoginForm />
    </div>
  );
}
