import styled from "styled-components";

const Application = styled.div`
  font-family: Roboto;
  font-weight: 300;
  font-size: 25px;
  font-style: italic;
  color: white;
  background-color: white;
  outline: solid 1px black;
  display: flex;
  flex-diraction: row;
  flex-wrap: wrap;
  position: absolute;
  top: 25%;
  left: 25%;
  width: 50%;
  height: 50%;

  @media only screen and (max-width: 1024px) {
    width: 100%;
    height: 100%;
    top: 0%;
    left: 0%;
    flex-direction: column;
  }
`;

export { Application };
