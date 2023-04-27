import React from "react";
import { Outlet } from "react-router-dom";

import MainHeader from '../components/MainHeader/MainHeader'

const Root = () => {
  // const navigation = useNavigation();


  return <React.Fragment>
    <MainHeader />
    <main>
      <Outlet />
    </main>
  </React.Fragment>
}

export default Root;