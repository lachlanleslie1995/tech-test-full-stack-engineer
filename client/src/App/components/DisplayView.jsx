import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { SpaceDataContext } from "../Utils/spaceDataContext";

const StyledViewContainer = styled.div`
    background-color: grey;
    outline: solid 1px black;

    width: 100%;
    height calc(66% - 20px);
    margin: 10px;
    overflow-y: scroll;
    order: 1;
    text-align: start;
    `;

const StyledListItem = styled.li`
  text-align: start;
  font-size: 15px;
`;

const StyledListTitle = styled.div`
  margin-left: 20px;
  text-align: start;
  font-size: 25px;
`;

const DisplayView = () => {
  const { capsules, landingPad } = useContext(SpaceDataContext);

  const loopMissions = (missions) => {
    let missionString = "";
    missions.map((mission) => {
      missionString =
        missionString + `name: ${mission.name}, flight: ${mission.flight}, `;
    });
    return missionString.toString();
  };

  return (
    <StyledViewContainer>
      <StyledListTitle>LandingPad:</StyledListTitle>
      <ul>
        {Object.keys(landingPad).length === 0 &&
        landingPad.constructor === Object ? (
          <div>Search for a landing pad by id</div>
        ) : (
          <StyledListItem>{`id: ${landingPad.id},full_name: ${landingPad.full_name},status: ${landingPad.status},location: name: ${landingPad.location.name},region: ${landingPad.location.region},latitude: ${landingPad.location.latitude},longitude: ${landingPad.location.latitude}`}</StyledListItem>
        )}
      </ul>
      <StyledListTitle>Capsules:</StyledListTitle>
      <ul>
        {!(Array.isArray(capsules) && capsules.length) ? (
          <div>Search for capsules</div>
        ) : (
          capsules.map((capsule, index) => {
            return (
              <StyledListItem key={index}>
                {`capsule_serial: ${capsule.capsule_serial}, capsule_id: ${
                  capsule.capsule_id
                }, status: ${capsule.status}, original_launch: ${
                  capsule.origin_launch
                },
                   original_launch_unix: ${
                     capsule.original_launch_unix
                   }, missions:
                   ${loopMissions(capsule.missions)}
                  , landings: ${capsule.landings}, type: ${
                  capsule.type
                }, details: ${capsule.details}, reuse_count: ${
                  capsule.reuse_count
                }`}
              </StyledListItem>
            );
          })
        )}
      </ul>
    </StyledViewContainer>
  );
};

export default DisplayView;
