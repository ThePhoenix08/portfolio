import React from 'react'
import { BsFillInfoCircleFill } from "react-icons/bs";
import { RiGraduationCapFill } from "react-icons/ri";
import { FaFileCode, FaHome } from "react-icons/fa";
import { PiCertificateFill } from "react-icons/pi";
import { GiSkills } from "react-icons/gi";
import { GrContact } from "react-icons/gr";
import "./navbar.scss";

const Navbar = () => {
  return (
    <div className='navbar'>
      <ul className="nav-links">
        <li><a href="#hero"><FaHome /></a></li>
        <li><a href="#about"><RiGraduationCapFill /></a></li>
        <li><a href="#skills"><GiSkills /></a></li>
        <li><a href="#projects"><FaFileCode /></a></li>
        <li><a href="#certifications"><PiCertificateFill /></a></li>
        <li><a href="#contact"><GrContact /></a></li>
      </ul>
    </div>
  )
}

export default Navbar