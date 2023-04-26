import React, { useState, useEffect } from 'react';

const AuthContext = React.createContext({
  isLoggedIn: false,
  isRegistering: false,
  onLogout: () => {},
  onLogin: (email, password) => {},
  onRegistering: () => {},
  onRegistered: (email, password) => {},
});

export const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isRegistering, setIsRegistering] = useState(false);

  useEffect(() => {
    const storedUserLoggedInInformation = localStorage.getItem('isLoggedIn');
    const storedUserRegisteringInformation = localStorage.getItem('isRegistering');

    if (storedUserLoggedInInformation === '1') {
      setIsLoggedIn(true);
    }
    if (storedUserRegisteringInformation === '1') {
      setIsRegistering(true)
    }
  }, []);

  const logoutHandler = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
  };

  const loginHandler = () => {
    localStorage.setItem('isLoggedIn', '1');
    setIsLoggedIn(true);
  };

  const registeringHandler = () => {
    localStorage.setItem('isRegistering', '1');
    setIsRegistering(true);
  };

  const registeredHandler = () => {
    localStorage.removeItem('isRegistering', '1');
    setIsRegistering(false);
  }

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        onLogout: logoutHandler,
        onLogin: loginHandler,
        isRegistering: isRegistering,
        onRegistering: registeringHandler,
        onRegistered: registeredHandler,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
