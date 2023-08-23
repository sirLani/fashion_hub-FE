import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { NavBar } from "./components/base";
import Home from "./views/Home";
import { Footer } from "./components/Footer";
import { Login } from "./views/Login";
import { Register } from "./views/Register";

const theme = {
  primary: "#888F94",
  textcolor: "#000000",
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <NavBar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
