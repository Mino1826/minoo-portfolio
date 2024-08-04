
import "./hero.css";
import profile_img from "../../assets/minoo.png";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
  return (
    <div className="hero" id="hero">
      <img src={profile_img} alt="" />
      <h1>
        <span>I'm Minoo Khosravi,</span> frontend developer based in Iran
      </h1>
      <p>
        I am frontend developer from Tehran. Motivated and willing to learn, I
        thrive in challenging environments because they provide invaluable
        opportunities for growth.
      </p>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect whit me</AnchorLink></div>
        
      </div>
    </div>
  );
};

export default Hero;
