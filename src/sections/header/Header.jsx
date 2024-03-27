import React, { useEffect, useState } from "react";
import { useMediaQuery } from 'react-responsive'
import './Header.scss';
import Navbar from "../../components/nav-bar/Navbar";

const Header = () => {
  const isMobileView = useMediaQuery({
    query: '(max-width: 1000px)'
  })

  return (
    <header>
      <nav>
        { !isMobileView && (
          <>
            <div className="logo">Vighnesh Brahme</div>
            <ul className="nav-links-header">
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
        </>
        )}
      </nav>
      <Navbar />
    </header>
  );
};

export default Header;
