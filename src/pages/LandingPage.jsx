import React, { useContext } from "react";
import './LandingPage.css';

import Header from '../components/Header/Header'
import LandingTiles from '../components/LandingTiles'
import AuthContext from "../components/store/auth-context";
import Button from "../components/UI/Button/Button";
import {useNavigate} from "react-router-dom";

const LandingPage = () => {
  const context = useContext(AuthContext);
  const navigate = useNavigate();

  const logoutHandler = () => {
      context.onLogout();
      navigate('/');
  }

  return (
    <div>
      <Header></Header>
      <LandingTiles></LandingTiles>
      <Button onClick={logoutHandler}>Logout</Button>
    </div>
  )
}

export default LandingPage;