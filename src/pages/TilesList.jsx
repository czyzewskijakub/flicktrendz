import React, {useState} from 'react';

import StatisticsForm from '../components/Charts/StatisticsForm';
import DisplayCategory from '../components/Charts/DisplayCategory';

const TilesList = () => {
  const [userPick, setUserPick] = useState(1)

  const userPickHandler = (pick) => {
    setUserPick(pick);
  }

  return (
    <React.Fragment>
      <StatisticsForm onUserPick={userPickHandler} />
      <DisplayCategory pickedCategory={userPick} />
    </React.Fragment>
  );
};

export default TilesList;
