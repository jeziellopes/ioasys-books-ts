import React from 'react';
import { RouteProps } from 'react-router';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { isAuthenticated } from 'lib/contexts/auth';
import { Blank, Books, SignIn } from 'pages';
import { ROUTES } from 'constants/urls';

const PrivateRoute = ({ path, element, children, ...props }: RouteProps) => {
  if (!isAuthenticated()) {
    return <Navigate to={ROUTES.signIn.base} />;
  }

  return (
    <Route path={path} element={element} {...props}>
      {children}
    </Route>
  );
};

const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <PrivateRoute path={ROUTES.app.base}>
        <Route path={ROUTES.app.getLink('books')} element={<Books />} />
      </PrivateRoute>
      <Route path="*" element={<Blank />} />

      <Route path={ROUTES.signIn.base} element={<SignIn />} />
    </Routes>
  </BrowserRouter>
);

export default AppRoutes;
