import React, { useEffect, useState } from "react";
import { BsFillInfoCircleFill } from "react-icons/bs";
import { RiGraduationCapFill } from "react-icons/ri";
import { FaFileCode, FaHome } from "react-icons/fa";
import { PiCertificateFill } from "react-icons/pi";
import { GrContact } from "react-icons/gr";
import { useMediaQuery } from 'react-responsive'
import './Header.scss';

const Header = () => {
  const isMobileView = useMediaQuery({
    query: '(max-width: 600px)'
  })

  return (
    <header>
      <nav>
        { isMobileView ? (
          <ul className="nav-links">
            <li><a href="#"><FaHome /></a></li>
            <li><a href="#about"><BsFillInfoCircleFill /></a></li>
            <li><a href="#education"><RiGraduationCapFill /></a></li>
            <li><a href="#projects"><FaFileCode /></a></li>
            <li><a href="#certifications"><PiCertificateFill /></a></li>
            <li><a href="#contact"><GrContact /></a></li>
          </ul>
        ) : (
          <>
            <div className="logo">Vighnesh Brahme</div>
            <ul className="nav-links">
              <li><a href="#about">About</a></li>
              <li><a href="#education">Education</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#certifications">Certifications</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
