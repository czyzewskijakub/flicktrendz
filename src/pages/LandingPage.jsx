import React from "react";
import './LandingPage.css';

import Header from '../components/Header/Header'
import LandingTiles from '../components/LandingTiles'

const LandingPage = () => {
  return (
    <div className="container">
      <Header></Header>
      <LandingTiles></LandingTiles>
    </div>
  )
}

export default LandingPage;