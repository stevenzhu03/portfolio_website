import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import LandingPage from "./components/LandingPage";

function App() {
  return (
    <div>
      <LandingPage />
      
      <Switch>
        <Route exact path="/about_me" component={AboutMe} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/resume" component={Resume} />
      </Switch>
    </div>
  );
}

export default App;
