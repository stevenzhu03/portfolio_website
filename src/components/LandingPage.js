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
      </div>
    </div>
  );
};

export default LandingPage;
