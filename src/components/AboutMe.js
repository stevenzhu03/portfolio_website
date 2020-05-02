import React from "react";
import Avatar from "@material-ui/core/Avatar";

const AboutMe = (props) => {
  return (
    <div className="about-me-page" id="about_me">
      <div className="about-me-photo">
        <Avatar
          style={{
            margin: "10px",
            width: "550px",
            height: "550px",
          }}
          src={require("../assets/headshot.png")}
          alt="steven-zhu-profile"
        />
      </div>

      <div className="about-me-text">
        <h1> About Me </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore
          illo, praesentium reiciendis quae asperiores ipsum excepturi sapiente
          placeat tempore assumenda soluta provident, vitae minus autem sed?
          Quos animi ad omnis voluptatem repellat eius accusamus cumque dicta
          minus sunt minima dolorum, quae molestiae odit maiores soluta. Eius
          aut iusto illo rem? Sapiente perspiciatis dolores consequuntur
          expedita blanditiis, rerum iusto, optio nihil aspernatur neque facilis
          quae aut tenetur! Corporis eligendi rem, eos doloribus velit
          doloremque porro quasi corrupti minus! Exercitationem, provident
          magni? Modi non aliquam magni, animi assumenda voluptatem rerum nisi
          molestiae consectetur repellat ex laudantium veniam autem,
          perspiciatis nulla? Ipsum, enim!{" "}
        </p>

        <h1>Technical Skills</h1>
        <div className="about-me-languages">
            <img src ={require("../assets/javascript-plain.svg")} height="50px" width="50px" alt="javascript" />
            <span>Javascript</span>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
