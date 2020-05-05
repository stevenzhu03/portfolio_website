import React from "react";
import "./App.css";
// import { Route, Switch } from "react-router-dom";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import LandingPage from "./components/LandingPage";

function App() {
  return (
    <div>
      <LandingPage />
      <AboutMe/>
      <Projects/>
    </div>
  );
}

export default App;
