import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

// import MainHeader from './components/MainHeader/MainHeader';
import LandingPage from './pages/LandingPage';
// import AuthContext from './components/Store/auth-context';
import Login from './pages/Login';

// import classes from './App.module.css';
import Root from './pages/Root';
import Register from './pages/Register';
import About from './pages/About';
import UserProfile from './pages/UserProfile';
import ProtectedRoute from './pages/ProtectedRoute';
import Predict from './pages/Predict';
import TilesList from './pages/TilesList';

const router = createBrowserRouter([
  {
    path: '',
    element: <Root />,
    children: [
      { index: true, element: <LandingPage /> },
      { path: 'login', element: <Login /> },
      { path: 'register', element: <Register /> },
      {
        path: 'profile',
        element: (
          <ProtectedRoute>
            <UserProfile />
          </ProtectedRoute>
        ),
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'predict',
        element: (
          <ProtectedRoute>
            <Predict />
          </ProtectedRoute>
        ),
      },
      {
        path: 'statistic',
        element: (
          <ProtectedRoute>
            <TilesList />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
