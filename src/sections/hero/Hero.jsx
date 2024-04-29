import React from 'react'
import { FaLinkedin, FaGithub } from "react-icons/fa";
import profilePic from '/portfolio-pic1.png';
import resume from '/Resume-Vighnesh-Brahme.pdf';
import './Hero.scss';

const Hero = () => {
  return (
    <section id='hero'>
      <div className="pic">
        <img src={profilePic} alt="my profile pic" />
      </div>
      <div className="content">
        <p>Hello, I'm</p>
        <p>Vighnesh Brahme</p>
        <p>Frontend Developer</p>
        <div className="btn-container">
          <a href={resume} target="_blank">Download Resume</a>
          <a href='#contact'>Contact Info</a>
        </div>
        <div className="socials">
          <a href="https://www.linkedin.com/in/vighneshbrahme/">
            <FaLinkedin />
          </a>
          <a href="https://github.com/ThePhoenix08">
            <FaGithub />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero