import React from "react";

const UserProfile = ({ name, avatarUrl }) => {
  return (
    <React.Fragment>
      <img src={avatarUrl} alt={`${name}'s avatar`} />
      <h2>{name}</h2>
    </React.Fragment>
  );
};

export default UserProfile;