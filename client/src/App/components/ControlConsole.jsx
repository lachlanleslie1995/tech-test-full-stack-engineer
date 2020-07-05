import React from "react";
import styled from "styled-components";
import { ReactComponent as Rocket } from "../../assets/rocket.svg";
import { connect, useDispatch } from "react-redux";
import { getCapsules } from "../../redux/actions";

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

const capsuleClickHandler = () => {
  //   console.log(store.getState());
  //   store.dispatch(getCapsules());
};

const ControlConsole = () => {
  const dispatch = useDispatch();
  return (
    <StyledControlContainer>
      <StyledButton onClick={() => dispatch({ type: "REQUEST_CAPSULES" })}>
        Capsules
      </StyledButton>
      <Rocket />
      <StyledInput placeholder="text"></StyledInput>
      <StyledButton>Landing Pad</StyledButton>
    </StyledControlContainer>
  );
};

const mapStateToProps = (state) => ({
  capsules: state.capsules,
});

export default connect(mapStateToProps, { getCapsules })(ControlConsole);
