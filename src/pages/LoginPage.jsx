import React, { useContext } from 'react';

import AuthContext from '../components/store/auth-context';

const LoginPage = () => {
  const context = useContext(AuthContext);

  return <button onClick={context.onLogin}>Login</button>;
};

export default LoginPage;
