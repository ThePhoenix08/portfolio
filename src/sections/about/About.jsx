import React from "react";
import profilePic from "/portfolio-pic2.png";
import { FaAward, FaUserGraduate } from "react-icons/fa";
import './About.scss';

const About = () => {
  return (
    <section id="about">
      <p>Get To Know More</p>
      <p className="heading">About Me</p>
      <div className="container">
        <div className="pic">
          <img src={profilePic} alt="my pic" />
        </div>
        <div className="content">
          <div className="details-container">
            <div className="detail-box">
              <FaAward />
              <p className="head">Experience</p>
              <p>
                1 Year
                <br />
                Front End Development, Problem Solving
              </p>
            </div>
            <div className="detail-box">
              <FaUserGraduate />
              <p className="head">Education</p>
              <p>
                Sophomore
                <br />
                Pursuing B. E in Computer Engineering, at SPPU
              </p>
            </div>
          </div>
          <div className="text-box">
            <p>
              I'm Vighnesh Brahme, a Computer Engineering student passionate
              about technology and software development. Proficient in C, C++,
              Python, and JavaScript, I specialize in creating dynamic user
              interfaces with HTML, CSS, and JavaScript. I'm dedicated to
              becoming a full-stack developer, driven by a love for
              problem-solving and turning concepts into reality.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
