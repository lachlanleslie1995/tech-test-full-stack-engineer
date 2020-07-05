import React, { useState, useContext } from "react";
import axios from "axios";
import styled from "styled-components";
import { ReactComponent as Rocket } from "../../assets/rocket.svg";
import { SpaceDataContext } from "../Utils/spaceDataContext";

const StyledControlContainer = styled.div`
  display: flex;
  flow: row nowrap;
  justify-content: space-around;
  outline: solid 1px black;
  height: calc(34% - 30px);
  margin: 15px 10px;

  width: 100%;
  order: 2;
  svg {
    width: 20%;
    fill: #003366;
    outline: solid 1px black;
    padding: 10px 0;
  }
  button {
    height: 80%;

    margin: auto 0;
  }
`;

const StyledButton = styled.button`
  border-radius: 15px;
  width: 150px;
`;
const StyledInput = styled.input`
  height: 60%;
  margin: auto 0;
  font-size: 15px;
  text-align: center;
`;

const ControlConsole = () => {
  const { setCapsules, setLandingPad } = useContext(SpaceDataContext);

  const getCapsules = async () => {
    let response = await axios.get("http://localhost:4000/api/v1/capsule");
    setCapsules(response.data.result);
  };

  const getLandingPad = async () => {
    let id = document.getElementById("landingPadInput").value;
    let response = await axios.get(
      `http://localhost:4000/api/v1/landingpad/${id}`
    );
    setLandingPad(response.data.result);
  };

  return (
    <StyledControlContainer>
      <StyledButton onClick={getCapsules}>Capsules</StyledButton>
      <Rocket />
      <StyledInput id="landingPadInput" placeholder="text"></StyledInput>
      <StyledButton onClick={getLandingPad}>Landing Pad</StyledButton>
    </StyledControlContainer>
  );
};

export default ControlConsole;
