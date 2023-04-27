import React, { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

import AuthContext from '../Store/auth-context';
import classes from './Navigation.module.css';

const Navigation = () => {
  const ctx = useContext(AuthContext);

  const navigate = useNavigate();

  const logoutHandler = () => {
    ctx.onLogout();
    navigate('/');
  };

  return (
    <nav className={classes.nav}>
      <ul>
        {ctx.isLoggedIn && (
          <li>
            <NavLink to="/profile" end>
              Profile
            </NavLink>
          </li>
        )}
        {ctx.isLoggedIn && (
          <li>
            <NavLink to="/predict" end>
              Model AI
            </NavLink>
          </li>
        )}
        {ctx.isLoggedIn && (
          <li>
            <NavLink to="/statistic" end>
              Statistics
            </NavLink>
          </li>
        )}
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        {ctx.isLoggedIn && (
          <li>
            <button onClick={logoutHandler}>Logout</button>
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
