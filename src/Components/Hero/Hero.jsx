import "./hero.css";
import profile_img from "../../assets/minoo.png";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
  return (
    <section className="hero" id="hero">
      <img src={profile_img} alt="Minoo Khosravi" className="hero-img" />

      <h1>
        <span>I'm Minoo Khosravi,</span> Junior Full Stack Developer
      </h1>

      <p>
        I build web applications using Java, Spring Boot, React, JavaScript,
        Node.js, SQL, and MongoDB. I am passionate about backend development,
        REST APIs, clean code, and continuously improving through hands-on
        projects.
      </p>

      <div className="hero-action">
        <AnchorLink className="hero-connect" offset={50} href="#contact">
          Connect with me
        </AnchorLink>

        <AnchorLink className="hero-resume" offset={50} href="#projects">
          View Projects
        </AnchorLink>
      </div>
    </section>
  );
};

export default Hero;