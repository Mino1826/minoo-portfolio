import React from "react";
import "./about.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import profile_img from "../../assets/img1.jpg";

const About = () => {
  return (
    <div className="about" id="about">
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={profile_img} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              After graduating with a degree in Russian Literature and
              Interpreter, I embarked on a journey into web development through
              self-study, online courses, and intensive bootcamps.
            </p>
            <p>
              This transition has not only enhanced my technical skills but also
              fostered a keen appreciation for continuous learning and
              adaptation in the dynamic field of technology.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill"><p>HTML & CSS <hr style={{width:'70%'}} /></p></div>
            <div className="about-skill"><p>React JS <hr style={{width:'40%'}} /></p></div>
            <div className="about-skill"><p>JavaScript<hr style={{width:'50%'}} /></p></div>
            <div className="about-skill"><p>Node.js <hr style={{width:'30%'}} /></p></div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
            <h1>1+</h1>
            <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
            <h1>10+</h1>
            <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievement">
            <h1>5+</h1>
            <p>HAPPY CLIENTS</p>
        </div>

      </div>
    </div>
  );
};

export default About;
