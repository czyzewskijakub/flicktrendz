import React, { useContext } from 'react';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from "./pages/RegisterPage";
import AuthContext from './components/store/auth-context';
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import './App.css';

const App = () => {
  // const context = useContext(AuthContext);
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Outlet />}>
                  <Route index element={<LoginPage />} />
                  <Route path="register" element={<RegisterPage />} />
                  <Route path="landing" element={<LandingPage />} />
              </Route>
          </Routes>
      </BrowserRouter>
  );
};

export default App;
