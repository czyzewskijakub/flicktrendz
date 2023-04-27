import React, { useState } from 'react';

import Input from '../UI/Input';

const ChannelViewCountInput = (props) => {
  const [channelViewCount, setChannelViewCount] = useState('');

  const channelViewCountHandler = (event) => {
    setChannelViewCount(event.target.value);
  };

  return (
    <React.Fragment>
      <Input
        id="channelViewCount"
        label="Channel View Count"
        type="number"
        onChange={channelViewCountHandler}
        value={channelViewCount}
      />
    </React.Fragment>
  );
};

export default ChannelViewCountInput;
