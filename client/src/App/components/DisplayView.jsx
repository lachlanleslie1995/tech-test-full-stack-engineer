import React from "react";
import styled from "styled-components";

const StyledViewContainer = styled.div`
background-color: grey;
  outline: solid 1px black;

    width: 100%;
    height calc(66% - 20px);
    margin: 10px;
    order: 1;
    text-align: center;
    `;

const DisplayView = () => {
  return (
    <StyledViewContainer>
      "Space isn't remote at all. It's only an hour's drive away, if your car
      could go straight upwards."
    </StyledViewContainer>
  );
};

export default DisplayView;
