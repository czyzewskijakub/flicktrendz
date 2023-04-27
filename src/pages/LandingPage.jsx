import React from 'react';

import Item from '../components/LandingPageItems/Item';

import classes from './LandingPage.module.css';
import svgImgStatistic from '../../assets/DrawKit Vector Illustration Influencer & Content Creator Illustrations (2).svg';
import svgImgModel from '../../assets/DrawKit Vector Illustration Influencer & Content Creator Illustrations (5).svg';
import svgImgAbout from '../../assets/DrawKit Vector Illustration Influencer & Content Creator Illustrations (10).svg';

const LandingPage = () => {
  return (
    <React.Fragment>
      <div className={classes['flex-container']}>
        <Item
          title="About project"
          svg={svgImgAbout}
          text="Flicktrendz is a project focused on developing a prediction model for young content creators on YouTube. The model aims to forecast the popularity of a video before it is uploaded, which can help creators optimize their content and increase their reach."
        />
        <Item
          title="Statistic"
          svg={svgImgStatistic}
          text="A statistics panel containing statistics about the top trending YouTube videos provides insights into the performance and popularity of videos on the platform. The panel can display metrics such as the number of views, likes, dislikes, comments, and shares, as well as engagement rates and audience demographics"
        />
        <Item
          title="Predict"
          svg={svgImgModel}
          text="The project utilizes machine learning algorithms to analyze trends and patterns in YouTube data, including views, likes, comments, and shares. By providing accurate predictions, Flicktrendz can help young creators make informed decisions about their content and grow their channels more efficiently."
        />
      </div>
    </React.Fragment>
  );
};

export default LandingPage;
