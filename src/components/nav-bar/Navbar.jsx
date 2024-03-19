import React, { useEffect, useState } from 'react'

import { RiGraduationCapFill } from "react-icons/ri";
import { FaFileCode, FaHome } from "react-icons/fa";
import { PiCertificateFill } from "react-icons/pi";
import { GiSkills } from "react-icons/gi";
import { GrContact } from "react-icons/gr";
import "./navbar.scss";

const Navbar = () => {
  const [currentSection, setCurrentSection] = useState("hero");
  
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");

      sections.forEach((section) => {
        const { top, bottom } = section.getBoundingClientRect();

        if (top <= 0 && bottom > 0 && currentSection !== section.id) {
          setCurrentSection(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [currentSection]);


  return (
    <div className='navbar'>
      <ul className="nav-links">
        <li><a href='#hero' className={`${currentSection === 'hero' && "active"}`}><FaHome /></a></li>
        <li><a href='#about' className={`${currentSection === 'about' && "active"}`}><RiGraduationCapFill /></a></li>
        <li><a href='#skills' className={`${currentSection === 'skills' && "active"}`}><GiSkills /></a></li>
        <li><a href='#certifications' className={`${currentSection === 'certifications' && "active"}`}><PiCertificateFill /></a></li>
        <li><a href='#projects' className={`${currentSection === 'projects' && "active"}`}><FaFileCode /></a></li>
        <li><a href='#contact' className={`${currentSection === 'contact' && "active"}`}><GrContact /></a></li>
      </ul>
    </div>
  )
}

export default Navbar