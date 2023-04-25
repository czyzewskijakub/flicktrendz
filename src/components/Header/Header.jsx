import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div>
      <nav className="nav-bar">
        <ul>
          <li>
            <a href="/login">Login</a>
          </li>
        </ul>
      </nav>
      <div className="site-title">
        <h1 className='title'>Flicktrendz</h1>
      </div>
    </div>
  );
};

export default Header;
