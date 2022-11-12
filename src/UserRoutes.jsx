import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import PrivateRoute from 'components/PivateRoute/PrivateRoute';
import PublicRoute from 'components/PublicRoute/PublicRoute';
import SharedLayout from 'components/SharedLayout/SharedLayout';
const RegisterPage = lazy(() => import('./pages/RegisterPage/RegisterPage'));
const LoginPage = lazy(() => import('./pages/LoginPage/LoginPage'));
const MyPhonebookPage = lazy(() =>
  import('./pages/MyPhonebookPage/MyPhoneBookPage')
);
const NotFoundPage = lazy(() => import('./pages/NotFoundPage/NotFoundPage'));

const UserRoutes = () => {
  return (
    <Suspense fallback={<p>...Load page</p>}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route element={<PublicRoute />}>
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
          </Route>

          <Route element={<PrivateRoute />}>
            <Route path="/contacts" element={<MyPhonebookPage />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
};

export default UserRoutes;
