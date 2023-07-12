import React from "react";
import "./App.css";
import { ThemeProvider } from "styled-components";
import { NavBar } from "./components";

const theme = {
  primary: "888F94",
  textColor: "000000",
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavBar />
    </ThemeProvider>
  );
}

export default App;
