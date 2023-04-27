import React from 'react';

import Card from '../components/UI/Card';

import classes from './About.module.css';
import svgImgAbout from '../../assets/DrawKit Vector Illustration Project Manager (9).svg';

const About = () => {
  return (
    <React.Fragment>
      <Card className={classes.about}>
        <p className={classes.paragraph}>
          The web app in question has three main features: predicting YouTube
          video popularity, analyzing data sets of YouTube videos, and
          authentication for users via email or Google account. <br />
          The video popularity prediction feature uses the author's channel
          statistics and metadata to make predictions about the number of views
          a video will receive. The data analysis feature allows users to
          explore and analyze data sets related to YouTube videos.
        </p>
        <div className={classes.control}>
          <img src={svgImgAbout} alt="About" className={classes.scale} />
        </div>
        <p>
          Finally, the authentication feature provides users with a secure login
          experience using either their standard email or Google account.
          Overall, this web app aims to provide users with valuable insights and
          predictions related to YouTube video popularity while ensuring their
          privacy and security.
        </p>
      </Card>
      {/* <Card className={classes.team}>
        <div className={classes.images}>
          <img src="https://cdn.discordapp.com/attachments/973592730678734872/1101284644340633681/image.png" />
          <img src="https://cdn.discordapp.com/attachments/973592730678734872/1101286226784424007/image.png" />
          <img src="https://cdn.discordapp.com/attachments/973592730678734872/1101285352968310784/image.png" />
          <img src="https://cdn.discordapp.com/attachments/973592730678734872/1101287385079222312/image.png" />
          <img src="https://cdn.discordapp.com/attachments/973592730678734872/1101288043442360360/image.png" />
          <img src="https://cdn.discordapp.com/attachments/973592730678734872/1101289324504436768/image.png" />
        </div>
      </Card> */}
    </React.Fragment>
  );
};

export default About;
