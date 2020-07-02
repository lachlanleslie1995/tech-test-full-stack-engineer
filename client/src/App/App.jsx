import { hot } from "react-hot-loader/root";
import React from "react";
import GlobalStyle from "../theme";
import { Application } from "./styles";
import ControlConsole from "./components/ControlConsole";
import DisplayView from "./components/DisplayView";

const App = () => (
  <>
    <Application>
      <DisplayView />

      <ControlConsole />
    </Application>
    <GlobalStyle />
  </>
);

export default hot(App);
