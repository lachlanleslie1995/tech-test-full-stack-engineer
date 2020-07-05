import React, { createContext, useState } from "react";

const SpaceDataContext = createContext();

const SpaceDataProvider = (props) => {
  const [capsules, setCapsules] = useState([]);
  const [landingPad, setLandingPad] = useState({});

  const value = {
    capsules,
    setCapsules,
    landingPad,
    setLandingPad,
  };
  return (
    <SpaceDataContext.Provider value={value}>
      {props.children}
    </SpaceDataContext.Provider>
  );
};

export { SpaceDataContext, SpaceDataProvider };
