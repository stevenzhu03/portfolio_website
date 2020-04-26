import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import LandingPage from "./components/LandingPage";

function App() {
  return (
    <div>
      <LandingPage />
      <Route exact path="/about_me" component={AboutMe} />
      <Route exact path="/projects" component={Projects} />
      <Route exact path="/resume" component={Resume} />
    </div>
  );
}

export default App;
