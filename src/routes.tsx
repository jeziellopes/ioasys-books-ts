import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignIn from 'pages/auth/SignIn';
import Blank from 'pages/Blank';

export interface RouteProps {
  children?: React.ReactNode;
  element?: React.ReactElement | null;
  path?: string;
}

const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="*" element={<Blank />} />
      <Route path="/" element={<Blank />} />
      <Route path="/sign-in" element={<SignIn />} />
    </Routes>
  </BrowserRouter>
);

export default AppRoutes;
