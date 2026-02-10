import React, { useRef, useState } from "react";
import "./Navbar.css";
import underline from "../../assets/underline.svg";
import toggle_icon from "../../assets/toggle.svg";
import close_icon from "../../assets/close_icon.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";
const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const menuRef = useRef();

  const openMenu = ()=>{
    menuRef.current.style.right="0";
  }
  const closeMenu = ()=>{
    menuRef.current.style.right="-350px";
  }
  return (
    <div className="navbar">
      <h1>Labib Ahammed</h1>
      <img src={toggle_icon} alt="toggle icon" className="nav-mob-open" onClick={openMenu}/>
      <ul className="nav-menu" ref={menuRef}>
        <img src={close_icon} alt="close icon" className="nav-mob-close" onClick={closeMenu}/>
        <li>
          <AnchorLink className="anchor-link" href="#home">
            <p onClick={() => setMenu("home")}>Home</p>
          </AnchorLink>
          {menu === "home" ? (
            <img src={underline} alt="underline home" />
          ) : (
            <></>
          )}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#about">
            <p onClick={() => setMenu("about")}>About Me</p>
          </AnchorLink>
          {menu === "about" ? (
            <img src={underline} alt="underline about" />
          ) : (
            <></>
          )}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#services">
            <p onClick={() => setMenu("services")}>Services</p>
          </AnchorLink>
          {menu === "services" ? (
            <img src={underline} alt="underline services" />
          ) : (
            <></>
          )}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#mywork">
            <p onClick={() => setMenu("mywork")}>Portfolio</p>
          </AnchorLink>
          {menu === "mywork" ? (
            <img src={underline} alt="underline portfolio" />
          ) : (
            <></>
          )}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            <p onClick={() => setMenu("contact")}>Contact</p>
          </AnchorLink>
          {menu === "contact" ? (
            <img src={underline} alt="underline contact" />
          ) : (
            <></>
          )}
        </li>
      </ul>
      <div className="nav-connect">
        <AnchorLink className="anchor-link" offset={50} href="#contact">
          Connect With Me
        </AnchorLink>
      </div>
    </div>
  );
};

export default Navbar;
