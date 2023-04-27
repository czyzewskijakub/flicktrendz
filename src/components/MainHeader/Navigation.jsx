import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';

import AuthContext from '../Store/auth-context';
import classes from './Navigation.module.css';

const Navigation = () => {
  const ctx = useContext(AuthContext);

  return (
    <nav className={classes.nav}>
      <ul>
        {ctx.isLoggedIn && (
          <li>
            <NavLink to="/profile" end>
              Users
            </NavLink>
          </li>
        )}
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        {ctx.isLoggedIn && (
          <li>
            <button onClick={ctx.onLogout}>Logout</button>
          </li>
        )}
        {!ctx.isLoggedIn && (
          <li>
            <NavLink to="login">Login</NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
