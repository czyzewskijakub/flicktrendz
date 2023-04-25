import React, { useContext } from "react";
import './LandingPage.css';

import Header from '../components/Header/Header'
import LandingTiles from '../components/LandingTiles'
import AuthContext from "../components/store/auth-context";
import Button from "../components/UI/Button/Button";

const LandingPage = () => {
  const context = useContext(AuthContext);

  return (
    <div>
      <Header></Header>
      <LandingTiles></LandingTiles>
      <Button onClick={context.onLogout}>Logout</Button>
    </div>
  )
}

export default LandingPage;