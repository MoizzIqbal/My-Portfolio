import React, { useState } from "react";
import myprofile from "/assets/img/pic.png";
import { IoHomeOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { IoDocumentTextOutline } from "react-icons/io5";
import { FaRegImages } from "react-icons/fa";
import { BsHddStack } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
// import { Link } from "react-scroll";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [opennav, setOpenNav] = useState(false);
  const handleNav = () => {
    setOpenNav(!opennav);
  };

  return (
    <>
      <header
        id="header"
        onClick={handleNav}
        className={`header dark-background d-flex flex-column ${
          opennav === true ? " header-show" : ""
        }`}
      >
        {/* <i className="header-toggle d-xl-none bi bi-list"></i> */}
        <i
          class={`header-toggle d-xl-none fa-solid ${
            opennav === true ? "fa-xmark" : "fa-bars"
          }`}
        ></i>

        <div className="profile-img">
          <img
            src={myprofile}
            alt="Profile"
            className="img-fluid rounded-circle"
          />
        </div>

        <a
          href="/"
          className="logo d-flex align-items-center justify-content-center"
        >
          <h1 className="sitename">Moiz Iqbal</h1>
        </a>

        <div className="social-links text-center">
          <a
            href="https://wa.me/03124240210"
            target="_blank"
            rel="noopener noreferrer"
            className="facebook"
          >
            <i className="fa-brands fa-whatsapp"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/moiziqbal1/"
            target="_blank"
            className="linkedin"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a href="https://www.instagram.com/itx__moizz" target="_blank" className="instagram">
            <i className="fa-brands fa-instagram"></i>
          </a>
        </div>

        <nav id="navmenu" className="navmenu">
          <ul>
            <li>
              <NavLink
                to="/"
                smooth={true}
                duration={500}
                spy={true}
                offset={-50}
                className={`nav-link `}
              >
                <IoHomeOutline className="navicon" /> Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                smooth={true}
                duration={500}
                spy={true}
                offset={-50}
                className="nav-link"
              >
                <FaRegUser className="navicon" /> About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/resume"
                smooth={true}
                duration={500}
                spy={true}
                offset={-50}
                className="nav-link"
              >
                <IoDocumentTextOutline className="navicon" /> Resume
              </NavLink>
            </li>
            {/* <li>
              <NavLink
                to="/portfolio"
                smooth={true}
                duration={500}
                spy={true}
                offset={-50}
                className="nav-link"
              >
                <FaRegImages className="navicon" /> Download
              </NavLink>
            </li> */}
            <li>
              <NavLink
                to="/projects"
                smooth={true}
                duration={500}
                spy={true}
                offset={-50}
                className="nav-link"
              >
                <BsHddStack className="navicon" /> Projects
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                smooth={true}
                duration={500}
                spy={true}
                offset={-50}
                className="nav-link"
              >
                <MdEmail className="navicon" /> Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
