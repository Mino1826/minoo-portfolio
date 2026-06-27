import React from "react";
import "./about.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import profile_img from "../../assets/img1.jpg";

const skills = [
  "Java",
  "Spring Boot",
  "Spring Data JPA",
  "Hibernate",
  "REST APIs",
  "SQL",
  "MongoDB",
  "React",
  "JavaScript",
  "Node.js",
  "Express.js",
  "Python Basics",
  "HTML",
  "CSS",
  "Tailwind CSS",
  "Git",
  "GitHub",
  "Postman",
  "Maven",
];

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} alt="" />
      </div>

      <div className="about-intro">
        <p>
          I am a Junior Full Stack Developer with a strong interest in backend
          development using Java and Spring Boot. I enjoy building REST APIs,
          solving problems, and improving my skills through hands-on projects.
        </p>

        <p>
          After graduating with a degree in Russian Literature and
          Interpretation, I transitioned into software development through
          self-study, online courses, and bootcamps. Since then, I have built
          several projects using Java, Spring Boot, React, JavaScript, Node.js,
          Express.js, SQL, and MongoDB, while also learning Python basics.
        </p>
      </div>

      <div className="about-content">
        <div className="about-image">
          <img src={profile_img} alt="Mino Khosravi" />
        </div>

        <div className="skills-section">
          <h2>Skills & Tools</h2>

          <div className="skills-list">
            {skills.map((skill) => (
              <span className="skill-chip" key={skill}>
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="about-achievements">
        <div className="about-achievement">
          <h1>10+</h1>
          <p>Projects Completed</p>
        </div>

        <hr />

        <div className="about-achievement">
          <h1>15+</h1>
          <p>Technologies Learned</p>
        </div>

        <hr />

        <div className="about-achievement">
          <h1>2+</h1>
          <p>Years of Learning</p>
        </div>
      </div>
    </section>
  );
};

export default About;