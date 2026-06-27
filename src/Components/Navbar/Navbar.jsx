import "./navbar.css";
import { useRef, useState } from "react";
import underline from "../../assets/nav_underline.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import menu_open from "../../assets/menu_open.svg";
import menu_close from "../../assets/menu_close.svg";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0";
  };

  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
  };

  const handleMenuClick = (menuName) => {
    setMenu(menuName);
    closeMenu();
  };

  return (
    <nav className="navbar">
      <AnchorLink className="brand anchor-link" href="#home">
        <span>Mkrv</span>
      </AnchorLink>

      <img
        src={menu_open}
        onClick={openMenu}
        alt="Open menu"
        className="nav-mob-open"
      />

      <ul ref={menuRef} className="nav-menu">
        <img
          className="nav-mob-close"
          src={menu_close}
          onClick={closeMenu}
          alt="Close menu"
        />

        <li>
          <AnchorLink className="anchor-link" href="#home">
            <p onClick={() => handleMenuClick("home")}>Home</p>
          </AnchorLink>
          {menu === "home" && <img src={underline} alt="" />}
        </li>

        <li>
          <AnchorLink className="anchor-link" offset={50} href="#about">
            <p onClick={() => handleMenuClick("about")}>About</p>
          </AnchorLink>
          {menu === "about" && <img src={underline} alt="" />}
        </li>

        <li>
          <AnchorLink className="anchor-link" offset={50} href="#services">
            <p onClick={() => handleMenuClick("services")}>Expertise</p>
          </AnchorLink>
          {menu === "services" && <img src={underline} alt="" />}
        </li>

        <li>
          <AnchorLink className="anchor-link" offset={50} href="#work">
            <p onClick={() => handleMenuClick("work")}>Projects</p>
          </AnchorLink>
          {menu === "work" && <img src={underline} alt="" />}
        </li>

        <li>
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            <p onClick={() => handleMenuClick("contact")}>Contact</p>
          </AnchorLink>
          {menu === "contact" && <img src={underline} alt="" />}
        </li>
      </ul>

    </nav>
  );
};

export default Navbar;