import React from "react";

const LandingPage = (props) => {
  return (
    <div className="landing-page">
      <div className="landing-page-headings">
        <h1>
          Hello, I'm <span className="landing-page-name">Steven Zhu</span>.
        </h1>
        <h2>
          A software engineer based in{" "}
          <span className="landing-page-city">New York City</span>.
        </h2>
        <div className="landing-page-icons">
            <a href="https://www.linkedin.com/in/steven-zhu-a4b989115/">
            <img src={require("../assets/linkedin.svg")} width="50px" alt="LinkedIn"/>
            </a>

            <a href="https://github.com/stevenzhu03">
            <img src={require("../assets/github.svg")} width="50px" alt="GitHub"/>
            </a>

            <a href="https://medium.com/@stevenzhu03">
            <img src={require("../assets/medium.svg")} width="50px" alt="Medium"/>
            </a>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
