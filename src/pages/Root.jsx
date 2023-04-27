import React from 'react';
import { Outlet } from 'react-router-dom';

import MainHeader from '../components/MainHeader/MainHeader';

const Root = () => {
  return (
    <React.Fragment>
      <MainHeader />
      <main>
        <Outlet />
      </main>
    </React.Fragment>
  );
};

export default Root;
