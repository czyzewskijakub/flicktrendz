import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// import MainHeader from './components/MainHeader/MainHeader';
import LandingPage from './pages/LandingPage';
// import AuthContext from './components/Store/auth-context';
import Login from './pages/Login';

// import classes from './App.module.css';
import Root from './pages/Root';
import Register from './pages/Register';
import About from './pages/About';
import UserProfile from './pages/UserProfile';

const router = createBrowserRouter([
  {
    path: '',
    element: <Root />,
    children: [
      { index: true, element: <LandingPage /> },
      { path: 'login', element: <Login /> },
      { path: 'register', element: <Register />},
      { path: 'profile', element: <UserProfile />},
      { path: 'about', element: <About />},
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
