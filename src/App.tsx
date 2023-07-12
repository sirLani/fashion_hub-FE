import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { NavBar } from "./components/base";
import Home from "./views/Home";

const theme = {
  primary: "888F94",
  textColor: "000000",
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavBar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
