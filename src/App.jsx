import React, { useContext } from 'react';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import AuthContext from './components/store/auth-context';

import './App.css';

const App = () => {
  const context = useContext(AuthContext);
  return (
    <React.Fragment>
      <main>
        {!context.isLoggedIn && <LoginPage />}
        {context.isLoggedIn && <LandingPage />}
      </main>
    </React.Fragment>
  );
};

export default App;
